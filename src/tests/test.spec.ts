import { BFS } from '../algorithms/BFS'
import { DFS } from '../algorithms/DFS'

let nodeInit: string = 'node_3'
let nodeList: any = {
	"node_1": {
		"node": {},
		"circle": {},
		"name": {},
		"x": 276,
		"y": 185,
		"id": "node_1",
		"state": 2,
		"distance": 1,
		"completed": Infinity,
		"previous": {
			"node": {},
			"circle": {},
			"name": {},
			"x": 644,
			"y": 197,
			"id": "node_3",
			"state": 2,
			"distance": 0,
			"completed": Infinity,
			"previous": null
		}
	},
	"node_2": {
		"node": {},
		"circle": {},
		"name": {},
		"x": 280,
		"y": 458,
		"id": "node_2",
		"state": 2,
		"distance": 2,
		"completed": Infinity,
		"previous": {
			"node": {},
			"circle": {},
			"name": {},
			"x": 276,
			"y": 185,
			"id": "node_1",
			"state": 2,
			"distance": 1,
			"completed": Infinity,
			"previous": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 644,
				"y": 197,
				"id": "node_3",
				"state": 2,
				"distance": 0,
				"completed": Infinity,
				"previous": null
			}
		}
	},
	"node_3": {
		"node": {},
		"circle": {},
		"name": {},
		"x": 644,
		"y": 197,
		"id": "node_3",
		"state": 2,
		"distance": 0,
		"completed": Infinity,
		"previous": null
	},
	"node_4": {
		"node": {},
		"circle": {},
		"name": {},
		"x": 668,
		"y": 435,
		"id": "node_4",
		"state": 2,
		"distance": 2,
		"completed": Infinity,
		"previous": {
			"node": {},
			"circle": {},
			"name": {},
			"x": 276,
			"y": 185,
			"id": "node_1",
			"state": 2,
			"distance": 1,
			"completed": Infinity,
			"previous": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 644,
				"y": 197,
				"id": "node_3",
				"state": 2,
				"distance": 0,
				"completed": Infinity,
				"previous": null
			}
		}
	},
	"node_5": {
		"node": {},
		"circle": {},
		"name": {},
		"x": 972,
		"y": 178,
		"id": "node_5",
		"state": 2,
		"distance": 1,
		"completed": Infinity,
		"previous": {
			"node": {},
			"circle": {},
			"name": {},
			"x": 644,
			"y": 197,
			"id": "node_3",
			"state": 2,
			"distance": 0,
			"completed": Infinity,
			"previous": null
		}
	},
	"node_6": {
		"node": {},
		"circle": {},
		"name": {},
		"x": 1041,
		"y": 436,
		"id": "node_6",
		"state": 2,
		"distance": 1,
		"completed": Infinity,
		"previous": {
			"node": {},
			"circle": {},
			"name": {},
			"x": 644,
			"y": 197,
			"id": "node_3",
			"state": 2,
			"distance": 0,
			"completed": Infinity,
			"previous": null
		}
	}
}
let adyacencyList: any = {
	"node_1": {
		"node_2": {
			"edge": {},
			"line": {},
			"weightText": {},
			"weightTextPath": {},
			"from": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 276,
				"y": 185,
				"id": "node_1",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 644,
					"y": 197,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"to": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 280,
				"y": 458,
				"id": "node_2",
				"state": 2,
				"distance": 2,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 276,
					"y": 185,
					"id": "node_1",
					"state": 2,
					"distance": 1,
					"completed": Infinity,
					"previous": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 644,
						"y": 197,
						"id": "node_3",
						"state": 2,
						"distance": 0,
						"completed": Infinity,
						"previous": null
					}
				}
			},
			"id": "edge_1",
			"weight": 0,
			"weighted": false,
			"directed": false,
			"isDown": false
		},
		"node_4": {
			"edge": {},
			"line": {},
			"weightText": {},
			"weightTextPath": {},
			"from": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 276,
				"y": 185,
				"id": "node_1",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 644,
					"y": 197,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"to": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 668,
				"y": 435,
				"id": "node_4",
				"state": 2,
				"distance": 2,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 276,
					"y": 185,
					"id": "node_1",
					"state": 2,
					"distance": 1,
					"completed": Infinity,
					"previous": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 644,
						"y": 197,
						"id": "node_3",
						"state": 2,
						"distance": 0,
						"completed": Infinity,
						"previous": null
					}
				}
			},
			"id": "edge_2",
			"weight": 0,
			"weighted": false,
			"directed": false,
			"isDown": false
		},
		"node_3": {
			"edge": {},
			"line": {},
			"weightText": {},
			"weightTextPath": {},
			"from": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 276,
				"y": 185,
				"id": "node_1",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 644,
					"y": 197,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"to": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 644,
				"y": 197,
				"id": "node_3",
				"state": 2,
				"distance": 0,
				"completed": Infinity,
				"previous": null
			},
			"id": "edge_3",
			"weight": 0,
			"weighted": false,
			"directed": false,
			"isDown": false
		}
	},
	"node_2": {
		"node_1": {
			"edge": {},
			"line": {},
			"weightText": {},
			"weightTextPath": {},
			"from": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 276,
				"y": 185,
				"id": "node_1",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 644,
					"y": 197,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"to": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 280,
				"y": 458,
				"id": "node_2",
				"state": 2,
				"distance": 2,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 276,
					"y": 185,
					"id": "node_1",
					"state": 2,
					"distance": 1,
					"completed": Infinity,
					"previous": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 644,
						"y": 197,
						"id": "node_3",
						"state": 2,
						"distance": 0,
						"completed": Infinity,
						"previous": null
					}
				}
			},
			"id": "edge_1",
			"weight": 0,
			"weighted": false,
			"directed": false,
			"isDown": false
		}
	},
	"node_3": {
		"node_1": {
			"edge": {},
			"line": {},
			"weightText": {},
			"weightTextPath": {},
			"from": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 276,
				"y": 185,
				"id": "node_1",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 644,
					"y": 197,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"to": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 644,
				"y": 197,
				"id": "node_3",
				"state": 2,
				"distance": 0,
				"completed": Infinity,
				"previous": null
			},
			"id": "edge_3",
			"weight": 0,
			"weighted": false,
			"directed": false,
			"isDown": false
		},
		"node_6": {
			"edge": {},
			"line": {},
			"weightText": {},
			"weightTextPath": {},
			"from": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 644,
				"y": 197,
				"id": "node_3",
				"state": 2,
				"distance": 0,
				"completed": Infinity,
				"previous": null
			},
			"to": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 1041,
				"y": 436,
				"id": "node_6",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 644,
					"y": 197,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"id": "edge_4",
			"weight": 0,
			"weighted": false,
			"directed": false,
			"isDown": false
		},
		"node_5": {
			"edge": {},
			"line": {},
			"weightText": {},
			"weightTextPath": {},
			"from": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 644,
				"y": 197,
				"id": "node_3",
				"state": 2,
				"distance": 0,
				"completed": Infinity,
				"previous": null
			},
			"to": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 972,
				"y": 178,
				"id": "node_5",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 644,
					"y": 197,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"id": "edge_5",
			"weight": 0,
			"weighted": false,
			"directed": false,
			"isDown": false
		}
	},
	"node_4": {
		"node_1": {
			"edge": {},
			"line": {},
			"weightText": {},
			"weightTextPath": {},
			"from": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 276,
				"y": 185,
				"id": "node_1",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 644,
					"y": 197,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"to": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 668,
				"y": 435,
				"id": "node_4",
				"state": 2,
				"distance": 2,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 276,
					"y": 185,
					"id": "node_1",
					"state": 2,
					"distance": 1,
					"completed": Infinity,
					"previous": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 644,
						"y": 197,
						"id": "node_3",
						"state": 2,
						"distance": 0,
						"completed": Infinity,
						"previous": null
					}
				}
			},
			"id": "edge_2",
			"weight": 0,
			"weighted": false,
			"directed": false,
			"isDown": false
		}
	},
	"node_5": {
		"node_3": {
			"edge": {},
			"line": {},
			"weightText": {},
			"weightTextPath": {},
			"from": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 644,
				"y": 197,
				"id": "node_3",
				"state": 2,
				"distance": 0,
				"completed": Infinity,
				"previous": null
			},
			"to": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 972,
				"y": 178,
				"id": "node_5",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 644,
					"y": 197,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"id": "edge_5",
			"weight": 0,
			"weighted": false,
			"directed": false,
			"isDown": false
		}
	},
	"node_6": {
		"node_3": {
			"edge": {},
			"line": {},
			"weightText": {},
			"weightTextPath": {},
			"from": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 644,
				"y": 197,
				"id": "node_3",
				"state": 2,
				"distance": 0,
				"completed": Infinity,
				"previous": null
			},
			"to": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 1041,
				"y": 436,
				"id": "node_6",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 644,
					"y": 197,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"id": "edge_4",
			"weight": 0,
			"weighted": false,
			"directed": false,
			"isDown": false
		}
	}
}

describe('BFS tests', () => {
	test('Test 1, graphical test without weight and direction.', async () => {
		const result = await BFS(nodeInit, nodeList, adyacencyList)
		expect(result).toEqual({
			"Nodes": [
				"node_1",
				"node_2",
				"node_3",
				"node_4",
				"node_5",
				"node_6"
			],
			"Distance": [
				"1",
				"2",
				"0",
				"2",
				"1",
				"1"
			],
			"Previous": [
				"node_3",
				"node_1",
				undefined as any,
				"node_1",
				"node_3",
				"node_3"
			]
		})
	})
	test('Test 2, graphical test with weight and direction', async () => {
		nodeInit = 'node_1'
		nodeList= {
			"node_1": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 177,
				"y": 158,
				"id": "node_1",
				"state": 1,
				"distance": null,
				"completed": Infinity,
				"previous": null
			},
			"node_2": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 152,
				"y": 366,
				"id": "node_2",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 410,
					"y": 265,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"node_3": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 410,
				"y": 265,
				"id": "node_3",
				"state": 2,
				"distance": 0,
				"completed": Infinity,
				"previous": null
			},
			"node_4": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 670,
				"y": 166,
				"id": "node_4",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 410,
					"y": 265,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"node_5": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 640,
				"y": 381,
				"id": "node_5",
				"state": 2,
				"distance": 1,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 410,
					"y": 265,
					"id": "node_3",
					"state": 2,
					"distance": 0,
					"completed": Infinity,
					"previous": null
				}
			},
			"node_6": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 932,
				"y": 278,
				"id": "node_6",
				"state": 2,
				"distance": 2,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 670,
					"y": 166,
					"id": "node_4",
					"state": 2,
					"distance": 1,
					"completed": Infinity,
					"previous": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 410,
						"y": 265,
						"id": "node_3",
						"state": 2,
						"distance": 0,
						"completed": Infinity,
						"previous": null
					}
				}
			},
			"node_7": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 1206,
				"y": 170,
				"id": "node_7",
				"state": 2,
				"distance": 2,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 670,
					"y": 166,
					"id": "node_4",
					"state": 2,
					"distance": 1,
					"completed": Infinity,
					"previous": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 410,
						"y": 265,
						"id": "node_3",
						"state": 2,
						"distance": 0,
						"completed": Infinity,
						"previous": null
					}
				}
			},
			"node_8": {
				"node": {},
				"circle": {},
				"name": {},
				"x": 1223,
				"y": 370,
				"id": "node_8",
				"state": 2,
				"distance": 2,
				"completed": Infinity,
				"previous": {
					"node": {},
					"circle": {},
					"name": {},
					"x": 640,
					"y": 381,
					"id": "node_5",
					"state": 2,
					"distance": 1,
					"completed": Infinity,
					"previous": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 410,
						"y": 265,
						"id": "node_3",
						"state": 2,
						"distance": 0,
						"completed": Infinity,
						"previous": null
					}
				}
			}
		}
		adyacencyList = {
			"node_1": {
				"node_2": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 177,
						"y": 158,
						"id": "node_1",
						"state": 1,
						"distance": null,
						"completed": Infinity,
						"previous": null
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 152,
						"y": 366,
						"id": "node_2",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"id": "edge_1",
					"weight": 20,
					"weighted": true,
					"directed": true,
					"isDown": false
				},
				"node_3": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 177,
						"y": 158,
						"id": "node_1",
						"state": 1,
						"distance": null,
						"completed": Infinity,
						"previous": null
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 410,
						"y": 265,
						"id": "node_3",
						"state": 2,
						"distance": 0,
						"completed": Infinity,
						"previous": null
					},
					"id": "edge_2",
					"weight": 15,
					"weighted": true,
					"directed": true,
					"isDown": false
				},
				"node_4": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 177,
						"y": 158,
						"id": "node_1",
						"state": 1,
						"distance": null,
						"completed": Infinity,
						"previous": null
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 670,
						"y": 166,
						"id": "node_4",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"id": "edge_3",
					"weight": 17,
					"weighted": true,
					"directed": true,
					"isDown": false
				}
			},
			"node_2": {
				"node_5": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 152,
						"y": 366,
						"id": "node_2",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 640,
						"y": 381,
						"id": "node_5",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"id": "edge_7",
					"weight": 15,
					"weighted": true,
					"directed": true,
					"isDown": false
				}
			},
			"node_3": {
				"node_4": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 410,
						"y": 265,
						"id": "node_3",
						"state": 2,
						"distance": 0,
						"completed": Infinity,
						"previous": null
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 670,
						"y": 166,
						"id": "node_4",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"id": "edge_4",
					"weight": 8,
					"weighted": true,
					"directed": true,
					"isDown": false
				},
				"node_2": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 410,
						"y": 265,
						"id": "node_3",
						"state": 2,
						"distance": 0,
						"completed": Infinity,
						"previous": null
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 152,
						"y": 366,
						"id": "node_2",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"id": "edge_5",
					"weight": 5,
					"weighted": true,
					"directed": true,
					"isDown": false
				},
				"node_5": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 410,
						"y": 265,
						"id": "node_3",
						"state": 2,
						"distance": 0,
						"completed": Infinity,
						"previous": null
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 640,
						"y": 381,
						"id": "node_5",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"id": "edge_6",
					"weight": 10,
					"weighted": true,
					"directed": true,
					"isDown": false
				}
			},
			"node_4": {
				"node_7": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 670,
						"y": 166,
						"id": "node_4",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 1206,
						"y": 170,
						"id": "node_7",
						"state": 2,
						"distance": 2,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 670,
							"y": 166,
							"id": "node_4",
							"state": 2,
							"distance": 1,
							"completed": Infinity,
							"previous": {
								"node": {},
								"circle": {},
								"name": {},
								"x": 410,
								"y": 265,
								"id": "node_3",
								"state": 2,
								"distance": 0,
								"completed": Infinity,
								"previous": null
							}
						}
					},
					"id": "edge_8",
					"weight": 15,
					"weighted": true,
					"directed": true,
					"isDown": false
				},
				"node_6": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 670,
						"y": 166,
						"id": "node_4",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 932,
						"y": 278,
						"id": "node_6",
						"state": 2,
						"distance": 2,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 670,
							"y": 166,
							"id": "node_4",
							"state": 2,
							"distance": 1,
							"completed": Infinity,
							"previous": {
								"node": {},
								"circle": {},
								"name": {},
								"x": 410,
								"y": 265,
								"id": "node_3",
								"state": 2,
								"distance": 0,
								"completed": Infinity,
								"previous": null
							}
						}
					},
					"id": "edge_10",
					"weight": 7,
					"weighted": true,
					"directed": true,
					"isDown": false
				},
				"node_5": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 670,
						"y": 166,
						"id": "node_4",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 640,
						"y": 381,
						"id": "node_5",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"id": "edge_15",
					"weight": 10,
					"weighted": true,
					"directed": true,
					"isDown": false
				}
			},
			"node_5": {
				"node_8": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 640,
						"y": 381,
						"id": "node_5",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 1223,
						"y": 370,
						"id": "node_8",
						"state": 2,
						"distance": 2,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 640,
							"y": 381,
							"id": "node_5",
							"state": 2,
							"distance": 1,
							"completed": Infinity,
							"previous": {
								"node": {},
								"circle": {},
								"name": {},
								"x": 410,
								"y": 265,
								"id": "node_3",
								"state": 2,
								"distance": 0,
								"completed": Infinity,
								"previous": null
							}
						}
					},
					"id": "edge_9",
					"weight": 17,
					"weighted": true,
					"directed": true,
					"isDown": false
				},
				"node_6": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 640,
						"y": 381,
						"id": "node_5",
						"state": 2,
						"distance": 1,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 410,
							"y": 265,
							"id": "node_3",
							"state": 2,
							"distance": 0,
							"completed": Infinity,
							"previous": null
						}
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 932,
						"y": 278,
						"id": "node_6",
						"state": 2,
						"distance": 2,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 670,
							"y": 166,
							"id": "node_4",
							"state": 2,
							"distance": 1,
							"completed": Infinity,
							"previous": {
								"node": {},
								"circle": {},
								"name": {},
								"x": 410,
								"y": 265,
								"id": "node_3",
								"state": 2,
								"distance": 0,
								"completed": Infinity,
								"previous": null
							}
						}
					},
					"id": "edge_11",
					"weight": 6,
					"weighted": true,
					"directed": true,
					"isDown": false
				}
			},
			"node_6": {
				"node_7": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 932,
						"y": 278,
						"id": "node_6",
						"state": 2,
						"distance": 2,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 670,
							"y": 166,
							"id": "node_4",
							"state": 2,
							"distance": 1,
							"completed": Infinity,
							"previous": {
								"node": {},
								"circle": {},
								"name": {},
								"x": 410,
								"y": 265,
								"id": "node_3",
								"state": 2,
								"distance": 0,
								"completed": Infinity,
								"previous": null
							}
						}
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 1206,
						"y": 170,
						"id": "node_7",
						"state": 2,
						"distance": 2,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 670,
							"y": 166,
							"id": "node_4",
							"state": 2,
							"distance": 1,
							"completed": Infinity,
							"previous": {
								"node": {},
								"circle": {},
								"name": {},
								"x": 410,
								"y": 265,
								"id": "node_3",
								"state": 2,
								"distance": 0,
								"completed": Infinity,
								"previous": null
							}
						}
					},
					"id": "edge_12",
					"weight": 11,
					"weighted": true,
					"directed": true,
					"isDown": false
				},
				"node_8": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 932,
						"y": 278,
						"id": "node_6",
						"state": 2,
						"distance": 2,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 670,
							"y": 166,
							"id": "node_4",
							"state": 2,
							"distance": 1,
							"completed": Infinity,
							"previous": {
								"node": {},
								"circle": {},
								"name": {},
								"x": 410,
								"y": 265,
								"id": "node_3",
								"state": 2,
								"distance": 0,
								"completed": Infinity,
								"previous": null
							}
						}
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 1223,
						"y": 370,
						"id": "node_8",
						"state": 2,
						"distance": 2,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 640,
							"y": 381,
							"id": "node_5",
							"state": 2,
							"distance": 1,
							"completed": Infinity,
							"previous": {
								"node": {},
								"circle": {},
								"name": {},
								"x": 410,
								"y": 265,
								"id": "node_3",
								"state": 2,
								"distance": 0,
								"completed": Infinity,
								"previous": null
							}
						}
					},
					"id": "edge_13",
					"weight": 13,
					"weighted": true,
					"directed": true,
					"isDown": false
				}
			},
			"node_7": {
				"node_8": {
					"edge": {},
					"line": {},
					"weightText": {},
					"weightTextPath": {},
					"from": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 1206,
						"y": 170,
						"id": "node_7",
						"state": 2,
						"distance": 2,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 670,
							"y": 166,
							"id": "node_4",
							"state": 2,
							"distance": 1,
							"completed": Infinity,
							"previous": {
								"node": {},
								"circle": {},
								"name": {},
								"x": 410,
								"y": 265,
								"id": "node_3",
								"state": 2,
								"distance": 0,
								"completed": Infinity,
								"previous": null
							}
						}
					},
					"to": {
						"node": {},
						"circle": {},
						"name": {},
						"x": 1223,
						"y": 370,
						"id": "node_8",
						"state": 2,
						"distance": 2,
						"completed": Infinity,
						"previous": {
							"node": {},
							"circle": {},
							"name": {},
							"x": 640,
							"y": 381,
							"id": "node_5",
							"state": 2,
							"distance": 1,
							"completed": Infinity,
							"previous": {
								"node": {},
								"circle": {},
								"name": {},
								"x": 410,
								"y": 265,
								"id": "node_3",
								"state": 2,
								"distance": 0,
								"completed": Infinity,
								"previous": null
							}
						}
					},
					"id": "edge_16",
					"weight": 15,
					"weighted": true,
					"directed": true,
					"isDown": false
				}
			},
			"node_8": {}
		}
		const result = await BFS(nodeInit, nodeList, adyacencyList)
		expect(result).toEqual({
			"Nodes": [
				"node_1",
				"node_2",
				"node_3",
				"node_4",
				"node_5",
				"node_6",
				"node_7",
				"node_8"
			],
			"Distance": [
				"0",
				"1",
				"0",
				"1",
				"1",
				"2",
				"2",
				"2"
			],
			"Previous": [
				undefined as any,
				"node_3",
				undefined as any,
				"node_3",
				"node_3",
				"node_4",
				"node_4",
				"node_5"
			]
		})
	})
})

describe('DFS tests', () => {
    test('Test 1, graphical test without weight and direction.', async () => {
        nodeInit = 'node_3'
        nodeList = {
            "node_1": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 276,
                "y": 185,
                "id": "node_1",
                "state": 2,
                "distance": 1,
                "completed": Infinity,
                "previous": {
                    "node": {},
                    "circle": {},
                    "name": {},
                    "x": 644,
                    "y": 197,
                    "id": "node_3",
                    "state": 2,
                    "distance": 0,
                    "completed": Infinity,
                    "previous": null
                }
            },
            "node_2": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 280,
                "y": 458,
                "id": "node_2",
                "state": 2,
                "distance": 2,
                "completed": Infinity,
                "previous": {
                    "node": {},
                    "circle": {},
                    "name": {},
                    "x": 276,
                    "y": 185,
                    "id": "node_1",
                    "state": 2,
                    "distance": 1,
                    "completed": Infinity,
                    "previous": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 644,
                        "y": 197,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    }
                }
            },
            "node_3": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 644,
                "y": 197,
                "id": "node_3",
                "state": 2,
                "distance": 0,
                "completed": Infinity,
                "previous": null
            },
            "node_4": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 668,
                "y": 435,
                "id": "node_4",
                "state": 2,
                "distance": 2,
                "completed": Infinity,
                "previous": {
                    "node": {},
                    "circle": {},
                    "name": {},
                    "x": 276,
                    "y": 185,
                    "id": "node_1",
                    "state": 2,
                    "distance": 1,
                    "completed": Infinity,
                    "previous": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 644,
                        "y": 197,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    }
                }
            },
            "node_5": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 972,
                "y": 178,
                "id": "node_5",
                "state": 2,
                "distance": 1,
                "completed": Infinity,
                "previous": {
                    "node": {},
                    "circle": {},
                    "name": {},
                    "x": 644,
                    "y": 197,
                    "id": "node_3",
                    "state": 2,
                    "distance": 0,
                    "completed": Infinity,
                    "previous": null
                }
            },
            "node_6": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 1041,
                "y": 436,
                "id": "node_6",
                "state": 2,
                "distance": 1,
                "completed": Infinity,
                "previous": {
                    "node": {},
                    "circle": {},
                    "name": {},
                    "x": 644,
                    "y": 197,
                    "id": "node_3",
                    "state": 2,
                    "distance": 0,
                    "completed": Infinity,
                    "previous": null
                }
            }
        }
        adyacencyList = {
            "node_1": {
                "node_2": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 276,
                        "y": 185,
                        "id": "node_1",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 644,
                            "y": 197,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 280,
                        "y": 458,
                        "id": "node_2",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 276,
                            "y": 185,
                            "id": "node_1",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 644,
                                "y": 197,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "id": "edge_1",
                    "weight": 0,
                    "weighted": false,
                    "directed": false,
                    "isDown": false
                },
                "node_4": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 276,
                        "y": 185,
                        "id": "node_1",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 644,
                            "y": 197,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 668,
                        "y": 435,
                        "id": "node_4",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 276,
                            "y": 185,
                            "id": "node_1",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 644,
                                "y": 197,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "id": "edge_2",
                    "weight": 0,
                    "weighted": false,
                    "directed": false,
                    "isDown": false
                },
                "node_3": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 276,
                        "y": 185,
                        "id": "node_1",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 644,
                            "y": 197,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 644,
                        "y": 197,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    },
                    "id": "edge_3",
                    "weight": 0,
                    "weighted": false,
                    "directed": false,
                    "isDown": false
                }
            },
            "node_2": {
                "node_1": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 276,
                        "y": 185,
                        "id": "node_1",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 644,
                            "y": 197,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 280,
                        "y": 458,
                        "id": "node_2",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 276,
                            "y": 185,
                            "id": "node_1",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 644,
                                "y": 197,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "id": "edge_1",
                    "weight": 0,
                    "weighted": false,
                    "directed": false,
                    "isDown": false
                }
            },
            "node_3": {
                "node_1": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 276,
                        "y": 185,
                        "id": "node_1",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 644,
                            "y": 197,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 644,
                        "y": 197,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    },
                    "id": "edge_3",
                    "weight": 0,
                    "weighted": false,
                    "directed": false,
                    "isDown": false
                },
                "node_6": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 644,
                        "y": 197,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 1041,
                        "y": 436,
                        "id": "node_6",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 644,
                            "y": 197,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "id": "edge_4",
                    "weight": 0,
                    "weighted": false,
                    "directed": false,
                    "isDown": false
                },
                "node_5": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 644,
                        "y": 197,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 972,
                        "y": 178,
                        "id": "node_5",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 644,
                            "y": 197,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "id": "edge_5",
                    "weight": 0,
                    "weighted": false,
                    "directed": false,
                    "isDown": false
                }
            },
            "node_4": {
                "node_1": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 276,
                        "y": 185,
                        "id": "node_1",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 644,
                            "y": 197,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 668,
                        "y": 435,
                        "id": "node_4",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 276,
                            "y": 185,
                            "id": "node_1",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 644,
                                "y": 197,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "id": "edge_2",
                    "weight": 0,
                    "weighted": false,
                    "directed": false,
                    "isDown": false
                }
            },
            "node_5": {
                "node_3": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 644,
                        "y": 197,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 972,
                        "y": 178,
                        "id": "node_5",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 644,
                            "y": 197,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "id": "edge_5",
                    "weight": 0,
                    "weighted": false,
                    "directed": false,
                    "isDown": false
                }
            },
            "node_6": {
                "node_3": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 644,
                        "y": 197,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 1041,
                        "y": 436,
                        "id": "node_6",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 644,
                            "y": 197,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "id": "edge_4",
                    "weight": 0,
                    "weighted": false,
                    "directed": false,
                    "isDown": false
                }
            }
        }
		const result = await DFS(nodeInit, nodeList, adyacencyList)
		expect(result).toEqual({
			"Nodes": [
				"node_1",
				"node_2",
				"node_3",
				"node_4",
				"node_5",
				"node_6"
			],
			"Distance": [
				"1",
				"2",
				"1",
				"2",
				"1",
				"1"
			],
			"Finished": [
				"Infinity",
				"Infinity",
				"2",
				"Infinity",
				"Infinity",
				"Infinity"
			],
			"Previous": [
				"node_3",
				"node_1",
				undefined as any,
				"node_1",
				"node_3",
				"node_3"
			]
		})
	})
	test('Test 2, graphical test with weight and direction', async () => {
        nodeInit = 'node_1'
        nodeList= {
            "node_1": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 177,
                "y": 158,
                "id": "node_1",
                "state": 1,
                "distance": null,
                "completed": Infinity,
                "previous": null
            },
            "node_2": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 152,
                "y": 366,
                "id": "node_2",
                "state": 2,
                "distance": 1,
                "completed": Infinity,
                "previous": {
                    "node": {},
                    "circle": {},
                    "name": {},
                    "x": 410,
                    "y": 265,
                    "id": "node_3",
                    "state": 2,
                    "distance": 0,
                    "completed": Infinity,
                    "previous": null
                }
            },
            "node_3": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 410,
                "y": 265,
                "id": "node_3",
                "state": 2,
                "distance": 0,
                "completed": Infinity,
                "previous": null
            },
            "node_4": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 670,
                "y": 166,
                "id": "node_4",
                "state": 2,
                "distance": 1,
                "completed": Infinity,
                "previous": {
                    "node": {},
                    "circle": {},
                    "name": {},
                    "x": 410,
                    "y": 265,
                    "id": "node_3",
                    "state": 2,
                    "distance": 0,
                    "completed": Infinity,
                    "previous": null
                }
            },
            "node_5": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 640,
                "y": 381,
                "id": "node_5",
                "state": 2,
                "distance": 1,
                "completed": Infinity,
                "previous": {
                    "node": {},
                    "circle": {},
                    "name": {},
                    "x": 410,
                    "y": 265,
                    "id": "node_3",
                    "state": 2,
                    "distance": 0,
                    "completed": Infinity,
                    "previous": null
                }
            },
            "node_6": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 932,
                "y": 278,
                "id": "node_6",
                "state": 2,
                "distance": 2,
                "completed": Infinity,
                "previous": {
                    "node": {},
                    "circle": {},
                    "name": {},
                    "x": 670,
                    "y": 166,
                    "id": "node_4",
                    "state": 2,
                    "distance": 1,
                    "completed": Infinity,
                    "previous": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 410,
                        "y": 265,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    }
                }
            },
            "node_7": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 1206,
                "y": 170,
                "id": "node_7",
                "state": 2,
                "distance": 2,
                "completed": Infinity,
                "previous": {
                    "node": {},
                    "circle": {},
                    "name": {},
                    "x": 670,
                    "y": 166,
                    "id": "node_4",
                    "state": 2,
                    "distance": 1,
                    "completed": Infinity,
                    "previous": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 410,
                        "y": 265,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    }
                }
            },
            "node_8": {
                "node": {},
                "circle": {},
                "name": {},
                "x": 1223,
                "y": 370,
                "id": "node_8",
                "state": 2,
                "distance": 2,
                "completed": Infinity,
                "previous": {
                    "node": {},
                    "circle": {},
                    "name": {},
                    "x": 640,
                    "y": 381,
                    "id": "node_5",
                    "state": 2,
                    "distance": 1,
                    "completed": Infinity,
                    "previous": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 410,
                        "y": 265,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    }
                }
            }
        }
        adyacencyList = {
            "node_1": {
                "node_2": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 177,
                        "y": 158,
                        "id": "node_1",
                        "state": 1,
                        "distance": null,
                        "completed": Infinity,
                        "previous": null
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 152,
                        "y": 366,
                        "id": "node_2",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "id": "edge_1",
                    "weight": 20,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                },
                "node_3": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 177,
                        "y": 158,
                        "id": "node_1",
                        "state": 1,
                        "distance": null,
                        "completed": Infinity,
                        "previous": null
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 410,
                        "y": 265,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    },
                    "id": "edge_2",
                    "weight": 15,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                },
                "node_4": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 177,
                        "y": 158,
                        "id": "node_1",
                        "state": 1,
                        "distance": null,
                        "completed": Infinity,
                        "previous": null
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 670,
                        "y": 166,
                        "id": "node_4",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "id": "edge_3",
                    "weight": 17,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                }
            },
            "node_2": {
                "node_5": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 152,
                        "y": 366,
                        "id": "node_2",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 640,
                        "y": 381,
                        "id": "node_5",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "id": "edge_7",
                    "weight": 15,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                }
            },
            "node_3": {
                "node_4": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 410,
                        "y": 265,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 670,
                        "y": 166,
                        "id": "node_4",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "id": "edge_4",
                    "weight": 8,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                },
                "node_2": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 410,
                        "y": 265,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 152,
                        "y": 366,
                        "id": "node_2",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "id": "edge_5",
                    "weight": 5,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                },
                "node_5": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 410,
                        "y": 265,
                        "id": "node_3",
                        "state": 2,
                        "distance": 0,
                        "completed": Infinity,
                        "previous": null
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 640,
                        "y": 381,
                        "id": "node_5",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "id": "edge_6",
                    "weight": 10,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                }
            },
            "node_4": {
                "node_7": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 670,
                        "y": 166,
                        "id": "node_4",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 1206,
                        "y": 170,
                        "id": "node_7",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 670,
                            "y": 166,
                            "id": "node_4",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 410,
                                "y": 265,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "id": "edge_8",
                    "weight": 15,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                },
                "node_6": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 670,
                        "y": 166,
                        "id": "node_4",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 932,
                        "y": 278,
                        "id": "node_6",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 670,
                            "y": 166,
                            "id": "node_4",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 410,
                                "y": 265,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "id": "edge_10",
                    "weight": 7,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                },
                "node_5": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 670,
                        "y": 166,
                        "id": "node_4",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 640,
                        "y": 381,
                        "id": "node_5",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "id": "edge_15",
                    "weight": 10,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                }
            },
            "node_5": {
                "node_8": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 640,
                        "y": 381,
                        "id": "node_5",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 1223,
                        "y": 370,
                        "id": "node_8",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 640,
                            "y": 381,
                            "id": "node_5",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 410,
                                "y": 265,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "id": "edge_9",
                    "weight": 17,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                },
                "node_6": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 640,
                        "y": 381,
                        "id": "node_5",
                        "state": 2,
                        "distance": 1,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 410,
                            "y": 265,
                            "id": "node_3",
                            "state": 2,
                            "distance": 0,
                            "completed": Infinity,
                            "previous": null
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 932,
                        "y": 278,
                        "id": "node_6",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 670,
                            "y": 166,
                            "id": "node_4",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 410,
                                "y": 265,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "id": "edge_11",
                    "weight": 6,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                }
            },
            "node_6": {
                "node_7": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 932,
                        "y": 278,
                        "id": "node_6",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 670,
                            "y": 166,
                            "id": "node_4",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 410,
                                "y": 265,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 1206,
                        "y": 170,
                        "id": "node_7",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 670,
                            "y": 166,
                            "id": "node_4",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 410,
                                "y": 265,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "id": "edge_12",
                    "weight": 11,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                },
                "node_8": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 932,
                        "y": 278,
                        "id": "node_6",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 670,
                            "y": 166,
                            "id": "node_4",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 410,
                                "y": 265,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 1223,
                        "y": 370,
                        "id": "node_8",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 640,
                            "y": 381,
                            "id": "node_5",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 410,
                                "y": 265,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "id": "edge_13",
                    "weight": 13,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                }
            },
            "node_7": {
                "node_8": {
                    "edge": {},
                    "line": {},
                    "weightText": {},
                    "weightTextPath": {},
                    "from": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 1206,
                        "y": 170,
                        "id": "node_7",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 670,
                            "y": 166,
                            "id": "node_4",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 410,
                                "y": 265,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "to": {
                        "node": {},
                        "circle": {},
                        "name": {},
                        "x": 1223,
                        "y": 370,
                        "id": "node_8",
                        "state": 2,
                        "distance": 2,
                        "completed": Infinity,
                        "previous": {
                            "node": {},
                            "circle": {},
                            "name": {},
                            "x": 640,
                            "y": 381,
                            "id": "node_5",
                            "state": 2,
                            "distance": 1,
                            "completed": Infinity,
                            "previous": {
                                "node": {},
                                "circle": {},
                                "name": {},
                                "x": 410,
                                "y": 265,
                                "id": "node_3",
                                "state": 2,
                                "distance": 0,
                                "completed": Infinity,
                                "previous": null
                            }
                        }
                    },
                    "id": "edge_16",
                    "weight": 15,
                    "weighted": true,
                    "directed": true,
                    "isDown": false
                }
            },
            "node_8": {}
        }
        const result = await DFS(nodeInit, nodeList, adyacencyList)
        expect(result).toEqual({
			"Nodes": [
				"node_1",
				"node_2",
				"node_3",
				"node_4",
				"node_5",
				"node_6",
				"node_7",
				"node_8"
			],
			"Distance": [
				"1",
				"1",
				"0",
				"1",
				"1",
				"2",
				"2",
				"2"
			],
			"Finished": [
				"2",
    			"Infinity",
				"Infinity",
				"Infinity",
				"Infinity",
				"Infinity",
				"Infinity",
				"Infinity"
			],
			"Previous": [
				undefined as any,
				"node_3",
				undefined as any,
				"node_3",
				"node_3",
				"node_4",
				"node_4",
				"node_5"
			]
		})
    })
})