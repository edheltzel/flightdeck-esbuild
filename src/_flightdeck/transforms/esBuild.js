/* ----------------------------------------------------------------------------
process JS files with esbuild
---------------------------------------------------------------------------- */
import esbuild from 'esbuild';
import path from 'node:path';

export default (config) => {
  config.addTemplateFormats('js');
  config.addExtension('js', {
    outputFileExtension: 'js',
    async compile(inputContent, inputPath) {
      const baseDir = path.basename(path.dirname(inputPath));
      if (baseDir.startsWith('_')) {
        return undefined;
      }

      // Only bundle browser-side JavaScript (in assets/js)
      if (!inputPath.includes('assets/js')) {
        return () => inputContent;
      }

      const result = await esbuild.build({
        entryPoints: [inputPath],
        bundle: true,
        minify: true,
        sourcemap: true,
        format: 'esm',
        platform: 'browser',
        logLevel: 'warning',
        outdir: 'dist/assets/js',
        outbase: 'src/assets/js',
        metafile: true,
      });

      const files = [];
      const inputs = Object.values(result.metafile.inputs);
      inputs.forEach((input) => {
        const { imports } = input;
        if (imports.length) {
          imports.forEach((file) => files.push(file.path));
        }
      });
      this.addDependencies(inputPath, files);
      return () => result.js;
    },
  });
}
