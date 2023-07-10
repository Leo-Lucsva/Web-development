
function fatorial (a) {
  backup_num = a;
  for (let i = a; i > 1; i--) {
    a = a * (backup_num - 1)
    backup_num --;
  }
  console.log(a)
}

fatorial(4);
