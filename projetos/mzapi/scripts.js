// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    console.log('showPasswordResetScreen disponível:', typeof showPasswordResetScreen);
});

// Micro-animations for interactive elements
class MicroAnimations {
    static rotateSunToMoon(element, duration = 600) {
        element.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;
        element.style.transform = 'rotate(180deg)';
    }

    static rotateMoonToSun(element, duration = 600) {
        element.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;
        element.style.transform = 'rotate(0deg)';
    }

    static pulse(element, scale = 1.1, duration = 200) {
        element.style.transition = `transform ${duration}ms ease-in-out`;
        element.style.transform = `scale(${scale})`;
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, duration);
    }

    static shake(element, intensity = 5, duration = 300) {
        element.style.transition = `transform ${duration}ms ease-in-out`;
        
        let startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const x = Math.sin(progress * Math.PI * 4) * intensity;
            element.style.transform = `translateX(${x}px)`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        animate();
    }

    static bounce(element, height = 10, duration = 400) {
        element.style.transition = `transform ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
        element.style.transform = `translateY(-${height}px)`;
        
        setTimeout(() => {
            element.style.transform = 'translateY(0)';
        }, duration);
    }

    static slideIn(element, direction = 'right', distance = 20, duration = 300) {
        element.style.transition = `transform ${duration}ms ease-out`;
        const startTransform = direction === 'right' ? `translateX(${distance}px)` : `translateX(-${distance}px)`;
        element.style.transform = startTransform;
        element.style.opacity = '0';
        
        setTimeout(() => {
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1';
        }, 50);
    }

    static wiggle(element, intensity = 3, duration = 200) {
        element.style.transition = `transform ${duration}ms ease-in-out`;
        
        let startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const rotation = Math.sin(progress * Math.PI * 6) * intensity;
            element.style.transform = `rotate(${rotation}deg)`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        animate();
    }

    static glow(element, color = '#4298B5', duration = 300) {
        element.style.transition = `box-shadow ${duration}ms ease-in-out`;
        element.style.boxShadow = `0 0 20px ${color}`;
        
        setTimeout(() => {
            element.style.boxShadow = '';
        }, duration);
    }

    static typewriter(element, text, speed = 50) {
        element.innerHTML = '';
        let index = 0;
        
        const typeChar = () => {
            if (index < text.length) {
                element.innerHTML += text[index];
                index++;
                setTimeout(typeChar, speed);
            }
        };
        
        typeChar();
    }

    static float(element, duration = 2000) {
        element.style.transition = `transform ${duration}ms ease-in-out`;
        element.style.animation = `float ${duration}ms ease-in-out infinite`;
        
        // Add floating keyframes if not exists
        if (!document.querySelector('#float-keyframes')) {
            const style = document.createElement('style');
            style.id = 'float-keyframes';
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    static heartbeat(element, duration = 1000) {
        element.style.animation = `heartbeat ${duration}ms ease-in-out infinite`;
        
        // Add heartbeat keyframes if not exists
        if (!document.querySelector('#heartbeat-keyframes')) {
            const style = document.createElement('style');
            style.id = 'heartbeat-keyframes';
            style.textContent = `
                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    10%, 30%, 50%, 70%, 90% { transform: scale(1.1); }
                    20%, 40%, 60%, 80% { transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Enhanced theme toggle with rotation animation
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    
    if (html.classList.contains('dark')) {
        // Switching to light mode - rotate moon to sun
        MicroAnimations.rotateMoonToSun(themeIcon);
        
        setTimeout(() => {
            html.classList.remove('dark');
            themeIcon.setAttribute('data-lucide', 'sun');
            localStorage.setItem('theme', 'light');
            triggerToast('Tema Claro');
            lucide.createIcons();
        }, 300);
        
    } else {
        // Switching to dark mode - rotate sun to moon
        MicroAnimations.rotateSunToMoon(themeIcon);
        
        setTimeout(() => {
            html.classList.add('dark');
            themeIcon.setAttribute('data-lucide', 'moon');
            localStorage.setItem('theme', 'dark');
            triggerToast('Tema Escuro');
            lucide.createIcons();
        }, 300);
    }
}

// Enhanced button animations
function animateButton(button, type = 'pulse') {
    switch(type) {
        case 'pulse':
            MicroAnimations.pulse(button);
            break;
        case 'bounce':
            MicroAnimations.bounce(button);
            break;
        case 'shake':
            MicroAnimations.shake(button);
            break;
        case 'wiggle':
            MicroAnimations.wiggle(button);
            break;
        case 'glow':
            MicroAnimations.glow(button);
            break;
    }
}

// Enhanced toast with slide animation
function triggerToast(text) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    
    // Reset and slide in
    toast.style.transition = 'none';
    toast.style.transform = 'translateX(-50%) translateY(-100px)';
    toast.style.opacity = '0';
    toastText.innerText = text;
    
    // Trigger animation
    requestAnimationFrame(() => {
        toast.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        toast.style.opacity = '1';
    });
    
    // Auto hide
    setTimeout(() => {
        toast.style.transition = 'all 0.3s ease-in';
        toast.style.transform = 'translateX(-50%) translateY(-100px)';
        toast.style.opacity = '0';
    }, 3000);
}

// Screen navigation functions
function showLoginScreen() {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById('login-screen').classList.remove('hidden');
    triggerToast('Tela de Login');
}

function showEmailLoginScreen() {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById('email-login-screen').classList.remove('hidden');
    triggerToast('Login por E-mail');
}

function showRegistrationScreen() {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById('registration-screen').classList.remove('hidden');
    triggerToast('Cadastro');
}

function showMagicLinkSentScreen(email) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById('magic-link-sent-screen').classList.remove('hidden');
    document.getElementById('magic-link-email').textContent = email;
    triggerToast('Link enviado!');
}

function showPasswordResetScreen() {
    console.log('showPasswordResetScreen chamada');
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    const resetScreen = document.getElementById('password-reset-screen');
    console.log('Tela encontrada:', resetScreen);
    if (resetScreen) {
        resetScreen.classList.remove('hidden');
        triggerToast('Redefinir Senha');
    } else {
        console.error('Tela password-reset-screen não encontrada');
    }
}

function showPasswordResetSentScreen(email) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById('password-reset-sent-screen').classList.remove('hidden');
    document.getElementById('reset-email-display').textContent = email;
    triggerToast('E-mail de redefinição enviado!');
}

function sendPasswordResetEmail() {
    const email = document.getElementById('reset-email').value;
    
    if (!email) {
        triggerToast('Por favor, digite seu e-mail');
        return;
    }
    
    // Simulate sending password reset email
    triggerToast('Enviando e-mail de redefinição...');
    MicroAnimations.pulse(event.target);
    
    setTimeout(() => {
        showPasswordResetSentScreen(email);
    }, 1500);
}

// Login functions
function loginWithGoogle() {
    // Simulate Google OAuth
    triggerToast('Redirecionando para Google...');
    MicroAnimations.pulse(event.target);
    
    setTimeout(() => {
        triggerToast('Login com Google simulado');
        goToPlans();
    }, 1500);
}

function loginWithEmail() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        triggerToast('Preencha todos os campos');
        MicroAnimations.shake(document.querySelector('.login-form'));
        return;
    }
    
    // Simulate email login
    triggerToast('Verificando credenciais...');
    MicroAnimations.pulse(event.target);
    
    setTimeout(() => {
        triggerToast('Login realizado com sucesso!');
        goToPlans();
    }, 1500);
}

function registerWithGoogle() {
    triggerToast('Redirecionando para Google...');
    MicroAnimations.pulse(event.target);
    
    setTimeout(() => {
        triggerToast('Cadastro com Google simulado');
        showMagicLinkSentScreen('usuario@gmail.com');
    }, 1500);
}

function registerWithEmail() {
    const email = document.getElementById('register-email').value;
    
    if (!email) {
        triggerToast('Preencha seu e-mail');
        MicroAnimations.shake(document.querySelector('.registration-form'));
        return;
    }
    
    // Simulate sending magic link
    triggerToast('Enviando link mágico...');
    MicroAnimations.pulse(event.target);
    
    setTimeout(() => {
        showMagicLinkSentScreen(email);
    }, 1500);
}

function simulateMagicLinkAccess() {
    triggerToast('Acessando com link mágico...');
    MicroAnimations.pulse(event.target);
    
    setTimeout(() => {
        triggerToast('Acesso autorizado!');
        goToPlans();
    }, 1500);
}

// Original functions
function goToPlans() {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById('plans-screen').classList.remove('hidden');
    triggerToast('Bem-vindo!');
}

function enterSystem() {
    document.getElementById('plans-screen').classList.add('hidden');
    document.getElementById('main-system').classList.remove('hidden');
    showPage('dashboard');
    triggerToast('Acesso Liberado');
}

function logout() {
    document.getElementById('main-system').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
    triggerToast('Sessão encerrada');
}

function showPage(page) {
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('bg-blue-50', 'text-blue-700'));
    document.getElementById('page-title').innerText = page.charAt(0).toUpperCase() + page.slice(1);
    document.getElementById(page + '-page').classList.remove('hidden');
    document.getElementById('btn-' + page).classList.add('bg-blue-50', 'text-blue-700');
}

function setMode(mode) {
    currentQAMode = mode;
    const container = document.getElementById('qa-input-container');
    const btns = { manual: 'mode-manual', file: 'mode-file', ai: 'mode-ai' };
    Object.values(btns).forEach(id => document.getElementById(id).className = "flex-1 py-2 bg-white border text-slate-500 rounded-xl text-[9px] font-bold");
    const activeBtn = document.getElementById(btns[mode]);
    if(mode === 'ai') {
        activeBtn.className = "flex-1 py-2 bg-purple-600 text-white rounded-xl text-[9px] font-bold shadow-lg";
        container.innerHTML = `<textarea id="qa-a" class="w-full px-4 py-3 rounded-xl text-xs border border-purple-200 bg-purple-50/30 h-24 outline-none animate-fade" readonly>[IA Sugestão]: Baseado no contexto, o Edifício Ascendino é ideal para investidores pela alta valorização do Tatuapé.</textarea>`;
    } else if(mode === 'file') {
        activeBtn.className = "flex-1 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-bold shadow-lg";
        container.innerHTML = `<input type="file" id="qa-f" class="w-full p-8 border-2 border-dashed border-slate-200 rounded-xl text-[10px] bg-white animate-fade">`;
    } else {
        activeBtn.className = "flex-1 py-2 bg-white border border-blue-600 text-blue-600 rounded-xl text-[9px] font-bold";
        container.innerHTML = `<textarea id="qa-a" placeholder="Resposta..." class="w-full px-4 py-3 rounded-xl text-xs border h-24 outline-none animate-fade"></textarea>`;
    }
    triggerToast('Modo FAQ: ' + mode.toUpperCase());
}

function toggleIA(btn) {
    const active = btn.classList.contains('bg-blue-50');
    btn.className = active ? "flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200" : "flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100";
    btn.innerHTML = active ? `<span class="w-2 h-2 bg-slate-400 rounded-full"></span><span class="text-[10px] font-bold text-slate-600 uppercase">Manual</span>` : `<span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span><span class="text-[10px] font-bold text-blue-700 uppercase tracking-widest">SDR ATIVO</span>`;
    triggerToast(active ? 'Controle Manual' : 'IA Ativada');
}

function disableIA() { const btn = document.querySelector('button[onclick="toggleIA(this)"]'); if (btn.classList.contains('bg-blue-50')) toggleIA(btn); }

function switchKTab(tab) {
    ['web', 'docs', 'qa'].forEach(t => { document.getElementById('ktab-' + t).classList.add('hidden'); document.getElementById('tab-' + t).classList.remove('tab-active'); });
    document.getElementById('ktab-' + tab).classList.remove('hidden'); document.getElementById('tab-' + tab).classList.add('tab-active');
}

function addK(type) {
    const t = document.getElementById('table-' + type);
    let n = "", d = "";
    if(type==='web'){ n=document.getElementById('web-n').value; d=document.getElementById('web-u').value; }
    if(type==='docs'){ n=document.getElementById('doc-n').value; d='documento_importado.pdf'; }
    if(type==='qa'){ n=document.getElementById('qa-q').value; d=(currentQAMode==='file') ? 'arquivo_fonte.txt' : document.getElementById('qa-a').value; }
    if(!n) return triggerToast('Preencha os campos!');
    const r = document.createElement('tr');
    r.className = "hover:bg-slate-50 transition animate-fade";
    r.innerHTML = `<td class="px-6 py-4"><p class="text-xs font-bold text-slate-800">${n}</p><p class="text-[9px] text-slate-400 tracking-wider truncate max-w-[400px]">${d}</p></td><td class="px-6 py-4 flex gap-6 text-slate-300 justify-end"><button class="hover:text-blue-600" onclick="triggerToast('Editando...')"><i data-lucide="edit-3" class="w-4 h-4"></i></button><button class="hover:text-red-500" onclick="this.parentElement.parentElement.remove(); triggerToast('Removido')"><i data-lucide="trash-2" class="w-4 h-4 text-red-500"></i></button></td>`;
    t.prepend(r); lucide.createIcons(); triggerToast('Fonte Adicionada!');
}

function disconnectWhatsApp() {
    // Update status to disconnected
    const statusBadge = document.querySelector('.bg-green-100.text-green-700');
    const phoneNumber = document.querySelector('.text-slate-600.font-medium');
    const connectButton = document.querySelector('button[onclick="connectWhatsApp()"]');
    
    if (statusBadge) {
        statusBadge.textContent = 'Desconectado';
        statusBadge.className = 'px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full';
    }
    
    if (phoneNumber) {
        phoneNumber.textContent = 'Não configurado';
        phoneNumber.className = 'text-sm text-slate-400';
    }
    
    // Show connect button again
    if (connectButton) {
        connectButton.style.display = 'block';
    }
    
    triggerToast('WhatsApp desconectado com sucesso!');
    MicroAnimations.pulse(event.target);
}

function askCopilot() {
    const question = document.getElementById('copilot-question').value;
    const conversationDiv = document.getElementById('copilot-conversation');
    
    if (!question.trim()) {
        triggerToast('Por favor, digite uma pergunta');
        return;
    }
    
    // Add user question to conversation history
    const userQuestionDiv = document.createElement('div');
    userQuestionDiv.className = 'bg-white rounded-xl p-3 mb-3 animate-fade';
    userQuestionDiv.innerHTML = `
        <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                JS
            </div>
            <div>
                <p class="text-sm font-medium text-slate-900">Sua pergunta</p>
                <p class="text-xs text-slate-400">${question}</p>
            </div>
        </div>
    `;
    
    conversationDiv.appendChild(userQuestionDiv);
    
    // Show loading state and create AI response
    const responseDiv = document.createElement('div');
    responseDiv.className = 'bg-white rounded-xl p-3 mb-3 animate-fade';
    responseDiv.innerHTML = `
        <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                IA
            </div>
            <div>
                <p class="text-sm font-medium text-slate-900">Resposta da IA</p>
                <p class="text-xs text-slate-400">Pensando...</p>
            </div>
        </div>
    `;
    
    conversationDiv.appendChild(responseDiv);
    
    // Simulate AI response with delay
    setTimeout(() => {
        const responses = [
            'Com base na sua pergunta, sugiro focar em qualificar melhor os leads antes de agendar visitas.',
            'Uma boa estratégia seria usar gatilhos de escassez mencionando imóveis com alta demanda.',
            'Recomendo personalizar as mensagens com base no perfil de cada lead para aumentar a conversão.',
            'Considere seguir um script de 3 etapas: apresentação, qualificação e chamada para ação.',
            'O ideal é responder em até 5 minutos para manter o engajamento do lead.'
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        responseDiv.querySelector('p:last-child').textContent = randomResponse;
        
        triggerToast('Resposta gerada com sucesso!');
        MicroAnimations.pulse(responseDiv);
    }, 1500);
    
    // Scroll to bottom to show new question
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
    
    // Clear question input
    document.getElementById('copilot-question').value = '';
}

function sendCopilotMessage() {
    const input = document.getElementById('copilot-input');
    const message = input.value.trim();
    
    if (!message) {
        triggerToast('Por favor, digite uma mensagem');
        return;
    }
    
    // Add message to conversation
    const conversationDiv = document.getElementById('copilot-conversation');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bg-white rounded-xl p-3 mb-3 animate-fade';
    messageDiv.innerHTML = `
        <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                JS
            </div>
            <div class="flex-1">
                <p class="text-sm font-medium text-slate-900">${message}</p>
                <p class="text-xs text-slate-400">Enviando...</p>
            </div>
        </div>
    `;
    
    conversationDiv.appendChild(messageDiv);
    
    // Clear input
    input.value = '';
    
    // Scroll to bottom
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
    
    triggerToast('Mensagem enviada para a IA!');
    MicroAnimations.pulse(input);
}

function showProfileManager() {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById('profile-page').classList.remove('hidden');
    triggerToast('Gerenciador de Perfil');
}

function saveProfile() {
    const name = document.getElementById('profile-name').value;
    const bio = document.getElementById('profile-bio').value;
    
    // Save to localStorage
    localStorage.setItem('user-name', name);
    localStorage.setItem('user-bio', bio);
    
    // Update header profile display
    const headerName = document.querySelector('.truncate');
    if (headerName) {
        headerName.textContent = name;
    }
    
    triggerToast('Perfil salvo com sucesso!');
    MicroAnimations.pulse(event.target);
}

function showUpgradeModal() {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    
    // Show plans screen
    document.getElementById('plans-screen').classList.remove('hidden');
    
    triggerToast('Faça upgrade para o plano Standard para acessar este recurso!');
    MicroAnimations.pulse(event.target);
}

// Settings functions
function switchSettingsTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.settings-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remove active state from all tab buttons
    document.querySelectorAll('.settings-tab').forEach(btn => {
        btn.classList.remove('border-b-2', 'border-blue-600', 'text-blue-600');
        btn.classList.add('text-slate-600');
    });
    
    // Show selected tab
    document.getElementById(tabName + '-tab').classList.remove('hidden');
    
    // Add active state to selected tab button
    const activeBtn = document.querySelector(`[data-tab="${tabName}"]`);
    activeBtn.classList.add('border-b-2', 'border-blue-600', 'text-blue-600');
    activeBtn.classList.remove('text-slate-600');
    
    // Re-create Lucide icons
    lucide.createIcons();
}

function setTone(toneType) {
    const slider = document.getElementById('tone-slider');
    const toneValue = document.getElementById('tone-value');
    
    if (toneType === 'friendly') {
        slider.value = 15;
        toneValue.textContent = 'Amigável';
        toneValue.className = 'text-sm font-medium text-green-600';
    } else if (toneType === 'casual') {
        slider.value = 35;
        toneValue.textContent = 'Casual';
        toneValue.className = 'text-sm font-medium text-yellow-600';
    } else if (toneType === 'professional') {
        slider.value = 65;
        toneValue.textContent = 'Profissional';
        toneValue.className = 'text-sm font-medium text-blue-600';
    } else if (toneType === 'corporate') {
        slider.value = 85;
        toneValue.textContent = 'Corporativo';
        toneValue.className = 'text-sm font-medium text-purple-600';
    }
    
    // Update button styles
    document.querySelectorAll('#tone-tab button').forEach(btn => {
        btn.classList.remove('border-blue-500', 'bg-blue-50', 'border-yellow-500', 'bg-yellow-50', 'border-purple-500', 'bg-purple-50');
        btn.classList.add('border-slate-200');
    });
    
    event.target.closest('button').classList.remove('border-slate-200');
    
    // Add specific colors based on tone type
    if (toneType === 'friendly') {
        event.target.closest('button').classList.add('border-green-500', 'bg-green-50');
    } else if (toneType === 'casual') {
        event.target.closest('button').classList.add('border-yellow-500', 'bg-yellow-50');
    } else if (toneType === 'professional') {
        event.target.closest('button').classList.add('border-blue-500', 'bg-blue-50');
    } else if (toneType === 'corporate') {
        event.target.closest('button').classList.add('border-purple-500', 'bg-purple-50');
    }
    
    MicroAnimations.pulse(event.target.closest('button'));
}

function saveSettings() {
    const sdrInstructions = document.getElementById('sdr-instructions').value;
    const toneValue = document.getElementById('tone-slider').value;
    
    // Save to localStorage
    localStorage.setItem('sdr-instructions', sdrInstructions);
    localStorage.setItem('chat-tone', toneValue);
    
    triggerToast('Configurações salvas com sucesso!');
    MicroAnimations.pulse(event.target);
}

function connectWhatsApp() {
    triggerToast('Gerando QR Code para WhatsApp...');
    MicroAnimations.pulse(event.target);
    
    // Simulate QR code generation
    setTimeout(() => {
        triggerToast('QR Code gerado! Escaneie com seu WhatsApp');
        
        // Update status to show connecting
        const statusElements = document.querySelectorAll('#integration-tab .flex.items-center.justify-between');
        if (statusElements[0]) {
            statusElements[0].querySelector('span:last-child').className = 'px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full';
            statusElements[0].querySelector('span:last-child').textContent = 'Conectando...';
        }
        
        // Simulate successful connection after 3 seconds
        setTimeout(() => {
            if (statusElements[0]) {
                statusElements[0].querySelector('span:last-child').className = 'px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full';
                statusElements[0].querySelector('span:last-child').textContent = 'Conectado';
            }
            if (statusElements[1]) {
                statusElements[1].querySelector('span:last-child').textContent = '+55 11 99999-9999';
                statusElements[1].querySelector('span:last-child').className = 'text-sm text-slate-600 font-medium';
            }
            triggerToast('WhatsApp conectado com sucesso!');
        }, 3000);
    }, 1500);
}

// Initialize tone slider
document.addEventListener('DOMContentLoaded', function() {
    const toneSlider = document.getElementById('tone-slider');
    const toneValue = document.getElementById('tone-value');
    
    if (toneSlider && toneValue) {
        toneSlider.addEventListener('input', function() {
            const value = parseInt(this.value);
            
            if (value < 25) {
                toneValue.textContent = 'Amigável';
                toneValue.className = 'text-sm font-medium text-green-600';
            } else if (value < 50) {
                toneValue.textContent = 'Casual';
                toneValue.className = 'text-sm font-medium text-yellow-600';
            } else if (value < 75) {
                toneValue.textContent = 'Profissional';
                toneValue.className = 'text-sm font-medium text-blue-600';
            } else {
                toneValue.textContent = 'Corporativo';
                toneValue.className = 'text-sm font-medium text-purple-600';
            }
        });
        
        // Load saved settings
        const savedInstructions = localStorage.getItem('sdr-instructions');
        const savedTone = localStorage.getItem('chat-tone');
        
        if (savedInstructions) {
            document.getElementById('sdr-instructions').value = savedInstructions;
        }
        
        if (savedTone) {
            toneSlider.value = savedTone;
            toneSlider.dispatchEvent(new Event('input'));
        }
    }
    
    // Load saved profile data
    const savedName = localStorage.getItem('user-name');
    const savedBio = localStorage.getItem('user-bio');
    
    if (savedName) {
        document.getElementById('profile-name').value = savedName;
        // Update header if needed
        const headerName = document.querySelector('.truncate');
        if (headerName) {
            headerName.textContent = savedName;
        }
    }
    
    if (savedBio) {
        document.getElementById('profile-bio').value = savedBio;
    }
});

// Animate navigation buttons
function animateNavButton(button) {
    MicroAnimations.slideIn(button, 'right', 10);
}

// Animate cards on hover
function setupCardAnimations() {
    const cards = document.querySelectorAll('.bg-white, .bg-slate-50');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            MicroAnimations.glow(card, '#4298B5', 200);
        });
        
        card.addEventListener('mouseleave', () => {
            setTimeout(() => {
                card.style.boxShadow = '';
            }, 200);
        });
    });
}

// Animate form inputs on focus
function setupInputAnimations() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            MicroAnimations.glow(input, '#4298B5', 300);
        });
        
        input.addEventListener('blur', () => {
            setTimeout(() => {
                input.style.boxShadow = '';
            }, 300);
        });
    });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        themeIcon.setAttribute('data-lucide', 'moon');
    } else {
        themeIcon.setAttribute('data-lucide', 'sun');
    }
    
    // Create Lucide icons
    lucide.createIcons();
    
    // Setup micro-interactions
    setupCardAnimations();
    setupInputAnimations();
    
    // Add entrance animations
    const entranceElements = document.querySelectorAll('.animate-fade');
    entranceElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Export for external use
window.MicroAnimations = MicroAnimations;
