
    //  Filtrar números pares de um array
    // const numeros = [1, 2, 3, 4, 5, 6];
    // const numerosPares = numeros.filter(function (numero) {
    //     return numero % 2 === 0;
    // });

    // console.log(numerosPares); // Output: [2, 4, 6]


    //  Elevar todos os números em um array ao quadrado
    //  const numeros = [1, 2, 3, 4, 5];
    //  const quadrados = numeros.map(function (numero) {
    //      return numero ** 2;
    //  });

    //  console.log(quadrados);  Output: [1, 4, 9, 16, 25]

    //  Calcular a soma de todos os números em um array
    //  const numeros = [1, 2, 3, 4, 5];
    //  const soma = numeros.reduce(function (acumulador, numero) {
    //      return acumulador + numero;
    //  }, 0);  0 é o valor inicial do acumulador

    //  console.log(soma);  Output: 15


    //  Imprimir todos os elementos de um array
    //  const frutas = ["Maçã", "Banana", "Pêra", "Laranja"];

    //  frutas.forEach((item,index) => console.log(item,index));







    ///////////////////////////////////////////////////////////
    //  exercicio

    //1
    // const n1 = [ 1, 2, 3, 5, 4, 8, 6, 7, 5, 9]
    // const t1 = n1.filter((n => n %2==0)) ;
    // console.log(t1);


    //2
    // const n2 = ['guilherme', 'pires', 'viana'];
    // const t2 = n2.map((n) => n.toLocaleUpperCase());
    // console.log(t2);


    //3
    // const nomes = ['guilherme', 'pires', 'viana'];
    // const saudacao = nomes.forEach(n => console.log(`prazer ${n}, tudo bem ? `));


    // 4
    // const substantivos = ['maca', 'banana', 'pessego' , 'saude', 'uva', 'mamao']
    // const m = substantivos.filter(t => t.charAt(0)==='m').map((n) => n.toLocaleUpperCase());
    // console.log(m);


    //5
    // const notasAlunos = [
    //     {nome: 'Pedro', notas: [8,9]},
    //     {nome: 'Pires', notas: [9, 10]},
    //     {nome: 'Pedro', notas: [2, 4]}
    // ];
    
    // const media = notasAlunos.map((nota) => { 
    //     const medias = nota.notas.reduce((i,a) => i + a, 0) /3;

    //     return {...nota,medias}
    // });
    const notasAlunos = [
        {nome: 'Pedro', notas: [8,9]},
        {nome: 'Pires', notas: [9, 10]},
        {nome: 'Pedro', notas: [2, 4]}
    ];
    
    const media = notasAlunos.map((nota) => { 
        const medias = nota.notas.reduce((i,a) => i + a, 0) /3;

        return {...nota,medias}
    });
    
    console.log(media);