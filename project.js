class CountdownTimer extends HTMLElement {
  static get observedAttributes(){
    return ['time-limit-in-seconds']
  }

  constructor(){
    super()

    this.FULL_DASH_ARRAY = 283;
    this.WARNING_THRESHOLD = 10;
    this.ALERT_THRESHOLD = 5;

    this.COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: this.WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: this.ALERT_THRESHOLD
      }
    };

    this.timePassed = 0;
    this.timeLeft = this.TIME_LIMIT;
    this.timerInterval = null;
    this.remainingPathColor = this.COLOR_CODES.info.color;

    this.reset()
  }

  reset(){

    this.innerHTML = `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="timer-circle">
          <circle class="path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            stroke-dasharray="283"
            class="path-remaining ${this.remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span class="label">${this.formatTime(
        this.timeLeft
      )}</span>
    `;

  }

  onTimesUp() {
    setTimeout(() => { alert('TIMEUP!'); }, 500);
    clearInterval(this.timerInterval);

  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timePassed = this.timePassed += 1;
      this.timeLeft = this.TIME_LIMIT - this.timePassed;

      this.querySelector("span.label").innerHTML = this.formatTime(
        this.timeLeft
      );
      this.setCircleDasharray();
      this.setRemainingPathColor(this.timeLeft);

      if (this.timeLeft < 0) {
        this.onTimesUp();
      }
    }, 1000);
  }

  formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  calculateTimeFraction() {
    const rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
    return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction);
  }


  setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = this.COLOR_CODES;
    if (this.timeLeft <= alert.threshold) {
      this
        .querySelector(".path-remaining")
        .classList.remove(warning.color);
      this
        .querySelector(".path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      this
        .querySelector(".path-remaining")
        .classList.remove(info.color);
      this
        .querySelector(".path-remaining")
        .classList.add(warning.color);
    }
  }

  setCircleDasharray() {
    const circleDasharray = `${(
      this.calculateTimeFraction() * this.FULL_DASH_ARRAY
    ).toFixed(0)} 283`;

    this
      .querySelector(".path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }


  connectedCallback(){
    this.startTimer();
  }

  attributeChangedCallback(attribute, oldValue, newValue){
    if(attribute == 'time-limit-in-seconds'){
      this.TIME_LIMIT = parseInt(newValue)
    }
  }

  disconnectedCallback(){

  }
}
customElements.define('countdown-timer', CountdownTimer)


var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "FINISHED";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
