"use strict";

register();

function register() {
  var data;
  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.post('/user/register'));

        case 2:
          data = _context.sent;
          console.log("register", data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}