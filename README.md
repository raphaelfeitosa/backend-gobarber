# Recuperação de senha

**Requisitos Funcionais**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar a sua senha;

**Requisitos não Funcionais**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de Negocios**

- O link enviado por e-mail para resetar a senha, deve expirar em 2horas
- O usuário precisa confirmar a nova senha ao resetar a sua senha;

# Atualização do perfil

**Requisitos Funcionais**

- O usuário deve poder atualizar seu perfil(nome, email e senha);

**Requisitos não Funcionais**


**Regras de Negocios - Sempre atrelada a algum tipo de requisto Funcional**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para Atualizar a sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**Requisitos Funcionais**

- O usuário deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos não Funcionais**

- Os agendamento do prestador no dia devem ser armazenadas em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- AS notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**Regras de Negocios - Sempre atrelada a algum tipo de requisto Funcional**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controllar;


# Agendamento de serviços

**Requisitos Funcionais**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um    prestador;
- O usuário deve poder listar horários disponiveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos não Funcionais**

- A listagem de prestadores deve ser armazenada em cache;


**Regras de Negocios - Sempre atrelada a algum tipo de requisto Funcional**

- Cada agendamento deve durar 1h extamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário que já esteja ocupado;
- O usuário não pdoe agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
