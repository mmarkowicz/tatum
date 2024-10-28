import { render } from 'preact';
import { LocationProvider, Route, Router } from 'preact-iso';

import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import styles from './styles.module.css';
import './theme.module.css';

/*
 * Note:
 * Given more time, I would add the following improvements:
 *
 * 1. **Tests**: Add unit and integration tests to cover all components and edge cases.
 * 2. **Translations**: Implement multi-language support for broader accessibility.
 * 3. **CI/CD Pipelines**: Set up automated testing and deployment for reliable updates.
 * 4. **API Key Security**: Move an apiKey to a secure environment (backend),
 *    as it should never be exposed in the frontend.
 *
 * These enhancements would boost security, code quality, and maintainability.
 */

export function App() {
  return (
    <LocationProvider>
      <main className={styles.main}>
        <Router>
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById('app'));
