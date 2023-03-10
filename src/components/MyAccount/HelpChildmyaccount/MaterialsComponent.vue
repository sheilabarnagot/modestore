<!-- KZ new child component for MyAccount->HelpChild->ChildHelp->MaterialsComponent

<template>
  <div class="materials">
    <h2>Materials Information</h2>
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
</template>

<script>
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

<style>
  .material-care-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .material-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .material-card img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .material-card .material-info {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 0 0 10px 10px;
  }

  .material-card .material-info h3 {
    margin: 0 0 10px 0;
    font-size: 24px;
  }

  .material-card .material-info p {
    margin: 0 0 10px 0;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    .material-care-container {
      padding: 40px;
    }

    .material-card {
      flex-direction: row;
      width: 80%;
      margin-bottom: 40px;
    }

    .material-card img {
      width: 50%;
      border-radius: 10px 0 0 10px;
    }

    .material-card .material-info {
      padding: 40px;
      border-radius: 0 10px 10px 0;
    }

    .material-card .material-info h3 {
      font-size: 32px;
    }

    .material-card .material-info p {
      font-size: 18px;
    }
  }
</style>
-->
