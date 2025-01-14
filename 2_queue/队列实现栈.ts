// pop的时候注意一下

class Stack {
  private input: unknown[]
  private output: unknown[]

  constructor() {
    this.input = []
    this.output = []
  }

  push(x: number) {
    this.input.push(x)
  }

  pop() {
    const size = this.output.length
    if (size) {
      return this.output.shift()
    }
    while (this.input.length) {
      this.output.push(this.input.pop())
    }
    return this.output.shift()
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
