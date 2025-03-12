// Sample documentation snippets for different programming languages
export interface DocumentSnippet {
  id: string;
  title: string;
  content: string;
  language: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const documentSnippets: DocumentSnippet[] = [
  {
    id: 'js-array-map',
    title: 'JavaScript Array.map() Method',
    content: `// Array.map() creates a new array by calling a function for each element.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});
// Result: [2, 4, 6, 8, 10]

// Using arrow function syntax:
const tripled = numbers.map(num => num * 3);
// Result: [3, 6, 9, 12, 15]`,
    language: 'javascript',
    category: 'Arrays',
    difficulty: 'easy',
  },
  {
    id: 'py-list-comprehension',
    title: 'Python List Comprehension',
    content: `# List comprehension provides a concise way to create lists
numbers = [1, 2, 3, 4, 5]

# Create a new list where each value is doubled
doubled = [x * 2 for x in numbers]
# Result: [2, 4, 6, 8, 10]

# List comprehension with condition
even_numbers = [x for x in numbers if x % 2 == 0]
# Result: [2, 4]

# Nested list comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
# Result: [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
    language: 'python',
    category: 'Lists',
    difficulty: 'medium',
  },
  {
    id: 'ts-interfaces',
    title: 'TypeScript Interfaces',
    content: `// Interfaces define the shape of objects
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

// Implementing an interface
function createUser(user: User): User {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    isActive: user.isActive ?? true
  };
}

// Example usage
const newUser = createUser({
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
});

// Interface extension
interface Admin extends User {
  permissions: string[];
}`,
    language: 'typescript',
    category: 'Types',
    difficulty: 'medium',
  }
];

// Function to get a random document snippet
export function getRandomSnippet(): DocumentSnippet {
  const randomIndex = Math.floor(Math.random() * documentSnippets.length);
  return documentSnippets[randomIndex];
}

// Function to get a snippet by ID
export function getSnippetById(id: string): DocumentSnippet | undefined {
  return documentSnippets.find(snippet => snippet.id === id);
} 