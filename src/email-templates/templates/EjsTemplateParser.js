import fsPromises from 'fs/promises';
import path from 'path';
import ejs from 'ejs';

class EjsTemplateParser {
  /**
   * Generate an HTML with Ejs
   * @param {string} templateView - name of the ejs template file
   * @param {Object} data - data for the template   *
   * @return {Promise<string>} - email HTML
   */
  async parse({ templateView, data }) {
    try {
      return this.#readTemplate(templateView, data);
    } catch (error) {
      throw new Error(
        'Something went wrong with the EjsTemplateParser. Here is an error: ' + error,
      );
    }
  }

  async #readTemplate(templateView, data) {
    try {
      const resolvedPath = path.resolve(`src/email-templates/EJStemplates/index.ejs`);
      const viewsPath = path.resolve(`src/email-templates/EJStemplates`);
      const rawTemplate = await fsPromises.readFile(resolvedPath);
      const template = ejs.compile(String(rawTemplate), { delimiter: '?', views: [viewsPath] });
      return template({ templateView, data });
    } catch (e) {
      throw new Error('Something went wrong with template parsing process.' + e);
    }
  }
}

export default EjsTemplateParser;
