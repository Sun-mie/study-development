
    var string = '안녕"하시렵니까?"';
    console.log(string);

    var template = '<ul>\n\t</ul><li><a href="#">Home</a></li>\n</ul>';
    console.log(template);

    var template = `
    백틱사용
    <ul>
    </ul><li><a href="#">Home</a></li>
    </ul>
    `;

    console.log(template);

    var first = 'sunmie';
    var last = 'jo';

    console.log('my name is ' + first + last);

    console.log(`my name is ` + first + last);

    first = 'mie';
    last = 'shine';

    console.log(`My name is ${first} ${last}`);