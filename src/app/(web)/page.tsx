
import { Button } from "@/components/button";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.hero}>
        <div className={styles.left}>
          <h1 className={styles.title}>Crie seu Espaço Online com Profissionalismo</h1>
          <p>Somos uma agência especializada na construção de sites profissionais. Com experiência e habilidades, estamos comprometidos em criar espaços online de alta qualidade que representem a identidade e os objetivos de nossos clientes.</p>
          <div className={styles.actions}>
          <Link href="https://legiaodigital.com.br/">
            <Button text="Quero meu site" />
          </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.moldura}>
            <img src="https://source.unsplash.com/random?a=1" alt="Abstract" />
          </div>
        </div>
      </div>

      <div className={styles.hero}>

        <div className={styles.right}>

          <div className={`${styles.mosaico} ${styles.grid}`}>
            <div className={styles.containerImg}>
              <img src="https://source.unsplash.com/random?b=1" alt="Abstract" />
            </div>
            <div className={styles.containerImg}>
              <img src="https://source.unsplash.com/random?c=1" alt="Abstract" />
            </div>
            <div className={styles.containerImg}>
              <img src="https://source.unsplash.com/random?d=1" alt="Abstract" />
            </div>
          </div>

        </div>

        <div className={styles.left}>
          <h1 className={styles.title}>Oferecemos uma variedade de serviços, incluindo sites corporativos</h1>
             <p>Sites de comércio eletrônico, blogs e páginas de destino. Implementamos recursos como design responsivo, otimização para mecanismos de busca (SEO) e integração com mídias sociais.</p>
        </div>

      </div>

      <div className={styles.hero}>
        <div className={styles.left}>
          <h1 className={styles.title}>Nosso processo de criação envolve análise de requisitos, design personalizado</h1>
          <p>Desenvolvimento avançado e revisões iterativas para garantir que o site final atenda às expectativas dos clientes. Colaboramos de perto para alcançar resultados excepcionais.</p>
          <div className={styles.actions}>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.moldura2}>
            <img src="https://source.unsplash.com/random?c=1" alt="Abstract" />
          </div>
        </div>
      </div>
    </main>


  )
}
