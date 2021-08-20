"use strict";

login();

function login() {
  var data;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.post('/user/login'));

        case 2:
          data = _context.sent;
          console.log("login", data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}