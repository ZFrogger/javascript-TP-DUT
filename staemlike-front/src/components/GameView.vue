<template>
  <div>
    <div id="container">
      <div class="titre">
        {{ game.name }}
      </div>
      <iframe
        width="1904"
        height="772"
        :src="game.video"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="image2">
        <img :src="game.imageUrl" :alt="game.name" />
      </div>
      <div class="description">
        {{ game.description }}
      </div>
      <div class="prix">{{ game.price }} €</div>
    </div>
    <form>
      <input type="text" id="name" v-model="game.name"/><br />
      <input type="text" id="description" v-model="game.description"/><br />
      <input type="number" step="0.01" id="prix" v-model="game.price"/><br />
      <input type="submit" id="validation" value="Valider" v-on:click="modify"/><br />
      <input type="submit" id="delete" value="Supprimer" v-on:click="remove"/><br />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => {
    return {
      game: {},
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/games/" + this.$route.params._id)
      .then((response) => {
        this.game = response.data;
      });
  },
  methods: {
    modify() {
      axios
        .patch("http://localhost:3000/games/" + this.$route.params._id, {
          name: this.game.name,
          description: this.game.description,
          price: this.game.price
        });
    },
    remove(){
        axios.delete("http://localhost:3000/games/" + this.$route.params._id);
        this.$router.push("/");
    },
  },
};
</script>


<style>
.prix {
  font-family: "Motiva Sans", Sans-serif;
  font-size: 26px;
  color: white;
  margin-top: 210px;
  margin-left: 300px;
}
#container {
  display: flex;
  flex-direction: column;
}
iframe {
  height: 337px;
  width: 600px;
  margin-left: 300px;
}
.titre {
  font-family: "Motiva Sans", Sans-serif;
  font-size: 26px;
  color: white;
  margin: 0 auto;
}
.image2 {
  height: 151px;
  width: 324px;
  margin-left: 900px;
  margin-top: -340px;
}

form {
  margin-top: 300px;
}

.description {
  display: block;
  float: left;
  font-size: 13px;
  line-height: 18px;
  font-family: Arial, Helvetica, sans-serif;
  color: #c6d4df;
  height: 107px;
  width: 324px;
  margin-left: 900px;
  margin-top: -60px;
}
</style>