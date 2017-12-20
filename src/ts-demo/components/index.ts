import './index.less';

const [box, btn] = [$('.ts-box'), $('.btn')];

btn.on('click', () => {
  box.text(greeter(user));
});

function greeter(person: object) {
  return "Hello, " + person;
}

let user = [0, 1, 2];