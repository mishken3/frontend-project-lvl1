#!/usr/bin/env node
import { calcGame } from '../src/calc.js';
import { greetings } from '../src/cli.js';

calcGame(greetings());
