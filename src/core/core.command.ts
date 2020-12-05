import { Command } from 'commander';
import { Service } from 'typedi';

@Service()
export class CoreCommand extends Command {}
