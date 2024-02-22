    # Conceito de Abstração utilizando superclasses.

    O Conceito de abstração se resume saber separar o que importa do que não.
    Se levarmos este conceito para a implementacao de uma superclasse ou seja uma classe PAI, podemos criar somente os atributos e metodos, sem implementrarmos.

    assim sendo possivel somente implementar dentro de uma classe filho.

    Por que utilizar este conceito?

    Quando precisamos criar uma entidade padrão, como por exemplo a class Animal.
    A classe Animal pode ter um comportamento ou metodo chamado (comunicar())
    No entanto podemos concordar que nem todo animal se comunica da mesma forma, o gato por exemplo mia, o cachorro late, a vaca mugi e assim por diante.

    Sendo assim quando criarmos uma classe Papagaio, podemos extender essa superclasse recebendo os metodos e implementarmos por nós mesmos a caracterista da comunicação do animal. Que nesse caso é falar.
