import './index.less';

const [box, btn] = [$('.ts-box'), $('.btn')];

btn.on('click', () => {
  box.text(greeter(user, emoji));
});

function greeter(person: object, emoji: string) {
  return "Hello, " + person + emoji;
}

let user: Array<number> = [0, 1, 2];

let emoji: string = '\uD83D\uDE04';