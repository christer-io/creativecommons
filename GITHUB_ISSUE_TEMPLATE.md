# Code Quality Review & Refactoring

## Description
Comprehensive audit of code quality, naming conventions, architecture, and structure. This issue tracks systematic improvements to maintainability, consistency, and adherence to TypeScript best practices.

## Current State Analysis

### ✅ Strengths
- Modern tech stack (Next.js 16, React 19, TypeScript)
- Good content organization with markdown files
- Utility functions well isolated (`lib/content.ts`)
- Responsive design with Tailwind CSS

### ⚠️ Areas for Improvement
1. **Type Safety**: Mixed `.js` and `.tsx` files; `allowJs: true` in tsconfig
2. **Naming**: Inconsistent variable naming (`allposts` vs `allPosts`, unclear prop names like `buttonLeft`)
3. **Imports**: Mix of relative and absolute paths
4. **Exports**: All default exports; harder to refactor/tree-shake
5. **Organization**: Flat component structure; no categorization
6. **Language**: Mixed English/Norwegian in code (should be English for code)
7. **Tooling**: No ESLint/Prettier configuration
8. **Documentation**: Missing prop documentation and JSDoc comments

## Detailed Issues

### Issue 1: TypeScript Compliance
**Priority**: High  
**Files Affected**: 11 `.js` component files  
**Action Items**:
- [ ] Convert `Banner.js`, `BannerSmall.js`, `Footermobile.js`, etc. to `.tsx`
- [ ] Add prop interfaces to all components
- [ ] Consider `allowJs: false` in tsconfig.json after migration

### Issue 2: Naming Consistency  
**Priority**: High  
**Examples**:
- `allposts` → `allPosts`
- `buttonLeft`, `buttonLeftUrl` → `primaryButton`, `primaryButtonUrl` (or similar)
- `titlePart1`, `titlePart2` → `titleMain`, `titleSubtitle`
- `posttype` → `postType`

### Issue 3: Import Standardization
**Priority**: High  
**Current**: Mix of relative (`../components/`) and absolute (`@/app/`)  
**Goal**: All imports use `@/` alias

### Issue 4: Export Pattern
**Priority**: Medium  
**Change**: All default exports → named exports  
**Benefit**: Better refactoring, tree-shaking, IDE support

### Issue 5: Component Organization
**Priority**: Medium  
**Current**: Flat `/components` directory with 22 files  
**Proposed**:
```
components/
├── ui/          (Button, SearchButton, NavButton)
├── layout/      (Header, Footer, Banner, Hero)
├── content/     (MarkdownRenderer, ImgCard, etc.)
└── common/      (ExternalLink, ReadMore, etc.)
```

### Issue 6: Code Quality Tooling
**Priority**: Medium  
**Actions**:
- [ ] Add ESLint with TypeScript support
- [ ] Add Prettier for formatting
- [ ] Configure pre-commit hooks (optional)

### Issue 7: Type Documentation
**Priority**: Low  
**Actions**:
- [ ] Add JSDoc comments to components
- [ ] Document complex type definitions
- [ ] Create development guidelines

## Files Impacted

### Critical (Needs Conversion)
11 `.js` component files need conversion to `.tsx`

### Important (Needs Review)
- `app/page.tsx` - Import patterns
- `lib/content.ts` - Type definitions  
- `components/Banner.js` - Example for refactoring

## Implementation Plan

### Phase 1: Type Safety (Estimated: 2-3 days)
1. Convert `.js` components to `.tsx`
2. Create interfaces for all component props
3. Fix TypeScript strict mode warnings

### Phase 2: Consistency (Estimated: 2-3 days)  
1. Standardize imports (all use `@/`)
2. Rename variables (allposts, buttonLeft, etc.)
3. Convert default to named exports

### Phase 3: Organization (Estimated: 2 days)
1. Create component subdirectories
2. Move files accordingly
3. Update imports

### Phase 4: Tooling & Documentation (Estimated: 1-2 days)
1. ESLint/Prettier configuration
2. Add JSDoc comments
3. Update README with guidelines

**Total Estimated Time**: 1-2 weeks

## Success Criteria

- [ ] All components are `.tsx` files
- [ ] Zero TypeScript errors with `strict: true`
- [ ] All imports use `@/` alias
- [ ] All exports are named exports
- [ ] Naming follows conventions (camelCase/PascalCase)
- [ ] ESLint configuration in place and passing
- [ ] Component directory organized into categories
- [ ] README updated with development standards

## References

See [CODE_REVIEW_PLAN.md](./CODE_REVIEW_PLAN.md) for detailed analysis and recommendations.

## Related
- #[Future PR for Phase 1]
- #[Future PR for Phase 2]
- etc.

---

**Issue Type**: Code Quality  
**Complexity**: Medium  
**Impact**: High (Improves maintainability, scalability, and developer experience)
