<template>
     <div class="game-template">
            <a href="">
                <img :src="game.imageUrl" class="game">
            </a>
            <div class="block">
                <div class="titre" @click="gameClick()">
                    {{ game.name }}
                </div>
                <div class="support">
                    <img v-if="game.platform.includes('Windows')" src="../assets/windows.png">
                    <img v-if="game.platform.includes('Mac')" src="../assets/mac.png">
                    <img v-if="game.platform.includes('Linux')" src="../assets/linux.png">
                </div>
                <div class="green_button">
                    <div class="cart">
                        Ajouter au panier
                    </div>
                </div>
                <div class="prix">
                    {{ game.price }} €
                </div>
            </div>
     </div>
</template>

<script>
export default {
  name: 'GameTemplate',
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  methods: {
      gameClick() {
          this.$router.push('/game/'+this.game._id);
      }
  }
};

</script>

<style scoped lang="scss">
body{
    background-color: #1B2838;
}

ul{
    list-style-type: none;

}

li{
    display: inline-block;
}

a{
    display:block;
    font-size:15px;
    color:#4f94bc;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    cursor:pointer;
    padding: 0 10px;
}

.active{
    line-height: 30px;
    font-size: 16px;
    background: #214b6b;
    cursor:default;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    padding: 0 10px;
    color:white;
}

a:hover{
    color:white;
}

hr{
    background-color: #214b6b;
    height:4px;
    border-color: #214b6b;
    margin-top: -17px;
    margin-left: 39px;
    margin-right:750px;
}

.game{
    margin-left: 2.01%;
    margin-top: 1%;
    display:block;
    position: static;
    float:left;
}

.block{
    background-color: #202d39;
    background-color: rgba( 0, 0, 0, 0.2 );
    height:69px;
    display:block;
    width:602.125px;
    float:left;
    margin-top:1%;
}

.titre{
    color:#c7d5e0;
    font-size: 17px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 10px;
    margin-top: 2px;
}

.titre:hover{
    cursor: pointer;
}

.support{
    height:10%;
    margin-left: 8px;
    margin-top: 3px;
}
.prix{
    font-family: Arial, Helvetica, sans-serif;
    color : #acdbf5;
    font-size: 13px;
    margin-left: 90%;
    margin-top: 10px;
}

.ghost{
    margin-left: 1000px;
}

.cart{
    z-index: 2;
    font-family: Arial, Helvetica, sans-serif;
    color:#d2efa9;
    line-height: 30px;
    padding-left: 5px;
    font-size: 15px;
}

.green_button{
    border-radius: 2px;
    display:block;
    background:#6fa720;
    cursor:pointer;
    width:125px;
    height:auto;
    margin-left: 470px;
    margin-top: -20px;
    margin-bottom: -3px;
}

#green_kart{
    background: #a0d852;
    height:20px;
    width:100px;
    margin-left: 700px;
}

#texte_kart{
    font-family: "Motiva Sans", Sans-serif;
    color:#5e7508;
    padding: 0 25px;
    line-height: 20px;
    text-decoration: none;

}

#texte_kart:hover{
    color:black;
    font-weight: bold;
}

h2{
    color : white;
    font-size: 34px;
    font-family:"Motiva Sans", Sans-serif;
    font-weight: 300;
    letter-spacing: 2px;
}

#total{
    color:#c7d5e0;
    font-weight: bold;
    font-family: "Motiva Sans", Sans-serif;
    margin-left: 20px;
    margin-top: 20px;
    float:left;
}

#prix{
    color:#c7d5e0;
    font-weight: bold;
    font-family: "Motiva Sans", Sans-serif;
    margin-left: 620px;
    float:left;
    margin-top:20px;
}

.block2{
    background-color: #202d39;
    background-color: rgba( 0, 0, 0, 0.2 );
    height:69px;
    display:block;
    width:787.125px;
    float:left;
    margin-top:1%;
    margin-left: 40px;
}
</style>