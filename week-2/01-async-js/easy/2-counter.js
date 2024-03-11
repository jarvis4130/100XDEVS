let a = 0;

function time() {
  console.log(a);
  a += 1;
  setTimeout(time, 1000);
}
time()

