<template>
  <div class="hello">
    <h1>{{ msg }} {{ c }}</h1>
    <input v-model.number="operand1" name="operand1" />
    <input v-model.number="operand2" name="operand2" />
    <br />
    <div>
      <button v-for="op in operation" :key="op" @click="calc(op)" :name="op">
        {{ op }}
      </button>
    </div>

    <div class="error" v-show="error" :name="errorTest">
      {{ error }}
    </div>
    <div v-if="result < 0">
      <p>Результат меньше 0</p>
    </div>
    <div v-else-if="result < 1000">
      <p>Результат 0....1000</p>
    </div>
    <div v-else-if="result > 1000">
      <p>Результат больше 1000</p>
    </div>
    <h1>Ответ:{{ result }}</h1>
    <div class="key">
      <input type="checkbox" id="checkbox" v-model="checked" />Show key board
      <div class="number" v-if="checked">
        <button
          @click="onClickNumb(item)"
          v-for="item in colection"
          v-bind:key="item"
          :name="numberBtn"
        >
          {{ item }}
        </button>
        <button class="res" @click="del()" :name="delet">DEL</button>
        <br />
      </div>

      <br />
    </div>
    <div id="myForm">
      <input type="radio" value="Operand1" v-model="picked" />
      <label for="one">Operand1</label>
      <input type="radio" value="Operand2" v-model="picked" />
      <label for="two">Operand2</label>
      <br />
      <span>Выбрано: {{ picked }}</span>
    </div>
    <button class="res" @click="reset()" :name="res">RESET</button>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Calculete",
  data: () => ({
    checked: true,
    picked: "Operand1",
    operand1: 0,
    operand2: 0,
    result: 0,
    error: "",
    operation: ["+", "-", "*", "/", "№", "/0"],
    colection: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    logs: {},
    res: "res",
    delet: "delet",
    numberBtn: "numberBtn",
    errorTest: "errorTest",
  }),
  props: {},
  methods: {
    del() {
      if (this.picked === "Operand1") {
        this.operand1 = this.operand1.toString();
        this.operand1 = this.operand1.slice(0, -1);
        this.operand1 = parseInt(this.operand1);
        console.log(this.operand1);
        return;
      } else if (this.picked === "Operand2") {
        this.operand2 = this.operand2.toString();
        this.operand2 = this.operand2.slice(0, -1);
        this.operand2 = parseInt(this.operand2);
        return;
      }
    },
    reset() {
      this.result = 0;
      this.operand1 = 0;
      this.operand2 = 0;
    },
    onClickNumb(char) {
      if (this.picked === "Operand1") {
        this.operand1 = this.operand1.toString();
        this.operand1 += char;
        this.operand1 = parseInt(this.operand1);
        return;
      } else if (this.picked === "Operand2") {
        this.operand2 = this.operand2.toString();
        this.operand2 += char;
        this.operand2 = parseInt(this.operand2);
        return;
      }
    },
    calc(op) {
      this.error = "";
      const { operand1, operand2 } = this;
      Vue.set(this.logs, Date.now(), `${this.numRes2} `);
      if (op === "/" && operand2 === 0) {
        this.error = "Нельзя делить на ноль!";
        return;
      }

      const calcOperation = {
        "+": () => operand1 + operand2,
        "-": () => operand1 - operand2,
        "/": () => operand1 / operand2,
        "*": () => operand1 * operand2,
        "№": () => Math.pow(operand1, operand2),
        "/0": () => Math.floor(operand1 / operand2),
      };
      this.result = parseInt(calcOperation[op]());
    },
  },
  computed: {},
};
</script>

<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.number {
  display: flex;
  justify-content: center;
}
.error {
  padding: 20px;
  border: 2px solid black;
  background-color: crimson;
  color: beige;
  font-size: 36px;
}
.res {
  background: red;
  color: azure;
  width: 90px;
  height: 30px;
}
</style>
