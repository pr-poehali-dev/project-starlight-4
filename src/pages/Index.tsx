import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/817e136e-f8c3-4711-be84-189b3a6d588b/files/6a4eb1fe-60e8-4d20-a601-6076c5a3e575.jpg"

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const features = [
    {
      icon: "Bed",
      title: "Жильё",
      text: "Отели, базы отдыха и гостевые дома — выбирайте проверенные варианты в пару касаний.",
    },
    {
      icon: "Map",
      title: "Экскурсии и гиды",
      text: "Авторские маршруты и местные гиды, которые покажут Кавказ изнутри.",
    },
    {
      icon: "Car",
      title: "Трансфер и прокат",
      text: "Заказывайте трансфер из аэропорта и берите авто в аренду без лишних звонков.",
    },
    {
      icon: "Users",
      title: "Сообщество",
      text: "Общайтесь с путешественниками, делитесь маршрутами и находите попутчиков.",
    },
  ]

  const steps = [
    {
      num: "01.",
      title: "Скачайте приложение",
      text: "Установите KOZAGO на iOS или Android и создайте аккаунт за минуту.",
    },
    {
      num: "02.",
      title: "Выберите услуги",
      text: "Жильё, экскурсии, гиды, трансфер и развлечения — всё в одном месте.",
    },
    {
      num: "03.",
      title: "Бронируйте онлайн",
      text: "Оплачивайте безопасно прямо в приложении и получайте подтверждение мгновенно.",
    },
    {
      num: "04.",
      title: "Путешествуйте",
      text: "Наслаждайтесь поездкой и делитесь впечатлениями с туристическим сообществом.",
    },
  ]

  const faqs: FAQ[] = [
    {
      question: "Что такое KOZAGO?",
      answer:
        "KOZAGO — это мобильное приложение и экосистема для путешественников. В одном месте вы найдёте жильё, экскурсии, гидов, трансфер и развлечения, а также сможете общаться с другими туристами в сообществе.",
    },
    {
      question: "Сколько стоит пользоваться приложением?",
      answer:
        "Скачивание и регистрация бесплатны. Вы платите только за выбранные услуги — бронирование жилья, экскурсии или трансфер. Все цены прозрачны и видны до оплаты.",
    },
    {
      question: "Как стать партнёром KOZAGO?",
      answer:
        "Если вы отель, база отдыха, гостевой дом, гид, экскурсионная компания, прокат, SPA-комплекс или трансфер — оставьте заявку через форму ниже. Мы поможем разместить ваши услуги и привлечь новых клиентов.",
    },
    {
      question: "На каких устройствах работает приложение?",
      answer:
        "KOZAGO доступно на смартфонах с iOS и Android. Скоро запустим веб-версию для удобного планирования поездок с компьютера.",
    },
  ]

  return (
    <div className="min-h-screen bg-orange-50/30 text-slate-900">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/70" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/70 ring-1 ring-white/60 backdrop-blur rounded-full shadow-sm">
            <Icon name="Mountain" className="w-5 h-5 text-primary" />
            <span className="font-bold tracking-tight">KOZAGO</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["Возможности", "Туристам", "Партнёрам", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-white/60 ring-1 ring-white/50 backdrop-blur rounded-full hover:bg-white/80 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden sm:inline-block px-4 py-2 bg-white/60 ring-1 ring-white/50 backdrop-blur rounded-full hover:bg-white/80 transition-colors text-sm font-medium"
            >
              Войти
            </a>
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-6">Скачать приложение</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          <div className="mb-6 px-4 py-2 bg-white/70 ring-1 ring-white/60 backdrop-blur rounded-full shadow-sm">
            <span className="text-sm font-medium text-primary">Туристическая платформа Кавказа</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            Всё для путешествия —<br />в одном приложении
          </h1>

          <p className="text-lg md:text-2xl text-slate-700 max-w-3xl mb-12 leading-relaxed text-pretty">
            KOZAGO объединяет жильё, экскурсии, гидов, трансфер и развлечения. Планируйте поездки по Кавказу и открывайте новые места вместе с сообществом путешественников.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-lg">
              <Icon name="Smartphone" className="w-5 h-5 mr-2" />
              Скачать приложение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/70 ring-1 ring-white/60 backdrop-blur border-0 text-slate-900 hover:bg-white rounded-full px-8 py-6 text-lg"
            >
              Стать партнёром
            </Button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-white/70 ring-1 ring-white/60 backdrop-blur rounded-full shadow-sm">
            <Icon name="Star" className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Тысячи путешественников уже с нами</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">Возможности платформы</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Всё, что нужно для путешествия, собрано в одном приложении.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-8 text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-6">
                  <Icon name={f.icon} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm p-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">Как это работает</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto text-pretty">
                Четыре простых шага от установки приложения до незабываемой поездки.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="rounded-2xl bg-orange-50/60 ring-1 ring-orange-100 p-8 h-72 flex flex-col"
                >
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-primary mb-4">{s.num}</div>
                    <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 py-6 text-lg font-semibold"
              >
                Скачать KOZAGO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-primary text-white p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">Партнёрам KOZAGO</h2>
                <p className="text-lg text-white/90 leading-relaxed mb-8 text-pretty">
                  Отели, базы отдыха, гостевые дома, гиды, экскурсионные компании, прокаты, SPA-комплексы и трансфер — размещайте свои услуги и привлекайте тысячи новых клиентов.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold"
                >
                  Стать партнёром
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Building2", label: "Отели и базы" },
                  { icon: "Compass", label: "Гиды и экскурсии" },
                  { icon: "Car", label: "Прокат и трансфер" },
                  { icon: "Waves", label: "SPA и отдых" },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur p-6 flex flex-col items-center text-center gap-3"
                  >
                    <Icon name={p.icon} className="w-8 h-8" />
                    <span className="font-medium text-sm">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">Частые вопросы</h2>
                <p className="text-lg text-slate-600 leading-relaxed text-pretty">
                  Всё, что нужно знать о платформе KOZAGO: для туристов и для партнёров.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="rounded-2xl bg-orange-50/60 ring-1 ring-orange-100 overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-100/50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      <Icon
                        name={openFaq === index ? "Minus" : "Plus"}
                        className="w-5 h-5 flex-shrink-0 text-primary"
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm p-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="rounded-2xl bg-orange-50/60 ring-1 ring-orange-100 p-8">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Расскажите, чем мы можем помочь..."
                    />
                  </div>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-lg py-3 font-medium text-base">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <p className="text-lg text-slate-700 leading-relaxed text-pretty">
                  Вопросы по платформе, сотрудничеству или для СМИ — пишите нам. Мы отвечаем в течение одного рабочего дня.
                </p>

                <div className="rounded-2xl bg-orange-50/60 ring-1 ring-orange-100 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Icon name="Headphones" className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Команда поддержки</h4>
                      <p className="text-slate-500">KOZAGO</p>
                    </div>
                  </div>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-lg py-3 font-medium">
                    <Icon name="Mail" className="w-4 h-4 mr-2" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Mountain" className="w-6 h-6 text-primary" />
                  <span className="text-xl font-bold">KOZAGO</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-pretty">
                  Туристическая платформа и экосистема для путешественников и партнёров. Жильё, экскурсии, гиды, трансфер, развлечения и сообщество — в одном приложении.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-slate-900">ТУРИСТАМ</h3>
                <ul className="space-y-3">
                  {["Поиск жилья", "Экскурсии", "Гиды", "Трансфер"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-slate-900">ПАРТНЁРАМ</h3>
                <ul className="space-y-3">
                  {["Стать партнёром", "Размещение услуг", "Условия", "Поддержка"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-slate-900">КОМПАНИЯ</h3>
                <ul className="space-y-3">
                  {["О нас", "Контакты", "Вопросы и ответы", "Сообщество"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-slate-600 hover:text-primary transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Новости и обновления</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-orange-50/60 ring-1 ring-orange-100 border-0 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                  <Button className="bg-primary text-white hover:bg-primary/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8">
              <p className="text-slate-500 text-sm text-center">© 2026 KOZAGO. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
