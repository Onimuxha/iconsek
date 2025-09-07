export default function Docs() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>Iconsek</h1>
      <p>A modern React icon library with multiple visual weights.</p>
      <h2>Install</h2>
      <pre><code>npm i iconsek</code></pre>
      <h2>Usage</h2>
      <pre><code>{`import { Home } from "iconsek";

export default function Example(){
  return <Home size={32} color="currentColor" strokeWidth={1.5} />
}`}</code></pre>
      <h2>Props</h2>
      <ul>
        <li><b>size</b>: number (default 24)</li>
        <li><b>color</b>: CSS color (default currentColor)</li>
        <li><b>strokeWidth</b>: number (default 1.5)</li>
        <li>All native SVG props are supported.</li>
      </ul>
    </div>
  );
}
