<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div>
    <h1>
      <span @mouseenter="shuffle(line[0])">{{ line[0].val }}</span>
      <span @mouseenter="shuffle(line[1])">{{ line[1].val }}</span>
      <span @mouseenter="shuffle(line[2])">{{ line[2].val }}</span>
    </h1>
    <!-- <p>
      <button @click="reset">Reset</button>&nbsp;<button @click="shuffleAll">
        Shuffle All
      </button>
    </p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      line: [
        {
          name: "Design",
          val: "Design",
          animating: false,
          options: [
            "Damn Good",
            "Democratic",
            "Dazzling",
            "Delightful",
            "Dynamic",
            "Dreamy",
            "Daring",
            "Decorative",
            "Dramatic",
            "Danceable",
            "Distinct",
            "Divine",
            "Decadent",
            "Desirable",
            "Dainty",
            "Delicate",
            "Detailed",
            "Distinguished",
            "Dazzle",
            "Doodle",
            "Da Vinci",
            "Devotion",
          ],
        },
        {
          name: "Business",
          val: "Business",
          animating: false,
          options: [
            "Beautiful",
            "Brilliant",
            "Bold",
            "Breathtaking",
            "Business-savvy",
            "Balanced",
            "Business-minded",
            "Beauteous",
            "Bespoke",
            "Blissful",
            "Breakthrough",
            "Benevolent",
            "Businesslike",
          ],
        },
        {
          name: "Company",
          val: "Company",
          animating: false,
          options: [
            "Collective",
            "Conglomerate",
            "Characters",
            "Conspiracy",
            "Cult",
            "Community",
            "Cohort",
            "Citizens",
            "Coalition",
            "Crew",
            "Clan",
            "Collaborators",
            "Camaraderie",
            "Comrades",
            "Congregation",
            "Chorus",
            "Coterie",
            "Clique",
            "Companions",
            "Council",
            "Convoy",
            "Comradeship",
            "Cell",
            "Co-op",
            "Chamber",
          ],
        },
      ],
      resetTimeout: null,
    };
  },
  mounted() {
    this.shuffleArray(this.line[0].options);
    this.reset();
  },
  methods: {
    reset() {
      this.line.forEach((line) => this.shuffle(line, true));
    },
    shuffleAll() {
      this.line.forEach((line) => this.shuffle(line));
    },
    shuffleArray(arr) {
      for (let i = arr.length; i > 1; i--) {
        let r = Math.floor(Math.random() * i);
        let temp = arr[r];
        arr[r] = arr[i - 1];
        arr[i - 1] = temp;
      }
    },
    shuffle(obj, shouldReset) {
      let timesRun = 0;
      if (obj.animating) return;

      const interval = setInterval(() => {
        obj.animating = true;
        timesRun += 1;

        const newArray = obj.options;
        this.shuffleArray(newArray);
        obj.val = newArray[0];

        if (timesRun === 8) {
          clearInterval(interval);
          obj.animating = false;
          obj.val = newArray[0];

          if (shouldReset) {
            this.line.forEach((line) => (line.val = line.name));
          }
        }
      }, 100);

      // sometimes, like on load, we shuffle all lines without user interation.
      // when that happens, an object isn't passed into this function.
      // in that case, the following line stops the event from fireing
      if (!obj.name) return;
      if (process.dev) return;
      useTrackEvent("logoLottery", { props: { logoLotteryLine: obj.name } });
    },
  },
};
</script>

<style lang="scss" scoped>
h1 span {
  display: table;
  cursor: pointer;
}
</style>
