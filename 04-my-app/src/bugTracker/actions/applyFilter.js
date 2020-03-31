export function applyFilter(shouldApply){
    return { type : 'APPLY_BUG_FILTER' , payload : shouldApply };
}