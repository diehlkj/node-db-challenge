
exports.seed = function(knex) {
  return knex('projects').insert([
    { id: 1, name: 'Desktop PC', description: 'HeY mAn I coUlDnt HelP buT NotIce YoUR SiCk riG. whAt ya Got IN TheRe, a nVidIa gT 750?' },
    { id: 2, name: 'Desk', description: 'It goes up and dow like brrrrrrrrrrrrrrrrrrrr.' },
    { id: 3, name: 'Chair', description: '' },
    { id: 4, name: 'Keyboard', description: 'It might not be apple magic, but at least it has RGB...' },

    { id: 5, name: 'Laptop PC', description: 'No Karen, this HP Stream 11" with an Intel Celeron will not get you kid though engineering school.' },
    { id: 6, name: 'Mouse', description: 'This is not the magic mouse. Its the Logitec MX Master 3' },
    { id: 7, name: 'Headphones', description: '' },
    { id: 8, name: 'Couch', description: 'Super comfy. Sometimes a cat will come by and lay on your lap if your worthy.' },

    { id: 9, name: 'Mac of Some Kind', description: 'Who cares if its a 6 year old laptop, its still a mac!' },
    { id: 10, name: 'Coffee', description: 'Its a Venti Decaf Cinnimon Dolce Latte from Starbuks' },
    { id: 11, name: 'External Display', description: 'No... Its not the Retina 5k :(' },
    { id: 12, name: 'Bean Bag Chair', description: 'It goes pfffffffshhhhhhh when u sit in it haha' },

    { id: 13, name: 'iPad Pro 12.9" (2020)', description: 'What is a computer?' },
    { id: 14, name: 'Apple Pencil', description: 'Why would I want to ever use a mouse?' },
    { id: 15, name: 'Magic Keyboard', description: 'ITS A KEYBOARD AND TRACK PAD FOR YOUR IPAD' },
    { id: 16, name: 'Debt', description: 'That keyboard cost me $300...' },
  ])
};
