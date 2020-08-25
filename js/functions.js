window.addEventListener('load', function() {

  //Fetch our canvas
  var canvas = document.getElementById('world');
  var cannyw = window.innerWidth;
  var cannyh = window.innerHeight;
  var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Common = Matter.Common,
      Events = Matter.Events,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Vertices = Matter.Vertices,
      Svg = Matter.Svg,
      Bodies = Matter.Bodies;
  function percentX(percent) {
    return Math.round(percent/100 * window.innerWidth);
  }
  function percentY(percent) {
    return Math.round(percent/100 * window.innerHeight);
  }
  var scaler = percentY(100/1000);
  var Svg = Matter.Svg;
  //Setup Matter JS
  var engine = Matter.Engine.create();
  var world = engine.world;
  var render = Matter.Render.create({
    canvas: canvas,
    engine: engine,
    options: {
      width: cannyw,
      height: cannyh,
      background: '#000000',
      wireframes: false,
      showAngleIndicator: false
    }
  });

  engine.world.gravity.y = -0.00002;
  engine.world.gravity.x = 0.00001;



  var svgs = [
      'enjoyment',
      'fear',
      'anger',
      'sadness',
      'disgust'
  ];

  if (typeof $ !== 'undefined') {
      for (var i = 0; i < svgs.length; i += 1) {
          (function(i) {
              $.get('./svg/' + svgs[i] + '.svg').done(function(data) {
                  var vertexSets = [],
                      color = Matter.Common.choose(['#ffffff']);

                  $(data).find('path').each(function(i, path) {
                      var points = Svg.pathToVertices(path, 10);
                      vertexSets.push(Matter.Vertices.scale(points, scaler/1.2, scaler/1.2));
                  });

                  Matter.World.add(world, Matter.Bodies.fromVertices(percentX(100/5) + i * 200, percentY(100/6) + i * 50, vertexSets, {
                    density: 1.04,
                    friction: 1.01,
                    frictionAir: 0.00001,
                    restitution: 0.4,
                      render: {
                          fillStyle: color,
                          strokeStyle: color,
                          lineWidth: 1
                      }
                    }, true));

              });
          })(i);
      }
  }


  var good = Matter.Bodies.rectangle(percentX(100/5), percentY(100/1.2), 300, 90, {
    render: {
      sprite: {
        texture: './svg/good.svg',
        xScale: 1,
        yScale: 1
      }
    }
  });

  var friction = Matter.Bodies.rectangle(percentX(100/1.5), percentY(100/1.2), 300, 80, {
    render: {
      sprite: {
        texture: './svg/friction.svg',
        xScale: 1.2,
        yScale: 1.2
      }
    }
  });

  Matter.Body.setVelocity( good, {x: 0, y: -3});
  Matter.Body.setVelocity( friction, {x: 0, y: -3});
  Matter.Body.scale( friction, 1.2, 1.2);

  Matter.World.add(world, [friction, good]);

  Matter.World.add(world, [

    // x, y, w, h
      Matter.Bodies.rectangle(window.innerWidth/2, 0, window.innerWidth, 100, { isStatic: true, render: {fillStyle: "#ffffff",strokeStyle:  "#ffffff",lineWidth: 1} }), //top
      Matter.Bodies.rectangle(window.innerWidth/2, window.innerHeight, window.innerWidth, 100, { isStatic: true, render: {fillStyle: "#ffffff",strokeStyle:  "#ffffff",lineWidth: 1} }), //bottom
      Matter.Bodies.rectangle(window.innerWidth, window.innerHeight/2, 100, window.innerHeight, { isStatic: true, render: {fillStyle: "#ffffff",strokeStyle:  "#ffffff",lineWidth: 1} }), //right
      Matter.Bodies.rectangle(0, window.innerHeight/2, 100, window.innerHeight, { isStatic: true, render: {fillStyle: "#ffffff",strokeStyle:  "#ffffff",lineWidth: 1} }) //left
  ]);


  //Make interactive
  var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
    element: canvas,
    constraint: {
      render: {
            visible: false
        },
        stiffness:0.8
      }
  });
  mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
  mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
  Matter.World.add(world, mouseConstraint);


  Events.on(engine, 'collisionStart', function(event) {

      // var audio = new Audio('./audio/SquareS42.mp3');
      // audio.play();
      var musicFiles = ["./audio/horn/01.mp3", "./audio/horn/02.mp3", "./audio/horn/03.mp3", "./audio/horn/04.mp3", "./audio/horn/05.mp3", "./audio/horn/06.mp3", "./audio/horn/07.mp3", "./audio/horn/08.mp3", "./audio/horn/09.mp3", "./audio/horn/10.mp3"];
      var randNum = Math.floor(Math.random()*musicFiles.length)
      var audio = new Audio(musicFiles[randNum]);
      audio.play();

  });

  //Start the engine
  Matter.Engine.run(engine);
  Matter.Render.run(render);
});

/////////NOISE
