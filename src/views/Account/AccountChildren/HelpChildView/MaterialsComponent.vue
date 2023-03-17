<!-- KZ new child component for MyAccount->HelpChild->ChildHelp->MaterialsComponent -->

<template>
  <div class="materials">
    <h2>Materials Information</h2>
    <div class="material-grid">
      <div v-for="material in materials" :key="material.name" class="material">
        <h3>{{ material.name }}</h3>
        <p>{{ material.description }}</p>
        <ul>
          <li
            v-for="careInstruction in material.careInstructions"
            :key="careInstruction"
          >
            {{ careInstruction }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script scoped>
  export default {
    data() {
      return {
        materials: [
          {
            name: 'Cotton',
            description: 'Cotton is a soft and breathable natural fiber.',
            careInstructions: [
              'Machine washable in cold water',
              'Tumble dry on low heat',
              'Iron on low heat if necessary'
            ]
          },
          {
            name: 'Tencel',
            description:
              'Tencel is a sustainable fiber made from eucalyptus trees.',
            careInstructions: [
              'Machine washable in cold water',
              'Hang dry or tumble dry on low heat',
              'Iron on low heat if necessary'
            ]
          },
          {
            name: 'Wool',
            description: 'Wool is a warm and durable natural fiber.',
            careInstructions: [
              'Hand wash or dry clean',
              'Do not tumble dry or wring',
              'Iron on low heat if necessary'
            ]
          },
          {
            name: 'Polyester',
            description:
              'Polyester is a synthetic fiber that is wrinkle-resistant and quick-drying.',
            careInstructions: [
              'Machine washable in cold water',
              'Tumble dry on low heat',
              'Do not iron'
            ]
          },
          {
            name: 'Linen',
            description: 'Linen is a lightweight and breathable natural fiber.',
            careInstructions: [
              'Machine washable in cold water',
              'Hang dry or tumble dry on low heat',
              'Iron on low heat if necessary'
            ]
          },
          {
            name: 'Silk',
            description: 'Silk is a luxurious and delicate natural fiber.',
            careInstructions: [
              'Dry clean or hand wash in cold water',
              'Do not tumble dry or wring',
              'Iron on low heat if necessary'
            ]
          },
          {
            name: 'Leather',
            description: 'Leather is a durable and versatile material.',
            careInstructions: [
              'Clean with a damp cloth',
              'Apply leather conditioner regularly',
              'Do not expose to direct sunlight or heat'
            ]
          },
          {
            name: 'Suede',
            description:
              'Suede is a soft and velvety material made from leather.',
            careInstructions: [
              'Brush regularly with a suede brush',
              'Use a suede protector spray',
              'Do not expose to water or heat'
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .materials {
    /* display: flex; */
    color: #3c3e3f;
    margin-top: 10rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: lighter;
    margin-bottom: 4rem;
  }

  h3 {
    font-family: jost;
    font-size: 1.1rem;
  }

  p,
  ul li {
    font-family: 'jost';
    color: #3c3e3f;
    line-height: 2;
    text-decoration: none;
    font-weight: light;
  }
  ul li {
    list-style-type: none;
  }
  .material:hover {
    border: 1px solid #818c85;
    cursor: pointer;
  }
  .material-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  .material {
    border: 1px solid #eeece5;
    padding: 2rem;
  }

  @media (min-width: 768px) {
    .material-grid {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1024px) {
      .material-grid {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
</style>
