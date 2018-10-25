class IronHackers {
  
  constructor(students = []) {
    this.studentsBack = students.slice();
    this.init();
  }

  init() {
    this.students = this.studentsBack.slice();
  }

  next() {
    if (!this.hasNext()) {
      this.init();
    }

    this.shuffle();
    return this.students.pop();
  }

  hasNext() {
    return this.students.length > 0;
  }

  shuffle(rounds = 2) {
    if (rounds == 0) return;
    
    let aux = 0;
    let j = 0;
    for (let i = 0; i < this.students.length - 1; i++) {
      j = Math.floor(Math.random() * (this.students.length));
      aux = this.students[i];
      this.students[i] = this.students[j];
      this.students[j] = aux;
    }

    this.shuffle(rounds - 1);
  }
}

module.exports = IronHackers;