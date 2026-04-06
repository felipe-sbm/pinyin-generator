<script setup lang="ts">
import BottomCard from "@/components/BottomCard.vue";
import Server from "@/assets/server.webp";
import {
  BadgeDollarSign,
  BeanOff,
  GlobeX,
  HardDriveDownload,
  Leaf,
  ServerCrash,
} from "@lucide/vue";
</script>

<template>
  <section class="about-hero">
    <h1>Simples,</h1>
    <h2>portanto fácil.</h2>
    <p>
      Em uma era de excesso de recursos computacionais, o Inkstone escolhe
      retornar ao essencial. Através de algoritmos altamente otimizados,
      oferecemos uma solução digital sustentável para a conversão de caracteres
      chineses para Pinyin.
    </p>

    <div class="beam-1"></div>
    <div class="beam-2"></div>
  </section>

  <section class="about-problem">
    <div class="about-problem-heading">
      <span>O Problema</span>
      <h2>Diga adeus à dependência de grandes modelos</h2>
      <p>
        Muitas soluções usam modelos muito grandes para uma tarefa simples,
        criando dependência de nuvem, maior custo e maior consumo de recursos.
      </p>
    </div>

    <div class="about-problem-content">
      <div class="about-problem-left">
        <article class="about-problem-card">
          <h3>
            <span><ServerCrash :size="20" /></span> Infraestrutura pesada
          </h3>
          <p>Mais latência e custo operacional para conversões básicas.</p>
        </article>

        <article class="about-problem-card">
          <h3>
            <span><GlobeX :size="20" /></span> Dependência de internet
          </h3>
          <p>
            Sem conexão estável, o fluxo de estudo e produção é prejudicado.
          </p>
        </article>

        <article class="about-problem-card">
          <h3>
            <span><BeanOff :size="20" /></span> Complexidade desnecessária
          </h3>
          <p>
            Ferramentas simples ficam difíceis de manter e usar no dia a dia.
          </p>
        </article>
      </div>

      <div class="about-problem-right">
        <!-- Créditos para: https://www.freepik.com/free-vector/cloud-computing-concept_1531135.htm#fromView=search&page=1&position=0&uuid=1a3f4fd8-8dca-4d99-87f4-22232383c47a&query=server -->
        <!-- Saturação e escala de cores modificadas no GIMP-->
        <img :src="Server" alt="Servidor em alto uso" />
      </div>
    </div>
  </section>

  <section class="about-solution">
    <div class="about-solution-heading">
      <span>A Solução</span>
      <h2>Aplicando a Lógica <i>Client-Side Rendering</i></h2>
      <p>
        O uso de processamento diretamente no navegador, com código leve e
        simples, permite um uso mais rápido e menos custoso, sem a necessidade
        de grandes modelos ou dependência de nuvem.
      </p>
    </div>

    <div class="about-solution-content">
      <div class="about-solution-column">
        <article class="about-solution-card">
          <span><Leaf :size="25" /></span>
          <h3>Menos uso de dados</h3>
          <p>
            Pelo fato de que o processamento ocorre localmente, é necessário um
            único carregamento para o sistema inteiro funcionar.
          </p>
          <!-- Ficou muito grande o texto que fiz, mas para salvar vou deixar aqui: -->
          <!--
            Não sendo necessária a transferência de dados, o que reduz o consumo de dados
            e torna a experiência mais fluida, mesmo em conexões lentas ou instáveis.
          -->
        </article>
      </div>

      <div class="about-solution-column">
        <article class="about-solution-card">
          <span><HardDriveDownload :size="25" /></span>
          <h3>Download do site</h3>
          <p>
            O site pode ser baixado e utilizado offline, sem necessidade de
            conexão contínua. Pois todo o banco de dados está otimizado e
            inbutido no código, para não ocupar muito espaço (edge computing).
          </p>
        </article>
      </div>

      <div class="about-solution-column">
        <article class="about-solution-card">
          <span><BadgeDollarSign :size="25" /></span>
          <h3>Custo operacional mínimo</h3>
          <p>
            Já que o sistema é simples e não requer infraestrutura pesada.
            Deixamos sem nenhum tipo de monetização, sem propagandas chatas e
            sem cobrança de uso de serviço.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section class="about-info">
    <h2>A Parceria</h2>
    <p>
      O Inkstone surgiu da colaboração entre a UFRN e a ZISU, unindo
      conhecimento técnico e linguagem para criar uma solução prática para
      necessidades reais.
    </p>

    <div class="about-tags">
      <span>UFRN</span>
      <span>ZISU</span>
    </div>
  </section>

  <section class="about-quote">
    <h2>我们的使命：歌罗西书 3:23-24</h2>
    <p>
      “无论做什么，都要从心里做，像是为主做，不是为人做，因你们知道，你们必从主那里得着基业为赏赐。你们所事奉的乃是主基督。”
    </p>
  </section>
  <BottomCard />
</template>

<style scoped lang="scss">
@use "@/style.scss" as *;

.about-hero {
  padding: 1rem 0;
  position: relative;
  overflow: visible;
  isolation: isolate;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  h2 {
    font-size: 2.5rem;
    margin: 0;
    line-height: 1.5rem;
    color: $primary-color;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: $neutral-color;
    margin-top: 2rem;
    max-width: 50rem;
  }

  .beam-1 {
    position: absolute;
    right: -10rem;
    top: -10rem;
    width: 40rem;
    height: 40rem;
    border-radius: 100%;
    background-image: radial-gradient($primary-color 0%, transparent 100%);
    margin-top: 1rem;
    z-index: -1;
    pointer-events: none;
    filter: blur(30px);
    opacity: 0.25;
  }

  .beam-2 {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
    background-image: radial-gradient($primary-color 0%, transparent 100%);
    margin-top: 1rem;
    z-index: -1;
    pointer-events: none;
    filter: blur(30px);
    opacity: 0.15;
  }
}

.about-problem {
  margin: 4rem 0;
  display: grid;

  .about-problem-heading {
    max-width: 40rem;

    span {
      display: inline-block;
      margin-bottom: 0.75rem;
      font-size: 0.8rem;
      font-weight: bold;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
      color: $tertiary-color;
    }

    h2 {
      margin: 0;
      line-height: 1.05;
      color: #163463;
    }

    p {
      margin: 1.25rem 0 0;
      max-width: 34rem;
      font-size: 1.05rem;
      line-height: 1.6;
      color: $neutral-color;
    }
  }

  .about-problem-content {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 2.5rem;
    align-items: center;
  }

  .about-problem-left {
    display: flex;
    gap: 1.15rem;
    flex-direction: column;

    .about-problem-card {
      background-color: white;
      border-radius: 2rem;
      padding: 1.5rem;
      border: 1px solid #0d74f214;
      box-shadow: 0 1px 15px #0d74f214;

      h3 {
        margin: 0;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #163463;

        span {
          width: 1.8rem;
          height: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          background: rgba($tertiary-color, 0.15);
          color: $tertiary-color;
          flex: 0 0 auto;
        }
      }

      p {
        margin: 0;
        margin-top: 0.5rem;
        font-size: 1rem;
        line-height: 1.55;
        color: $neutral-color;
      }
    }
  }

  .about-problem-right {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: min(100%, 30rem);
      height: auto;
      mix-blend-mode: multiply;
    }
  }
}

.about-solution {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  .about-solution-heading {
    max-width: 40rem;
    text-align: center;

    span {
      display: inline-block;
      margin-bottom: 0.75rem;
      font-size: 0.8rem;
      font-weight: bold;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
      color: $primary-color;
    }

    h2 {
      margin: 0;
      line-height: 1.05;
      color: #163463;
    }

    p {
      margin: 1.25rem 0 0;
      max-width: 40rem;
      font-size: 1.05rem;
      line-height: 1.6;
      color: $neutral-color;
    }
  }

  .about-solution-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
    margin-top: 5rem;

    .about-solution-column {
      display: flex;

      .about-solution-card {
        background-image: linear-gradient(135deg, #F0F9FF, #E0F2FE);
        border-radius: 3rem;
        padding: 1.5rem;
        border: 1px solid rgba($primary-color, 0.1);
        box-shadow: 0 1px 15px #0d74f214;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        text-align: center;
        padding: 2rem 1rem;

        span {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          background: rgba($primary-color, 0.1);
          color: $primary-color;
          flex: 0 0 auto;
          margin: 0.5rem;
        }

        h3 {
          margin: 0.5rem;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: $title-color;
        }

        p {
          margin: 0.5rem 2rem;
          margin-top: 0.5rem;
          font-size: 0.9rem;
          line-height: 1.55;
          color: $text-color;
        }
      }
    }
  }
}

.about-tags {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  span {
    background-color: #dde8fb;
    color: #15448b;
    padding: 0.5rem 0.85rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
  }
}

.about-quote {
  margin: 3rem 0;
  text-align: center;

  h2 {
    margin: 0;
    font-size: 2rem;
  }

  p {
    margin: 1rem auto 0;
    max-width: 45rem;
    color: $neutral-color;
    line-height: 1.7;
    font-style: italic;
  }
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 660px) {
  .about-hero {
    height: auto;
    min-height: 34rem;

    h1,
    h2 {
      font-size: 2rem;
    }

    h2 {
      line-height: 1.2;
    }

    p {
      font-size: 1rem;
      margin-top: 1.25rem;
    }
  }

  .about-section h2,
  .about-quote h2 {
    font-size: 1.5rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-problem {
    .about-problem-content {
      grid-template-columns: 1fr;
    }

    .bout-problem-right {
      justify-content: flex-start;
    }
  }

  .about-solution {
    .about-solution-content {
      grid-template-columns: 1fr;
    }
  }
}
</style>
