
function fatorial (a) {
  backup_num = a;
  for (i = a; i > 0; i--) {
    a = a * (backup_num - 1)
    backup_num --;

  }
  console.log(a)
}

fatorial(4);