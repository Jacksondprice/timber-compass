// billing helpers for bus route planner for district transportation

export function billingStep0(records: any[], limit = 356) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep1(records: any[], limit = 202) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep2(records: any[], limit = 443) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep3(records: any[], limit = 224) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep4(records: any[], limit = 90) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep5(records: any[], limit = 176) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function billingStep6(records: any[], limit = 199) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('billing step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
