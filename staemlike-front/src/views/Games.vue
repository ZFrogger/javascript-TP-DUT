<template>
    <body>
        <ul>
            <li>
                <div class="game-template">
                    <a href="">
                        <img src="../assets/minecraft.jpg" class="game">
                    </a>
                    <div class="block">
                        <div class="titre">
                            Minecraft
                        </div>
                        <div class="support">
                            <img src="../assets/windows.png">
                            <img src="../assets/mac.png">
                            <img src="../assets/linux.png">
                        </div>
                        <div class="green_button">
                            <div class="cart">
                                Ajouter au panier
                            </div>
                        </div>
                        <div class="prix">
                            23.95 €
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="game-template">
                    <a href="">
                        <img src="../assets/half.png" class="game">
                    </a>
                    <div class="block">
                        <div class="titre">
                            Half-Life :ALYX
                        </div>
                        <div class="support">
                            <img src="../assets/windows.png">
                            <img src="../assets/mac.png">
                        </div>
                        <div class="green_button">
                            <div class="cart">
                                Ajouter au panier
                            </div>
                        </div>
                        <div class="prix">
                            49.99 €
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="game-template">
                    <a href="">
                        <img src="../assets/osu.png" class="game">
                    </a>
                    <div class="block">
                        <div class="titre">
                            Osu!
                        </div>
                        <div class="support">
                            <img src="../assets/windows.png">
                            <img src="../assets/linux.png">
                        </div>
                        <div class="green_button">
                            <div class="cart">
                                Ajouter au panier
                            </div>
                        </div>
                        <div class="prix">
                            Gratuit
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <ul>
            <li v-for="item in items" :key="item.message">
                {{ item.message }}  
            </li>
        </ul>
    </body>



  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Game.vue";
import axios from 'axios';

export default {
  name: "Games",
  components: {
    HelloWorld,
  },
};

axios.get('http://localhost:3000/games').then(response => {
  // Si la requête réussi
  console.log(response.data)
}).catch(err => {
  console.log(err)
})

</script>
