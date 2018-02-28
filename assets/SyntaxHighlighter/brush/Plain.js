function Brush()
{
};

Brush.prototype	= new SyntaxHighlighter.Highlighter();
Brush.aliases	= ['text', 'plain'];

SyntaxHighlighter.brushes.Plain = Brush;