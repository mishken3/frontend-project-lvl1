#!/usr/bin/env node
import { isEvenGame } from '../src/even-logic.js';
import { greetings } from '../src/cli.js';

isEvenGame(greetings());
