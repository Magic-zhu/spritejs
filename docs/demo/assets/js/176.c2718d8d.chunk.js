(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{689:function(n,e,t){"use strict";t.r(e),e.default="const {Scene, Sprite, Label} = spritejs;\nconst container = document.getElementById('stage');\nconst scene = new Scene({\n  container,\n  width: 1200,\n  height: 600,\n  // contextType: '2d',\n});\nconst layer = scene.layer();\n\n(async function () {\n  await scene.preload({\n    id: 'robot',\n    src: 'https://p5.ssl.qhimg.com/t01c33383c0e168c3c4.png',\n  });\n\n  const robot = new Sprite('robot');\n  robot.attr({\n    anchor: [0.5, 0.5],\n    pos: [600, 300],\n    scale: 0.5,\n  });\n  layer.append(robot);\n\n  const label = new Label(`\u56fe\u7247\u5927\u5c0f\uff1a ${robot.contentSize}`);\n  label.attr({\n    anchor: [0.5, 0.5],\n    pos: [600, 100],\n    font: '36px Arial',\n  });\n  layer.append(label);\n}());"}}]);