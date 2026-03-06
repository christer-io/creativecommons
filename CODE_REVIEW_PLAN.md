# Code Quality Review & Refactoring Plan

## Overview
Comprehensive review of naming conventions, code structure, and overall quality of the Creative Commons Norway project. This plan identifies inconsistencies and proposes improvements for maintainability and scalability.

---

## 1. File Extension & TypeScript Consistency

### Issues Found
- **Mixed file extensions**: `.js` and `.tsx`/`.ts` files coexist in the components directory
- **TypeScript not enforced**: `tsconfig.json` has `allowJs: true`, mixing JavaScript and TypeScript

### Components Affected
- `Banner.js`, `BannerSmall.js`, `Footermobile.js`, `FooterPath.js`, `HeaderSearch.js`, `License.js`, `NavButton.js`, `NotFound.js`, `PathStarter.js`, `SearchButton.js`, `SectionHeader.js`
- These should all be converted to `.tsx` for consistency

### Recommended Actions
- [ ] Convert all `.js` component files to `.tsx`
- [ ] Add type definitions for all component props
- [ ] Consider setting `allowJs: false` in `tsconfig.json` after migration

---

## 2. Component Naming Conventions

### Issues Found
- **Case inconsistency**: Default exports mixed with named exports
- **Default exports**: Most components use `export default` which makes refactoring harder
- **No consistent component structure**: Some use function declarations, some use arrow functions

### Examples
- All components in `/components` use default exports
- No explicit PascalCase enforcement for React components

### Recommended Actions
- [ ] Convert all default exports to named exports (improves refactoring and tree-shaking)
- [ ] Ensure all component names follow PascalCase convention
- [ ] Consider creating barrel exports (`index.tsx`) for component groups
- [ ] Add consistent JSDoc comments for props

```tsx
// ❌ Current pattern
function Button({buttonText, url}: Props) { ... }
export default Button

// ✅ Recommended pattern
export interface ButtonProps {
  buttonText: string;
  url: string;
}

export function Button({ buttonText, url }: ButtonProps) { ... }
```

---

## 3. Variable & Function Naming

### Issues Found
- **Inconsistent naming clarity**: 
  - `buttonLeft`, `buttonLeftUrl`, `buttonRight`, `buttonRightUrl` - verbose and unclear
  - `allposts` - doesn't follow camelCase (should be `allPosts`)
  - `showLeftButton`, `showRightButton` - good, but inconsistent with other naming
  - `isExternalUrl`, `hasText` - good utility naming

### Examples of Poor Naming
- `titlePart1`, `titlePart2` - unclear what these represent (should be `titleHighlight`, `titleSubtext` or similar)
- `posttype` - should be `postType` (TypeScript type already shows correct casing)
- `_id` - unclear; consider `id` or `postId`

### Recommended Actions
- [ ] Review and rename props in `Banner.js` for clarity
- [ ] Standardize naming across all components
- [ ] Create a naming convention guide
- [ ] Rename `allposts` → `allPosts`
- [ ] Review and clarify abbreviated variable names

---

## 4. Language Consistency (English vs Norwegian)

### Issues Found
- **Mixed languages throughout codebase**:
  - File/folder names: `ressurs/`, `faq/` (English), but comments in Norwegian
  - URL paths use both: `/post/`, `/ressurs/`, `/faq/`
  - Comments and strings mix English and Norwegian

### Examples
- Folder: `ressurs/` (Norwegian) vs `faq/` (English abbreviation)
- Variable names: English `buttonLeft`, `titlePart1`
- String content: Norwegian text mixed with code

### Recommended Actions
- [ ] Choose one standard language for code (recommend English for international codebase)
- [ ] Standardize folder/file names (use English)
- [ ] Keep Norwegian content in separate data/content files (already doing well with `.md` files)
- [ ] Consider localizing via i18n instead of hardcoding text

---

## 5. Import Path Consistency

### Issues Found
- **Mixed import paths**:
  - Relative imports: `import Banner from "../components/Banner"`
  - Absolute imports with alias: `import { fetchPosts } from '@/app/actions'`
  - Some files use relative, others use absolute

### Examples from `app/page.tsx`
```tsx
import Banner from "../components/Banner"  // ❌ Relative
import { fetchPosts } from '@/app/actions'  // ✅ Absolute with alias
import SectionHeader from "@/components/SectionHeader";  // ✅ Absolute with alias
```

### Recommended Actions
- [ ] Standardize on absolute imports using `@/` alias
- [ ] Update all relative imports to use alias paths
- [ ] Add length validation and import ordering rules (consider ESLint)

---

## 6. Props & Type Definitions

### Issues Found
- **Inconsistent prop documentation**:
  - Some components have TypeScript interfaces (`Props`)
  - Some components have no type annotations (JavaScript files)
  - No JSDoc comments for complex props

### Examples
```tsx
// ✅ Good - has Props interface
type Props = {
  buttonText: string;
  url: string;
}

// ❌ Poor - no type definition
function BannerActionLink({ href, className, children }) {
```

### Recommended Actions
- [ ] Add TypeScript interfaces to all components
- [ ] Add JSDoc comments for complex or non-obvious props
- [ ] Document component purpose and usage examples
- [ ] Consider using React's `ReactNode` and `ReactElement` types appropriately

```tsx
/**
 * Renders a navigation button component
 * @param label - Text displayed on the button
 * @param onClick - Callback function when button is clicked
 */
export interface NavButtonProps {
  label: string;
  onClick: () => void;
}
```

---

## 7. Code Organization & Structure

### Issues Found
- **Monolithic components**: Some components might be too large
- **No component hierarchy**: All components at same level in `/components`
- **No shared utilities dir**: Utility functions scattered throughout

### Examples
- `Banner.js` (61 lines) - contains inline utility functions that could be shared
- Multiple components might benefit from a shared utilities directory

### Recommended Actions
- [ ] Create subdirectories for component categories
  ```
  components/
    ui/               (Button, SearchButton, NavButton, etc.)
    layout/           (Header, Footer, Banner, etc.)
    content/          (MarkdownRenderer, ImgCard, etc.)
    common/           (ExternalLink, ReadMore, etc.)
  ```
- [ ] Move utility functions to `lib/utils/` or similar
- [ ] Extract component-specific utilities to component directory

---

## 8. ESLint & Prettier Configuration

### Issues Found
- **No linting configuration detected**: Code quality enforcement tools not configured

### Recommended Actions
- [ ] Add ESLint configuration with TypeScript support
- [ ] Add Prettier for consistent code formatting
- [ ] Configure pre-commit hooks (husky) to enforce standards
- [ ] Add GitHub Actions for CI/CD validation

---

## 9. Content & Data Organization

### Issues Found
- **Hardcoded text**: Button texts, titles, strings hardcoded in components
- **Magic strings**: Content not centralized

### Examples from `page.tsx`
```tsx
<Banner 
  buttonLeft="Lær mer" 
  buttonLeftUrl="https://ndla.no/..." 
  titlePart1="Åpne lisenser" 
  titlePart2="er delingskultur!"
/>
```

### Recommended Actions
- [ ] Extract hardcoded strings to constants or config files
- [ ] Consider i18n library for multi-language support (if needed)
- [ ] Create a centralized configuration file for URLs and text

---

## 10. Recommendations Summary

### High Priority
1. Convert all `.js` components to `.tsx` with proper types
2. Standardize import paths (use `@/` alias consistently)
3. Convert default exports to named exports
4. Fix variable naming: `allposts` → `allPosts`, unclear prop names
5. Add type definitions to all components lacking them

### Medium Priority
6. Create component directory structure
7. Configure ESLint & Prettier
8. Extract utility functions to shared utilities directory
9. Add JSDoc comments to components
10. Standardize language (English for code, keep Norwegian for content)

### Nice to Have
11. Set up GitHub Actions for code quality checks
12. Create component documentation / Storybook
13. Add unit tests for utility functions
14. Create naming convention guide document

---

## Implementation Order

1. **Phase 1 - Type Safety** (Week 1)
   - Convert `.js` to `.tsx`
   - Add prop types to all components
   - Fix ESLint errors

2. **Phase 2 - Consistency** (Week 2)
   - Standardize imports (relative → absolute)
   - Fix naming conventions (allposts, buttonLeft, etc.)
   - Convert default to named exports

3. **Phase 3 - Organization** (Week 2-3)
   - Reorganize components into subdirectories
   - Extract utilities
   - Create barrel exports

4. **Phase 4 - Documentation & Testing** (Week 3-4)
   - Add JSDoc comments
   - Set up linting & formatting
   - Create development guidelines

---

## Acceptance Criteria

- [ ] All component files are `.tsx` (except images/assets)
- [ ] All components have TypeScript interfaces
- [ ] All imports use `@/` alias paths
- [ ] All exports are named exports
- [ ] Naming follows camelCase/PascalCase conventions
- [ ] ESLint & Prettier configured and passing
- [ ] No compiler warnings with `strict: true`
- [ ] README.md updated with development guidelines

---

## Files to Review (Priority Order)

### Critical
- Components needing migration: `Banner.js`, `BannerSmall.js`, `Footermobile.js`, `FooterPath.js`, `HeaderSearch.js`, `License.js`, `NavButton.js`, `NotFound.js`, `PathStarter.js`, `SearchButton.js`, `SectionHeader.js`

### Important
- `app/page.tsx` - Import organization
- `lib/content.ts` - Type definitions
- `app/layout.tsx` - Language metadata (lang="en" but Norwegian content)

### Configuration
- `tsconfig.json` - Consider `allowJs: false`
- Create `.eslintrc.json`
- Create `.prettierrc.json`

---

## Related Issues/PRs
(To be created as implementation proceeds)
