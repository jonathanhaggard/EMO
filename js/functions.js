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



  // var svgs = [
  //     'enjoyment',
  //     'fear',
  //     'anger',
  //     'sadness',
  //     'disgust'
  // ];
  //
  // if (typeof $ !== 'undefined') {
  //     for (var i = 0; i < svgs.length; i += 1) {
  //         (function(i) {
  //             $.get('./svg/' + svgs[i] + '.svg').done(function(data) {
  //                 var vertexSets = [],
  //                     color = Matter.Common.choose(['#ffffff']);
  //
  //                 $(data).find('path').each(function(i, path) {
  //                     var points = Svg.pathToVertices(path, 10);
  //                     vertexSets.push(Matter.Vertices.scale(points, scaler/1.2, scaler/1.2));
  //                 });
  //
  //                 Matter.World.add(world, Matter.Bodies.fromVertices(percentX(100/5) + i * 200, percentY(100/6) + i * 50, vertexSets, {
  //                   density: 1.04,
  //                   friction: .01,
  //                   frictionAir: 0.00001,
  //                   restitution: 0.8,
  //                     render: {
  //                         fillStyle: color,
  //                         strokeStyle: color,
  //                         lineWidth: 1
  //                     }
  //                   }, true));
  //
  //             });
  //         })(i);
  //     }
  // }
  console.log(percentX(1)/100); //.1
  console.log(percentX(1)/50); //.1
  console.log(percentX(1)/20); //.5
  console.log(percentX(1)/10); //1
  console.log(percentX(1)/7); //1
  $.get('./svg/enjoyment.svg').done(function(data) {
      var vertexSets = [],
          color = Common.choose(['#ffffff']);

      $(data).find('path').each(function(i, path) {
          var points = Svg.pathToVertices(path, 10);
          vertexSets.push(Matter.Vertices.scale(points, percentX(1)/30, percentX(1)/30));
      });

      World.add(world, Bodies.fromVertices(percentX(25), percentY(25), vertexSets, {
        density: 1.04,
        friction: .01,
        frictionAir: 0.00001,
        restitution: 0.8,
          render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1
          }
      }, true));
  });

  $.get('./svg/anger.svg').done(function(data) {
      var vertexSets = [],
          color = Common.choose(['#ffffff']);

      $(data).find('path').each(function(i, path) {
        var points = Svg.pathToVertices(path, 10);
        vertexSets.push(Matter.Vertices.scale(points, percentX(1)/15, percentX(1)/15));
      });

      World.add(world, Bodies.fromVertices(percentX(75), percentY(50), vertexSets, {
        density: 1.04,
        friction: .01,
        frictionAir: 0.00001,
        restitution: 0.8,
          render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1
          }
      }, true));
  });

  $.get('./svg/disgust.svg').done(function(data) {
      var vertexSets = [],
          color = Common.choose(['#ffffff']);

      $(data).find('path').each(function(i, path) {
        var points = Svg.pathToVertices(path, 10);
        vertexSets.push(Matter.Vertices.scale(points, percentX(1)/23, percentX(1)/23));
      });

      World.add(world, Bodies.fromVertices(percentX(15), percentY(75), vertexSets, {
        density: 1.04,
        friction: .01,
        frictionAir: 0.00001,
        restitution: 0.8,
          render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1
          }
      }, true));
  });

  $.get('./svg/fear.svg').done(function(data) {
      var vertexSets = [],
          color = Common.choose(['#ffffff']);

      $(data).find('path').each(function(i, path) {
        var points = Svg.pathToVertices(path, 10);
        vertexSets.push(Matter.Vertices.scale(points, percentX(1)/15, percentX(1)/15));
      });

      World.add(world, Bodies.fromVertices(percentX(50), percentY(50), vertexSets, {
        density: 1.04,
        friction: .01,
        frictionAir: 0.00001,
        restitution: 0.8,
          render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1
          }
      }, true));
  });

  $.get('./svg/sadness.svg').done(function(data) {
      var vertexSets = [],
          color = Common.choose(['#ffffff']);

      $(data).find('path').each(function(i, path) {
        var points = Svg.pathToVertices(path, 10);
        vertexSets.push(Matter.Vertices.scale(points, percentX(1)/12, percentX(1)/12));
      });

      World.add(world, Bodies.fromVertices(percentX(75), percentY(25), vertexSets, {
        density: 1.04,
        friction: .01,
        frictionAir: 0.00001,
        restitution: 0.8,
          render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1
          }
      }, true));
  });

  var good = Matter.Bodies.rectangle(percentX(25), percentY(10), percentX(28), percentX(9), {
    density: 1.04,
    friction: .01,
    frictionAir: 0.00001,
    restitution: 0.8,
    render: {
      sprite: {
        texture: './svg/good.svg',
        xScale: percentX(1)/10,
        yScale: percentX(1)/10
      }
    }
  });

  var friction = Matter.Bodies.rectangle(percentX(75), percentY(90), percentX(28), percentX(8), {
    density: 1.04,
    friction: .01,
    frictionAir: 0.00001,
    restitution: 0.8,
    render: {
      sprite: {
        texture: './svg/friction.svg',
        xScale: percentX(1)/9,
        yScale: percentX(1)/9
      }
    }
  });

  Matter.Body.setVelocity( good, {x: 0, y: 5});
  Matter.Body.setVelocity( friction, {x: 0, y: -5});
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
      var musicFiles = ["./audio/pad/01.mp3", "./audio/pad/02.mp3", "./audio/pad/03.mp3", "./audio/pad/04.mp3", "./audio/pad/05.mp3", "./audio/pad/06.mp3", "./audio/pad/07.mp3", "./audio/pad/08.mp3", "./audio/pad/09.mp3", "./audio/pad/10.mp3"];
      var randNum = Math.floor(Math.random()*musicFiles.length)
      var audio = new Audio(musicFiles[randNum]);
      audio.play();

  });

  //Start the engine
  Matter.Engine.run(engine);
  Matter.Render.run(render);
});

/////////NOISE
