import { chain, mergeWith } from '@angular-devkit/schematics';
import { dasherize, classify } from '@angular-devkit/core';
import { MenuOptions } from './schema';
import { apply, move, Rule, template, url, branchAndMerge } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';

const stringUtils = { dasherize, classify };

export default function (options: MenuOptions): Rule {

    // TODO: Validate options and throw SchematicsException if validation fails
    options.path = options.path ? normalize(options.path) : options.path;
    
    const templateSource = apply(url('./files'), [
        template({
          ...stringUtils,
          ...options
        }),
        move(options.sourceDir)
      ]);
      
      return chain([
        branchAndMerge(chain([
          mergeWith(templateSource)
        ])),
      ]);

}