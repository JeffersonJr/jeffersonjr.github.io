<?php namespace App\Controllers;

use Symfony\Component\DomCrawler\Crawler;

class Home extends BaseController
{
    function index(){

        //cache()->clean();
        if (!$itens = cache()->get('feed')) {

            $xml_exportacao = file_get_contents('http://www.siscomex.gov.br/exportacao/feed/');
            $xml_importacao = file_get_contents('http://www.siscomex.gov.br/importacao/feed/');
            $xml_sistemas = file_get_contents('http://www.siscomex.gov.br/sistemas/feed/');

            $itens = [];

            $xml_exportacao = simplexml_load_string($xml_exportacao);
            $xml_exportacao = json_decode(json_encode($xml_exportacao), true);
            $itens_exportacao = $xml_exportacao['channel']['item'];
            $itens_exportacao = array_map(function($v){
                $v['tipo'] = 'exportacao';
                return $v;
            },$itens_exportacao);

            $xml_importacao = simplexml_load_string($xml_importacao);
            $xml_importacao = json_decode(json_encode($xml_importacao), true);
            $itens_importacao = $xml_importacao['channel']['item'];
            $itens_importacao = array_map(function($v){
                $v['tipo'] = 'importacao';
                return $v;
            },$itens_importacao);

            $xml_sistemas = simplexml_load_string($xml_sistemas);
            $xml_sistemas = json_decode(json_encode($xml_sistemas), true);
            $itens_sistemas = $xml_sistemas['channel']['item'];
            $itens_sistemas = array_map(function($v){
                $v['tipo'] = 'sistemas';
                return $v;
            },$itens_sistemas);

            $itens = array_merge($itens_exportacao,$itens_importacao,$itens_sistemas);

            $itens = array_map(function ($v) {
                if($v['link']){
                    $html = file_get_contents($v['link']);
                    $html = new Crawler($html);
                    $v['titulo'] = $html->filter('#titulo_post')->html();
                    switch ($v['tipo']){
                        case 'exportacao':
                            $v['desc'] = $html->filter('span.subtitulo_post:nth-child(4) > p:nth-child(1)')->html();
                            break;
                        case 'importacao':
                            $v['desc'] = $html->filter('span.subtitulo_post:nth-child(3) > p:nth-child(1)')->html();
                            break;
                        case 'sistemas':
                            $v['desc'] = $html->filter('span.subtitulo_post:nth-child(2) > p:nth-child(1)')->html();
                            break;
                    }

                    $v['datas'] = $html->filter('#created_date')->html();
                    if($html->filter('.content > p:nth-child(1)')->count() > 0)
                        $v['conteudo'] = $html->filter('.content > p:nth-child(1)')->html();
                    $v['linkpost'] = $html->filter('#titulo_post > a')->html();
                }
                return $v;
            }, $itens);
            cache()->save('feed', $itens, 1800);
        }
        return view('index', [
            'itens' => $itens
        ]);
    }
}
