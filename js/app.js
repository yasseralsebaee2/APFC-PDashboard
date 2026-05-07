    const DATA_WORKER_URL = 'https://apfc-data.yasser-alsebaee.workers.dev/';
    const DATA_WORKER_API_KEY = 'apfc_F7k9LmQ2xR8vT5ZpA1sD6wN3YtE4uH0JcB9KqX';
    const DATA_FILE_KEYS = {
      piles: 'piles',
      kingpost: 'kingpost',
      users: 'users',
      manpower: 'manpower',
      manpowers: 'manpowers',
      equipment: 'equipment',
      dailyrigs: 'dailyrigs',
      rigproduction: 'rigproduction'
    };
    const ACCESS_REQUEST_EMAIL = 'yasser.alsebaee@granadaeurope.com';
    const DEFAULT_PROJECT = 'Titania';
    const AUTH_STORAGE_KEY = 'apfcDashboardAuth';
    const AUTH_BRIDGE_MESSAGE_TYPE = 'APFC_AUTH';
    const EXTERNAL_AUTH_GRACE_MS = 2800;

    const els = {
      authShell: document.getElementById('authShell'),
      authForm: document.getElementById('authForm'),
      authLoginInput: document.getElementById('authLoginInput'),
      authPasswordInput: document.getElementById('authPasswordInput'),
      authSubmitBtn: document.getElementById('authSubmitBtn'),
      authRequestAccessBtn: document.getElementById('authRequestAccessBtn'),
      authRequestPanel: document.getElementById('authRequestPanel'),
      authRequestNameInput: document.getElementById('authRequestNameInput'),
      authRequestEmailInput: document.getElementById('authRequestEmailInput'),
      authRequestError: document.getElementById('authRequestError'),
      authRequestCancelBtn: document.getElementById('authRequestCancelBtn'),
      authRequestSendBtn: document.getElementById('authRequestSendBtn'),
      authError: document.getElementById('authError'),
      loadingShell: document.getElementById('loadingShell'),
      loadingTitle: document.getElementById('loadingTitle'),
      loadingMessage: document.getElementById('loadingMessage'),
      signOutBtn: document.getElementById('signOutBtn'),
      projectSelector: document.getElementById('projectSelector'),
      projectScopeBtn: document.getElementById('projectScopeBtn'),
      dataSourceChip: document.getElementById('dataSourceChip'),
      overviewDateModeButtons: Array.from(document.querySelectorAll('#overviewDateModeToggle button')),
      refreshDashboardBtn: document.getElementById('refreshDashboardBtn'),
      printMapPdfBtn: document.getElementById('printMapPdfBtn'),
      pageSubtitle: document.getElementById('pageSubtitle'),
      kpiTotal: document.getElementById('kpiTotal'),
      kpiExecuted: document.getElementById('kpiExecuted'),
      kpiRemaining: document.getElementById('kpiRemaining'),
      kpiRigs: document.getElementById('kpiRigs'),
      kpiAvg: document.getElementById('kpiAvg'),
      kpiAvgMetaL: document.getElementById('kpiAvgMetaL'),
      kpiAvgMeta: document.getElementById('kpiAvgMeta'),
      kpiEta: document.getElementById('kpiEta'),
      kpiEtaMeta: document.getElementById('kpiEtaMeta'),
      kpiEtaDays: document.getElementById('kpiEtaDays'),
      kpiTotalMetaR: document.getElementById('kpiTotalMetaR'),
      kpiCompletedMetaL: document.getElementById('kpiCompletedMetaL'),
      kpiCompletedMetaR: document.getElementById('kpiCompletedMetaR'),
      kpiRemainingMetaR: document.getElementById('kpiRemainingMetaR'),
      chartTitle: document.getElementById('chartTitle'),
      chartTag: document.getElementById('chartTag'),
      chartGrid: document.getElementById('chartGrid'),
      chartSeries: document.getElementById('chartSeries'),
      chartLabels: document.getElementById('chartLabels'),
      chartXAxis: document.getElementById('chartXAxis'),
      chartWrap: document.getElementById('chartWrap'),
      chartSvg: document.getElementById('chartSvg'),
      chartTooltip: document.getElementById('chartTooltip'),
      overviewSeriesLegend: document.getElementById('overviewSeriesLegend'),
      overviewActivityButtons: Array.from(document.querySelectorAll('#overviewActivityToggle button')),
      overviewActivityToggle: document.getElementById('overviewActivityToggle'),
      overviewMatrixTitle: document.getElementById('overviewMatrixTitle'),
      overviewMatrixTag: document.getElementById('overviewMatrixTag'),
      overviewMatrixHead1: document.getElementById('overviewMatrixHead1'),
      overviewMatrixHead2: document.getElementById('overviewMatrixHead2'),
      overviewMatrixHead3: document.getElementById('overviewMatrixHead3'),
      overviewMatrixHead4: document.getElementById('overviewMatrixHead4'),

      timelineStartDate: document.getElementById('timelineStartDate'),
      timelineEndDate: document.getElementById('timelineEndDate'),
      timelineApplyBtn: document.getElementById('timelineApplyBtn'),
      timelineClearBtn: document.getElementById('timelineClearBtn'),
      timelinePreset7Btn: document.getElementById('timelinePreset7Btn'),
      timelinePreset14Btn: document.getElementById('timelinePreset14Btn'),
      timelinePreset30Btn: document.getElementById('timelinePreset30Btn'),
      timelinePileSearch: document.getElementById('timelinePileSearch'),
      timelinePileList: document.getElementById('timelinePileList'),
      timelineTableBody: document.getElementById('timelineTableBody'),
      timelineHeadDrilling: document.getElementById('timelineHeadDrilling'),
      timelineHeadCage: document.getElementById('timelineHeadCage'),
      timelineHeadPouring: document.getElementById('timelineHeadPouring'),
      timelineHeadGap1: document.getElementById('timelineHeadGap1'),
      timelineHeadGap2: document.getElementById('timelineHeadGap2'),
      timelineHeadGross: document.getElementById('timelineHeadGross'),
      timelineScopeCount: document.getElementById('timelineScopeCount'),
      timelineChartWrap: document.getElementById('timelineChartWrap'),
      timelineSvg: document.getElementById('timelineSvg'),
      timelineEmpty: document.getElementById('timelineEmpty'),
      timelineSubtitle: document.getElementById('timelineSubtitle'),
      timelineTag: document.getElementById('timelineTag'),
      timelineZoomOutBtn: document.getElementById('timelineZoomOutBtn'),
      timelineZoomResetBtn: document.getElementById('timelineZoomResetBtn'),
      timelineZoomInBtn: document.getElementById('timelineZoomInBtn'),
      timelineSummarySubtitle: document.getElementById('timelineSummarySubtitle'),
      timelinePieSubtitle: document.getElementById('timelinePieSubtitle'),
      timelinePileTag: document.getElementById('timelinePileTag'),
      timelinePileCount: document.getElementById('timelinePileCount'),
      timelinePileCountMeta: document.getElementById('timelinePileCountMeta'),
      timelinePeriodValue: document.getElementById('timelinePeriodValue'),
      timelinePeriodMeta: document.getElementById('timelinePeriodMeta'),
      timelineGrossAvg: document.getElementById('timelineGrossAvg'),
      timelineCycleAvg: document.getElementById('timelineCycleAvg'),
      timelinePieSvg: document.getElementById('timelinePieSvg'),
      timelinePieTotal: document.getElementById('timelinePieTotal'),
      timelineLegendDrilling: document.getElementById('timelineLegendDrilling'),
      timelineLegendGap1: document.getElementById('timelineLegendGap1'),
      timelineLegendCage: document.getElementById('timelineLegendCage'),
      timelineLegendGap2: document.getElementById('timelineLegendGap2'),
      timelineLegendPouring: document.getElementById('timelineLegendPouring'),

      granularityToggleButtons: Array.from(document.querySelectorAll('#granularityToggleGroup .chart-toggle')),
      modeLabelCumulative: document.getElementById('modeLabelCumulative'),
      metricToggleButtons: Array.from(document.querySelectorAll('#metricToggleGroup .chart-toggle')),
      matrixBody: document.getElementById('matrixBody'),
      kpiRow: document.getElementById('kpiRow'),
      pageOverview: document.getElementById('pageOverview'),
      pageMap: document.getElementById('pageMap'),
      pageProduction: document.getElementById('pageProduction'),
      pageUtilization: document.getElementById('pageUtilization'),
      pageManpower: document.getElementById('pageManpower'),
      pageCompanyManpower: document.getElementById('pageCompanyManpower'),
      pageCompanyAnalytics: document.getElementById('pageCompanyAnalytics'),
      pageTimeline: document.getElementById('pageTimeline'),
      pageCost: document.getElementById('pageCost'),
      costTableHeadRow: document.querySelector('.financial-table thead tr'),
      costTableBody: document.getElementById('costTableBody'),
      costTrendWrap: document.getElementById('costTrendWrap'),
      costTrendSvg: document.getElementById('costTrendSvg'),
      costLmWrap: document.getElementById('costLmWrap'),
      costLmSvg: document.getElementById('costLmSvg'),
      manpowerTableBody: document.getElementById('manpowerTableBody'),
      manpowerHistSvg: document.getElementById('manpowerHistSvg'),
      equipmentTableBody: document.getElementById('equipmentTableBody'),
      equipmentHistSvg: document.getElementById('equipmentHistSvg'),
      companyManpowerLayoutSelect: document.getElementById('companyManpowerLayoutSelect'),
      companyManpowerDesignationSelect: document.getElementById('companyManpowerDesignationSelect'),
      companyManpowerScopeButtons: Array.from(document.querySelectorAll('#companyManpowerScopeToggle button')),
      companyManpowerExportBtn: document.getElementById('companyManpowerExportBtn'),
      companyManpowerSubtitle: document.getElementById('companyManpowerSubtitle'),
      companyManpowerSummaryMeta: document.getElementById('companyManpowerSummaryMeta'),
      companyManpowerColGroup: document.getElementById('companyManpowerColGroup'),
      companyManpowerHeadRow: document.getElementById('companyManpowerHeadRow'),
      companyManpowerMatrixBody: document.getElementById('companyManpowerMatrixBody'),
      companyExportPanel: document.getElementById('companyExportPanel'),
      companyExportProjectSelect: document.getElementById('companyExportProjectSelect'),
      companyExportCancelBtn: document.getElementById('companyExportCancelBtn'),
      companyExportConfirmBtn: document.getElementById('companyExportConfirmBtn'),
      companyAnalyticsDesignationSelect: document.getElementById('companyAnalyticsDesignationSelect'),
      companyAnalyticsLayoutButtons: Array.from(document.querySelectorAll('#companyAnalyticsLayoutToggle button')),
      companyAnalyticsScopeButtons: Array.from(document.querySelectorAll('#companyAnalyticsScopeToggle button')),
      companyAnalyticsExecutiveView: document.getElementById('companyAnalyticsExecutiveView'),
      companyAnalyticsHeatmapView: document.getElementById('companyAnalyticsHeatmapView'),
      companyAnalyticsKpis: document.getElementById('companyAnalyticsKpis'),
      companyProjectBars: document.getElementById('companyProjectBars'),
      companyDesignationBars: document.getElementById('companyDesignationBars'),
      companyHeatmapHead: document.getElementById('companyHeatmapHead'),
      companyHeatmapBody: document.getElementById('companyHeatmapBody'),
      companyHeatmapExpandAllBtn: document.getElementById('companyHeatmapExpandAllBtn'),
      companyShiftDonut: document.getElementById('companyShiftDonut'),
      companyShiftDonutTotal: document.getElementById('companyShiftDonutTotal'),
      companyShiftLegend: document.getElementById('companyShiftLegend'),
      companyInsightsList: document.getElementById('companyInsightsList'),
      utilizationTableBody: document.getElementById('utilizationTableBody'),
      utilizationSvg: document.getElementById('utilizationSvg'),
      utilizationChartTag: document.getElementById('utilizationChartTag'),
      utilizationUtilTicks: document.getElementById('utilizationUtilTicks'),
      utilizationLmTicks: document.getElementById('utilizationLmTicks'),
      utilizationLegend: document.getElementById('utilizationLegend'),
      utilizationChartWrap: document.getElementById('utilizationChartWrap'),
      utilizationViewButtons: Array.from(document.querySelectorAll('[data-util-view]')),
      utilizationMatrixView: document.getElementById('utilizationMatrixView'),
      utilizationTimelineView: document.getElementById('utilizationTimelineView'),
      utilizationTimelineTag: document.getElementById('utilizationTimelineTag'),
      utilizationTimelineSummary: document.getElementById('utilizationTimelineSummary'),
      utilizationTimelineLegend: document.getElementById('utilizationTimelineLegend'),
      utilizationTimelineWrap: document.getElementById('utilizationTimelineWrap'),
      utilizationTimelineSvg: document.getElementById('utilizationTimelineSvg'),
      utilizationTimelineTooltip: document.getElementById('utilizationTimelineTooltip'),
      utilizationTimelineFootnote: document.getElementById('utilizationTimelineFootnote'),
      projectMapFrame: document.getElementById('projectMapFrame'),
      navButtons: Array.from(document.querySelectorAll('.nav-btn')),
      prodSvgs: {
        gross: document.getElementById('prodSvgGross'),
        drilling: document.getElementById('prodSvgDrilling'),
        cage: document.getElementById('prodSvgCage'),
        concrete: document.getElementById('prodSvgConcrete'),
        overconsumption: document.getElementById('prodSvgOverconsumption'),
        overexcavation: document.getElementById('prodSvgOverexcavation')
      },
      prodToolButtons: Array.from(document.querySelectorAll('.mini-toggle[data-prod-key]')),
      utilizationModeButtons: Array.from(document.querySelectorAll('[data-util-mode]'))
    };

    let rawRows = [];
    let kingPostRows = [];
    let manpowerRows = [];
    let companyManpowerRows = [];
    let equipmentRegistryRows = [];
    let dailyReportEquipmentRows = [];
    let rigProductionRows = [];
    let usersDirectory = [];
    let currentUser = null;
    let pendingExternalAuth = null;
    let externalAuthOrigin = '';
    let selectedProject = DEFAULT_PROJECT;
    let selectedPlot = '';
    let chartMode = 'daily'; // daily or cumulative (toggle)
    let chartMetric = 'piles';
    let chartGranularity = 'day';
    let activePage = 'overview';
    let companyManpowerScopeMode = 'filtered';
    let companyManpowerDesignationFilter = 'all';
    let companyManpowerColumnWidths = {};
    let companyAnalyticsScopeMode = 'filtered';
    let companyAnalyticsLayoutMode = 'overview';
    let companyAnalyticsDesignationFilter = 'all';
    let companyHeatmapExpandedDesignations = new Set();
    let utilizationMode = 'daily';
    let utilizationView = 'matrix';
    let overviewDateMode = 'shift'; // shared reporting mode for Overview + Production only
    let overviewActivityMode = 'piles';
    let prodState = {
      gross: 'day',
      drilling: 'day',
      cage: 'day',
      concrete: 'day',
      overconsumption: 'day',
      overexcavation: 'day'
    };
    let productionChartsInitialized = false;

    let timelineState = {
      start: '',
      end: '',
      pile: 'all',
      pileSearch: '',
      zoom: 1
    };
    let timelineTooltipEl = null;

    function normalizeText(value) {
      return String(value || '').trim();
    }

    function normalizeLogin(value) {
      return normalizeText(value).toLowerCase();
    }

    function escapeHtml(value) {
      return normalizeText(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    async function fetchWorkerJson(fileKey) {
      const url = new URL(DATA_WORKER_URL);
      url.searchParams.set('file', fileKey);
      const res = await fetch(url.toString(), {
        cache: 'no-store',
        headers: {
          'x-api-key': DATA_WORKER_API_KEY
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }

    function extractRigProductionList(data) {
      const items = Array.isArray(data) ? data : (!data || typeof data !== 'object' ? [] : [data.body, data.rows, data.items, data.data].find(Array.isArray) || []);
      return items.filter(row => {
        const keys = Object.keys(row || {}).map(key => key.toLowerCase());
        return keys.includes('project') && keys.includes('rig') && keys.includes('from') && keys.includes('to');
      });
    }

    function sanitizeRigProductionRow(row) {
      const fromValue = row?.from || row?.From;
      const toValue = row?.to || row?.To;
      const fromDate = fromValue ? new Date(fromValue) : null;
      const toDate = toValue ? new Date(toValue) : null;
      const durationHours = (fromDate instanceof Date && !Number.isNaN(fromDate.getTime()) && toDate instanceof Date && !Number.isNaN(toDate.getTime()))
        ? Math.max(0, (toDate.getTime() - fromDate.getTime()) / 3600000)
        : 0;
      const depthValue = Number(row?.depth ?? row?.Depth ?? 0);
      return {
        project: getCompanyProjectLabel(row?.project || row?.Project),
        projectRaw: normalizeText(row?.project || row?.Project),
        plot: normalizeText(row?.plot || row?.Plot),
        pileId: normalizeText(row?.pileid || row?.pileId || row?.PileID),
        activityType: normalizeText(row?.activitytype || row?.activityType || row?.ActivityType),
        contractor: normalizeText(row?.contractor || row?.Contractor),
        rig: normalizeText(row?.rig || row?.Rig),
        from: fromValue || '',
        to: toValue || '',
        date: normalizeDateString(fromValue || toValue),
        durationHours,
        drilledLm: Number.isFinite(depthValue) && depthValue > 0 ? depthValue : 0
      };
    }

    function extractPileList(data) {
      const payload = data?.body ?? data;
      if (Array.isArray(payload)) {
        if (payload.every(item => item && typeof item === 'object' && Array.isArray(item.piles))) {
          return payload.flatMap(item => {
            const project = normalizeText(item.project || item.Project);
            const plot = normalizeText(item.plot || item.Plot);
            return item.piles.map(pile => ({
              ...pile,
              project: normalizeText(pile.project || pile.Project || project),
              plot: normalizeText(pile.plot || pile.Plot || plot)
            }));
          });
        }
        return payload.map(row => ({
          ...row,
          project: normalizeText(row?.project || row?.Project),
          plot: normalizeText(row?.plot || row?.Plot)
        }));
      }
      if (payload && typeof payload === 'object' && Array.isArray(payload.piles)) {
        const project = normalizeText(payload.project || payload.Project);
        const plot = normalizeText(payload.plot || payload.Plot);
        return payload.piles.map(pile => ({
          ...pile,
          project: normalizeText(pile.project || pile.Project || project),
          plot: normalizeText(pile.plot || pile.Plot || plot)
        }));
      }
      return [];
    }

    function isAllPlotsValue(value) {
      const normalized = normalizeText(value).toLowerCase();
      return !normalized || normalized === '-' || normalized === 'ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â' || normalized === 'all' || normalized === 'all plots' || normalized === 'all plot';
    }

    function isAllProjectsValue(value) {
      const normalized = normalizeText(value).toLowerCase();
      return !normalized || normalized === 'all' || normalized === 'all projects';
    }

    function normalizeDateString(value) {
      const raw = String(value || '').trim();
      if (!raw) return '';
      const d = new Date(raw);
      if (Number.isNaN(d.getTime())) return '';
      return d.toISOString().slice(0, 10);
    }

    function getStoredAuthSession() {
      try {
        const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : null;
      } catch {
        return null;
      }
    }

    function storeAuthSession(user) {
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    }

    function clearAuthSession() {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
    }

    function setAppLoading(isLoading, title = 'Preparing dashboard', message = 'Connecting to secure data sources and project context.') {
      document.body.classList.toggle('app-loading', !!isLoading);
      if (els.loadingShell) els.loadingShell.setAttribute('aria-hidden', isLoading ? 'false' : 'true');
      if (els.loadingTitle) els.loadingTitle.textContent = title || 'Preparing dashboard';
      if (els.loadingMessage) els.loadingMessage.textContent = message || 'Connecting to secure data sources and project context.';
    }

    function wait(ms) {
      return new Promise(resolve => window.setTimeout(resolve, ms));
    }

    function isEmbeddedDashboard() {
      try {
        return window.self !== window.top;
      } catch {
        return true;
      }
    }

    function getAllowedParentOrigins() {
      const configured = window.APFC_ALLOWED_PARENT_ORIGINS;
      if (Array.isArray(configured)) {
        return configured.map(origin => normalizeText(origin)).filter(Boolean);
      }
      if (typeof configured === 'string' && configured.trim()) {
        return configured.split(',').map(origin => normalizeText(origin)).filter(Boolean);
      }
      return [];
    }

    function isTrustedExternalAuthOrigin(origin) {
      const normalizedOrigin = normalizeText(origin);
      if (!normalizedOrigin) return false;
      if (normalizedOrigin === window.location.origin) return true;

      const allowedOrigins = getAllowedParentOrigins();
      if (allowedOrigins.length) {
        return allowedOrigins.includes(normalizedOrigin);
      }
      return false;
    }

    function sanitizeUserRecord(record) {
      return {
        username: normalizeText(record.username || record.Username || record.userName || record.UserName),
        password: String(record.password || record.Password || ''),
        email: normalizeText(record.email || record.Email),
        type: normalizeText(record.type || record.Type).toLowerCase() || 'user',
        name: normalizeText(record.username || record.Username || record.email || record.Email),
        project: normalizeText(record.project || record.Project) || DEFAULT_PROJECT,
        plot: normalizeText(record.plot || record.Plot)
      };
    }

    function extractUserList(data) {
      if (Array.isArray(data)) return data;
      if (!data || typeof data !== 'object') return [];

      const directLists = [
        data.body,
        data.Body,
        data.users,
        data.Users,
        data.items,
        data.Items,
        data.records,
        data.Records,
        data.data,
        data.Data
      ];

      for (const candidate of directLists) {
        if (Array.isArray(candidate)) return candidate;
      }

      const objectValues = Object.values(data);
      if (objectValues.length && objectValues.every(value => value && typeof value === 'object' && !Array.isArray(value))) {
        return objectValues;
      }

      return [];
    }

    function extractManpowerList(data) {
      const items = Array.isArray(data) ? data : (!data || typeof data !== 'object' ? [] : [data.body, data.rows, data.items, data.data].find(Array.isArray) || []);
      return items.filter(row => {
        const keys = Object.keys(row || {}).map(key => key.toLowerCase());
        return keys.includes('date') || keys.includes('projectmanager') || keys.includes('siteengineer') || keys.includes('project manager');
      });
    }

    function extractCompanyManpowerList(data) {
      const items = Array.isArray(data) ? data : (!data || typeof data !== 'object' ? [] : [data.body, data.rows, data.items, data.data].find(Array.isArray) || []);
      return items.filter(row => {
        const keys = Object.keys(row || {}).map(key => key.toLowerCase());
        return (
          keys.includes('employee number') ||
          keys.includes('employee name') ||
          keys.includes('employeenumber') ||
          keys.includes('employeename') ||
          keys.includes('designation')
        );
      });
    }

    const COMPANY_PROJECT_ALIASES = {
      Titania: ['titania', '89'],
      Vintage: ['vintage']
    };

    function getCompanyProjectToken(value) {
      const normalized = normalizeText(value).toLowerCase();
      if (!normalized) return '';
      for (const [label, aliases] of Object.entries(COMPANY_PROJECT_ALIASES)) {
        if ([label.toLowerCase(), ...aliases].includes(normalized)) return label.toLowerCase();
      }
      return normalized;
    }

    function getCompanyProjectLabel(value) {
      const normalized = normalizeText(value);
      if (!normalized) return 'Unassigned';
      for (const [label, aliases] of Object.entries(COMPANY_PROJECT_ALIASES)) {
        if ([label.toLowerCase(), ...aliases].includes(normalized.toLowerCase())) return label;
      }
      return normalized;
    }

    function sanitizeCompanyEmployee(row) {
      return {
        employeeNumber: normalizeText(row['Employee Number'] || row.employeeNumber || row.employee_number || row.employeenumber),
        employeeName: normalizeText(row['Employee Name'] || row.employeeName || row.employee_name || row.employeename),
        designation: normalizeText(row.generaldesignation),
        subDesignation: normalizeText(row.designation),
        project: getCompanyProjectLabel(row.Project || row.project),
        projectRaw: normalizeText(row.Project || row.project),
        shift: normalizeText(row.Shift || row.shift),
        campNumber: normalizeText(row['Camp Number'] || row.campNumber || row.camp_number || row.camp),
        roomNumber: normalizeText(row['Room Number'] || row.roomNumber || row.room_number || row.room),
        joiningDate: normalizeText(row.joiningdate || row['Joining Date'] || row.joiningDate || row.joining_date),
        remarks: normalizeText(row.Remarks || row.remarks)
      };
    }

    function extractEquipmentRegistryList(data) {
      const items = Array.isArray(data) ? data : (!data || typeof data !== 'object' ? [] : [data.body, data.rows, data.items, data.data].find(Array.isArray) || []);
      return items.filter(row => {
        const keys = Object.keys(row || {}).map(key => key.toLowerCase());
        return keys.includes('type') || keys.includes('project') || keys.includes('status') || keys.includes('rig');
      });
    }

    function sanitizeEquipmentRegistryRow(row) {
      return {
        label: normalizeText(row.Rig || row.rig || row.name || row.Name),
        type: normalizeText(row.type || row.Type),
        project: getCompanyProjectLabel(row.project || row.Project),
        projectRaw: normalizeText(row.project || row.Project),
        contractor: normalizeText(row.contractor || row.Contractor),
        status: normalizeText(row.status || row.Status),
        plot: normalizeText(row.plot || row.Plot)
      };
    }

    function extractDailyReportEquipmentList(data) {
      const items = Array.isArray(data) ? data : (!data || typeof data !== 'object' ? [] : [data.body, data.rows, data.items, data.data].find(Array.isArray) || []);
      return items.filter(row => {
        const keys = Object.keys(row || {}).map(key => key.toLowerCase());
        return keys.includes('date') && keys.includes('project') && (keys.includes('type') || keys.includes('rig'));
      });
    }

    function sanitizeDailyReportEquipmentRow(row) {
      return {
        date: normalizeDateString(row.date || row.Date),
        project: getCompanyProjectLabel(row.project || row.Project),
        projectRaw: normalizeText(row.project || row.Project),
        plot: normalizeText(row.plot || row.Plot),
        contractor: normalizeText(row.contractor || row.Contractor),
        label: normalizeText(row.rig || row.Rig || row.name || row.Name),
        type: normalizeText(row.type || row.Type)
      };
    }

    function getOverviewEquipmentRigCount(project = selectedProject) {
      const targetProjectToken = getCompanyProjectToken(project || selectedProject || DEFAULT_PROJECT);
      return equipmentRegistryRows
        .map(sanitizeEquipmentRegistryRow)
        .filter(item => normalizeText(item.type).toLowerCase() === 'rig')
        .filter(item => normalizeText(item.status).toLowerCase() === 'active')
        .filter(item => getCompanyProjectToken(item.projectRaw || item.project) === targetProjectToken)
        .length;
    }

    function getActiveDailyReportRigNamesByDate(project = selectedProject) {
      const targetProjectToken = getCompanyProjectToken(project || selectedProject || DEFAULT_PROJECT);
      const normalizedSelectedPlot = normalizeText(selectedPlot);
      const byDate = new Map();

      dailyReportEquipmentRows
        .map(sanitizeDailyReportEquipmentRow)
        .filter(item => normalizeText(item.type).toLowerCase() === 'rig')
        .filter(item => getCompanyProjectToken(item.projectRaw || item.project) === targetProjectToken)
        .filter(item => {
          if (isAllPlotsValue(normalizedSelectedPlot)) return true;
          const rowPlot = normalizeText(item.plot);
          return rowPlot === normalizedSelectedPlot || isAllPlotsValue(rowPlot);
        })
        .forEach(item => {
          const dateKey = normalizeDateString(item.date);
          const rig = normalizeText(item.label);
          if (!dateKey || !rig) return;
          if (!byDate.has(dateKey)) byDate.set(dateKey, new Set());
          byDate.get(dateKey).add(rig);
        });

      return byDate;
    }

    function getScopeLabel() {
      if (!selectedProject) return 'No Project';
      if (isAllPlotsValue(selectedPlot)) return selectedProject;
      return `${selectedProject} / ${selectedPlot}`;
    }

    function getScopeSubtitle() {
      if (!selectedProject) return 'Project Dashboard';
      if (isAllPlotsValue(selectedPlot)) return `Project ${selectedProject}`;
      return `Project ${selectedProject} / Plot ${selectedPlot}`;
    }

    function isManagerUser() {
      const role = normalizeText(currentUser?.type).toLowerCase();
      return role === 'manager';
    }

    function canSelectProjects() {
      return !!currentUser && (isManagerUser() || isAllProjectsValue(currentUser?.project));
    }

    function canAccessPage(page) {
      if (!currentUser) return false;
      if (page === 'cost') return isManagerUser();
      return true;
    }

    function syncTopbarPageActions(page = activePage) {
      const showDateModeToggle = page === 'overview' || page === 'production' || page === 'utilization';
      const dateModeToggle = document.getElementById('overviewDateModeToggle');
      if (dateModeToggle) {
        dateModeToggle.style.display = showDateModeToggle ? 'inline-flex' : 'none';
      }
      if (els.printMapPdfBtn) {
        const showPrintMapPdf = page === 'map';
        els.printMapPdfBtn.hidden = !showPrintMapPdf;
        els.printMapPdfBtn.style.display = showPrintMapPdf ? 'inline-flex' : 'none';
      }
    }

    function updateUserContextUi() {
      if (els.pageSubtitle) els.pageSubtitle.textContent = getScopeSubtitle();
      if (els.projectScopeBtn) els.projectScopeBtn.textContent = getScopeLabel();

      if (els.projectSelector) {
        const showProjectSelector = canSelectProjects();
        els.projectSelector.hidden = !showProjectSelector;
        els.projectSelector.style.display = showProjectSelector ? '' : 'none';
      }

      if (els.projectScopeBtn) {
        const showProjectButton = !canSelectProjects();
        els.projectScopeBtn.hidden = !showProjectButton;
        els.projectScopeBtn.style.display = showProjectButton ? '' : 'none';
      }

      els.navButtons.forEach(btn => {
        const label = btn.querySelector('.nav-label')?.textContent?.trim();
        if (label === 'Cost') {
          const allowCost = isManagerUser();
          btn.hidden = !allowCost;
          btn.style.display = allowCost ? '' : 'none';
          btn.classList.toggle('role-hidden', !allowCost);
        }
      });

      if (els.pageCost) {
        const allowCost = isManagerUser();
        els.pageCost.hidden = !allowCost;
        els.pageCost.style.display = allowCost ? '' : 'none';
      }

      if (els.signOutBtn) {
        els.signOutBtn.hidden = !currentUser;
      }

      if (!canAccessPage(activePage)) {
        activePage = 'overview';
      }

      syncTopbarPageActions(activePage);
    }

    function setAuthLocked(isLocked, errorMessage = '') {
      document.body.classList.toggle('auth-locked', isLocked);
      if (els.authShell) els.authShell.setAttribute('aria-hidden', isLocked ? 'false' : 'true');
      if (els.authError) els.authError.textContent = errorMessage || '';
      if (isLocked) {
        els.dataSourceChip.textContent = 'Secure Access Required';
      }
    }

    function toggleRequestAccessPanel(isOpen) {
      if (!els.authRequestPanel) return;
      els.authRequestPanel.hidden = !isOpen;
      if (isOpen && els.authRequestNameInput) {
        els.authRequestNameInput.focus();
      }
    }

    function setRequestAccessError(message = '') {
      if (!els.authRequestError) return;
      els.authRequestError.textContent = message || '';
    }

    function validateEmail(value) {
      const email = normalizeText(value);
      if (!email) return false;
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function submitAccessRequest() {
      const requestName = normalizeText(els.authRequestNameInput?.value);
      const requestEmail = normalizeText(els.authRequestEmailInput?.value);
      setRequestAccessError('');

      if (!requestName) {
        setRequestAccessError('Please enter your name.');
        els.authRequestNameInput?.focus();
        return;
      }
      if (!requestEmail) {
        setRequestAccessError('Please enter your email address.');
        els.authRequestEmailInput?.focus();
        return;
      }
      if (!validateEmail(requestEmail)) {
        setRequestAccessError('Please enter a valid email address.');
        els.authRequestEmailInput?.focus();
        return;
      }

      const subject = `APFC Dashboard Access Request - ${requestName}`;
      const bodyLines = [
        'Hello,',
        '',
        'Please grant me access to APFC Project Dashboard.',
        '',
        `Name: ${requestName}`,
        `Email: ${requestEmail}`,
        '',
        'Thank you.'
      ];
      const mailtoUrl = `mailto:${encodeURIComponent(ACCESS_REQUEST_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
      window.location.href = mailtoUrl;
      setAuthLocked(true, 'Request draft opened in your email app. Please send it.');
      toggleRequestAccessPanel(false);
      setRequestAccessError('');
      if (els.authRequestNameInput) els.authRequestNameInput.value = '';
      if (els.authRequestEmailInput) els.authRequestEmailInput.value = '';
    }

    async function loadUsersDirectory() {
      const data = await fetchWorkerJson(DATA_FILE_KEYS.users);
      const list = extractUserList(data);
      usersDirectory = list.map(sanitizeUserRecord).filter(user => user.username && user.password && user.project);
      if (!usersDirectory.length) throw new Error('No users found in the APFC users source');
    }

    function findUserRecord(loginValue) {
      const normalized = normalizeLogin(loginValue);
      return usersDirectory.find(user => normalizeLogin(user.username) === normalized || normalizeLogin(user.email) === normalized) || null;
    }

    function queueExternalAuth(payload = {}, origin = '') {
      pendingExternalAuth = {
        email: normalizeText(payload.email || payload.userEmail || payload.username),
        name: normalizeText(payload.name || payload.displayName || payload.fullName),
        origin: normalizeText(origin)
      };
      if (pendingExternalAuth.origin) {
        externalAuthOrigin = pendingExternalAuth.origin;
      }
    }

    async function signInWithExternalIdentity(payload = {}) {
      const email = normalizeText(payload.email || payload.userEmail || payload.username);
      if (!email) {
        throw new Error('Power Pages sign-in did not include a user email.');
      }

      setAppLoading(true, 'Signing in securely', 'Verifying your portal identity and loading project access.');

      const matchedUser = findUserRecord(email);
      if (!matchedUser) {
        throw new Error(`No dashboard access record was found for ${email}.`);
      }

      const bridgedUser = {
        ...matchedUser,
        email: email || matchedUser.email,
        name: normalizeText(payload.name || payload.displayName || payload.fullName || matchedUser.name || matchedUser.username),
        authSource: 'powerpages'
      };

      applyUserSession(bridgedUser);
      await loadDashboardData();
      updateTimelinePileList(selectedProject);
      syncTimelinePresetButtons();
      renderTimelinePage(selectedProject);
      pendingExternalAuth = null;
      setAuthLocked(false);
      setAppLoading(false);
      if (els.authPasswordInput) els.authPasswordInput.value = '';
      if (els.authError) els.authError.textContent = '';
      return bridgedUser;
    }

    async function tryApplyPendingExternalAuth() {
      if (!pendingExternalAuth?.email || !usersDirectory.length) return false;
      await signInWithExternalIdentity(pendingExternalAuth);
      return true;
    }

    function bindExternalAuthBridge() {
      if (window.__apfcExternalAuthBound) return;
      window.addEventListener('message', async event => {
        const data = event?.data;
        if (!data || typeof data !== 'object') return;
        if (data.type !== AUTH_BRIDGE_MESSAGE_TYPE) return;
        if (!isTrustedExternalAuthOrigin(event.origin)) return;

        const payload = data.payload && typeof data.payload === 'object' ? data.payload : data;
        queueExternalAuth(payload, event.origin);

        try {
          if (usersDirectory.length) {
            await tryApplyPendingExternalAuth();
          }
        } catch (err) {
          console.error(err);
          setAppLoading(false);
          setAuthLocked(true, err.message || 'Unable to continue with Power Pages sign-in.');
        }
      });
      window.__apfcExternalAuthBound = true;
    }

    function broadcastAuthContext() {
      if (!els.projectMapFrame?.contentWindow) return;
      els.projectMapFrame.contentWindow.postMessage({
        type: 'AUTH_CONTEXT_UPDATED',
        payload: currentUser ? {
          project: selectedProject,
          plot: selectedPlot,
          overviewDateMode,
          type: currentUser.type,
          name: currentUser.name,
          username: currentUser.username,
          email: currentUser.email
        } : null
      }, window.location.origin);
    }

    function triggerMapFocusAnimation() {
      if (!els.projectMapFrame?.contentWindow) return;
      els.projectMapFrame.contentWindow.postMessage({
        type: 'MAP_FOCUS_ANIMATE'
      }, window.location.origin);
    }

    function getPrintTimestampLabel() {
      return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Dubai'
      }).format(new Date());
    }

    function getPrintLayoutScopeLabel() {
      return isAllPlotsValue(selectedPlot) ? 'ALL PLOTS' : normalizeText(selectedPlot || 'ALL PLOTS').toUpperCase();
    }

    function getProjectedPilePoint(row) {
      const x = Number(row?.design_x ?? row?.design_X);
      const y = Number(row?.design_y ?? row?.design_Y);
      return Number.isFinite(x) && Number.isFinite(y) ? { x, y } : null;
    }

    function getProjectedKingPostSegment(row) {
      const frontX = Number(row?.design_x ?? row?.design_X);
      const frontY = Number(row?.design_y ?? row?.design_Y);
      const backX = Number(row?.design_back_x ?? row?.design_back_X ?? row?.design_Back_X ?? row?.design_BackX ?? row?.designBackX);
      const backY = Number(row?.design_back_y ?? row?.design_back_Y ?? row?.design_Back_Y ?? row?.design_BackY ?? row?.designBackY);
      const hasFront = Number.isFinite(frontX) && Number.isFinite(frontY);
      const hasBack = Number.isFinite(backX) && Number.isFinite(backY);
      if (!hasFront && !hasBack) return null;
      if (hasFront && hasBack) {
        return {
          x1: frontX,
          y1: frontY,
          x2: backX,
          y2: backY,
          cx: (frontX + backX) / 2,
          cy: (frontY + backY) / 2
        };
      }
      const x = hasFront ? frontX : backX;
      const y = hasFront ? frontY : backY;
      return { x1: x, y1: y, x2: x, y2: y, cx: x, cy: y };
    }

    function parseKingPostProfileForPrint(profileText) {
      const text = normalizeText(profileText).toUpperCase();
      const match = text.match(/(\d+(?:\.\d+)?)\s*[X×]\s*(\d+(?:\.\d+)?)/);
      const depthM = match ? (Number(match[1]) / 1000) : 0.42;
      const widthM = match ? (Number(match[2]) / 1000) : 0.18;
      return {
        depthM: Number.isFinite(depthM) && depthM > 0 ? depthM : 0.42,
        widthM: Number.isFinite(widthM) && widthM > 0 ? widthM : 0.18
      };
    }

    function buildUbSectionLocalPath(widthPx, depthPx, flangePx, webPx) {
      const halfW = widthPx / 2;
      const halfD = depthPx / 2;
      const halfWeb = webPx / 2;
      const pts = [
        [-halfW, -halfD],
        [ halfW, -halfD],
        [ halfW, -halfD + flangePx],
        [ halfWeb, -halfD + flangePx],
        [ halfWeb,  halfD - flangePx],
        [ halfW,  halfD - flangePx],
        [ halfW,  halfD],
        [-halfW,  halfD],
        [-halfW,  halfD - flangePx],
        [-halfWeb, halfD - flangePx],
        [-halfWeb, -halfD + flangePx],
        [-halfW, -halfD + flangePx]
      ];
      return `M ${pts.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join(' L ')} Z`;
    }

    function buildProjectLayoutPrintSummary(pileRows, kingRows) {
      const pileExecutedRows = getExecutedRows(pileRows);
      const kingInstalledRows = kingRows.filter(isKingPostInstalled);
      const kingPredrilledRows = kingRows.filter(isKingPostPreDrilled);
      const hasInstalledKingPosts = kingInstalledRows.length > 0;
      const kingCompleted = hasInstalledKingPosts ? kingInstalledRows.length : kingPredrilledRows.length;
      const total = pileRows.length + kingRows.length;
      const completed = pileExecutedRows.length + kingCompleted;
      const remaining = Math.max(0, total - completed);
      const progress = total ? (completed / total) * 100 : 0;
      let subtitle = 'Completed elements vs total elements';
      if (pileRows.length && !kingRows.length) subtitle = 'Executed piles vs total piles';
      else if (kingRows.length && !pileRows.length) {
        subtitle = hasInstalledKingPosts
          ? 'Installed kingposts vs total kingposts'
          : 'Pre-drilled kingposts vs total kingposts';
      }
      return {
        total,
        completed,
        remaining,
        progress,
        subtitle,
        pileCount: pileRows.length,
        kingPostCount: kingRows.length,
        hasInstalledKingPosts
      };
    }

    function buildProjectLayoutLegend(pileRows, kingRows, summary) {
      let items;
      if (pileRows.length && !kingRows.length) {
        items = [
          { label: 'Executed', color: '#20cf7a' },
          { label: 'Executed Last Day', color: '#ffb347' }
        ];
      }
      else if (kingRows.length && !pileRows.length) {
        items = [
          { label: 'Pre-Drilled', color: '#ffb347' },
          { label: 'Installed', color: '#20cf7a' }
        ];
      }
      else {
        items = [
          { label: 'Complete', color: '#20cf7a' },
          { label: 'Recent / Ready', color: '#ffb347' },
          { label: 'Remaining', color: '#cfd6e2' }
        ];
      }

      const hasSonic = pileRows.some(row => getProjectLayoutTestType(row) === 'sonic');
      const hasDynamic = pileRows.some(row => getProjectLayoutTestType(row) === 'dynamic');
      if (hasSonic) items.push({ label: 'Sonic Test', color: '#2D7FF9', symbol: 'ring' });
      if (hasDynamic) items.push({ label: 'Dynamic Test', color: '#B784D7', symbol: 'square' });
      return items;
    }

    function normalizeProjectLayoutTestsValue(value) {
      return String(value || '').trim().toLowerCase();
    }

    function getProjectLayoutTestType(row) {
      const raw = normalizeProjectLayoutTestsValue(row?.tests);
      if (!raw) return '';
      if (raw.includes('sonic')) return 'sonic';
      if (raw.includes('dynamic')) return 'dynamic';
      return '';
    }

    function buildProjectLayoutPrintRecords(pileRows, kingRows) {
      const latestPileDateKey = getExecutedRows(pileRows)
        .map(row => getOverviewDateKey(row))
        .filter(Boolean)
        .sort()
        .pop() || '';
      const pileRecords = pileRows.map(row => {
        const point = getProjectedPilePoint(row);
        if (!point) return null;
        const executed = isExecutedRow(row);
        const dateKey = executed ? getOverviewDateKey(row) : '';
        const statusKey = executed
          ? (dateKey && dateKey === latestPileDateKey ? 'recent' : 'complete')
          : 'remaining';
        return {
          kind: 'pile',
          x: point.x,
          y: point.y,
          anchorX: point.x,
          anchorY: point.y,
          id: normalizeText(row.id) || '-',
          secondary: normalizeText(row.pileType),
          statusKey,
          testType: getProjectLayoutTestType(row)
        };
      }).filter(Boolean);

      const kingRecords = kingRows.map(row => {
        const segment = getProjectedKingPostSegment(row);
        if (!segment) return null;
        let statusKey = 'remaining';
        if (isKingPostInstalled(row)) statusKey = 'complete';
        else if (isKingPostPreDrilled(row)) statusKey = 'recent';
        return {
          kind: 'kingpost',
          x1: segment.x1,
          y1: segment.y1,
          x2: segment.x2,
          y2: segment.y2,
          x: segment.cx,
          y: segment.cy,
          anchorX: segment.cx,
          anchorY: segment.cy,
          id: normalizeText(row.id) || '-',
          profile: normalizeText(row.profile),
          secondary: '',
          statusKey
        };
      }).filter(Boolean);

      return [...pileRecords, ...kingRecords];
    }

    function buildConvexHull(points) {
      const clean = (points || []).filter(point => point && Number.isFinite(point.x) && Number.isFinite(point.y));
      if (clean.length <= 1) return clean;
      const sorted = clean.slice().sort((a, b) => a.x === b.x ? a.y - b.y : a.x - b.x);
      const cross = (o, a, b) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
      const lower = [];
      sorted.forEach(point => {
        while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) lower.pop();
        lower.push(point);
      });
      const upper = [];
      for (let i = sorted.length - 1; i >= 0; i -= 1) {
        const point = sorted[i];
        while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) upper.pop();
        upper.push(point);
      }
      lower.pop();
      upper.pop();
      return lower.concat(upper);
    }

    function triggerMapPrintLayout() {
      const pileRows = getRowsForProject(selectedProject);
      const kingRows = getKingPostRowsForProject(selectedProject);
      const records = buildProjectLayoutPrintRecords(pileRows, kingRows);
      if (!records.length) {
        window.alert('No project layout data is available for the current scope.');
        return;
      }

      const printWindow = window.open('', '_blank', 'width=1480,height=980');
      if (!printWindow) {
        window.alert('Unable to open the print preview window. Please allow pop-ups for this dashboard.');
        return;
      }

      const summary = buildProjectLayoutPrintSummary(pileRows, kingRows);
      const legend = buildProjectLayoutLegend(pileRows, kingRows, summary);
      const allPoints = records.flatMap(record => {
        if (record.kind === 'kingpost') {
          return [
            { x: record.x1, y: record.y1 },
            { x: record.x2, y: record.y2 },
            { x: record.anchorX, y: record.anchorY }
          ];
        }
        return [{ x: record.x, y: record.y }];
      });

      const svgWidth = 1490;
      const svgHeight = 955;
      const plotBox = { x: 10, y: 10, width: svgWidth - 20, height: svgHeight - 20 };
      const projectCenter = {
        x: allPoints.reduce((sum, point) => sum + point.x, 0) / allPoints.length,
        y: allPoints.reduce((sum, point) => sum + point.y, 0) / allPoints.length
      };

      const rotateAroundCenter = (point, angle) => {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const dx = point.x - projectCenter.x;
        const dy = point.y - projectCenter.y;
        return {
          x: dx * cos - dy * sin,
          y: dx * sin + dy * cos
        };
      };

      const fitOptions = [0, Math.PI / 2].map(angle => {
        const rotatedPoints = allPoints.map(point => rotateAroundCenter(point, angle));
        const minX = Math.min(...rotatedPoints.map(point => point.x));
        const maxX = Math.max(...rotatedPoints.map(point => point.x));
        const minY = Math.min(...rotatedPoints.map(point => point.y));
        const maxY = Math.max(...rotatedPoints.map(point => point.y));
        const spanX = Math.max(1, maxX - minX);
        const spanY = Math.max(1, maxY - minY);
        const scale = Math.min(
          (plotBox.width - 20) / spanX,
          (plotBox.height - 20) / spanY
        );
        return { angle, minX, maxX, minY, maxY, scale };
      });

      const bestFit = fitOptions.sort((a, b) => b.scale - a.scale)[0];
      const projectPoint = point => {
        const rotated = rotateAroundCenter(point, bestFit.angle);
        const originX = plotBox.x + (plotBox.width - (bestFit.maxX - bestFit.minX) * bestFit.scale) / 2;
        const originY = plotBox.y + (plotBox.height - (bestFit.maxY - bestFit.minY) * bestFit.scale) / 2;
        return {
          x: originX + (rotated.x - bestFit.minX) * bestFit.scale,
          y: originY + (bestFit.maxY - rotated.y) * bestFit.scale
        };
      };

      const projectedForHull = allPoints.map(projectPoint);
      const hullPoints = buildConvexHull(projectedForHull);
      const hullPath = hullPoints.length >= 3
        ? `M ${hullPoints.map(point => `${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(' L ')} Z`
        : '';

      const statusStyles = {
        complete: {
          fill: 'rgba(32, 207, 122, 0.24)',
          stroke: '#21cf7a',
          labelStroke: 'rgba(32, 207, 122, 0.22)'
        },
        recent: {
          fill: 'rgba(255, 179, 71, 0.22)',
          stroke: '#ffb347',
          labelStroke: 'rgba(255, 179, 71, 0.24)'
        },
        remaining: {
          fill: 'rgba(203, 211, 224, 0.18)',
          stroke: '#cfd6e2',
          labelStroke: 'rgba(207, 214, 226, 0.24)'
        }
      };

      const layoutRecords = records
        .map(record => {
          const anchor = projectPoint({ x: record.anchorX, y: record.anchorY });
          const dxRaw = record.anchorX - projectCenter.x;
          const dyRaw = projectCenter.y - record.anchorY;
          const distance = Math.hypot(dxRaw, dyRaw) || 1;
          return {
            ...record,
            screen: record.kind === 'kingpost'
              ? {
                  x1: projectPoint({ x: record.x1, y: record.y1 }).x,
                  y1: projectPoint({ x: record.x1, y: record.y1 }).y,
                  x2: projectPoint({ x: record.x2, y: record.y2 }).x,
                  y2: projectPoint({ x: record.x2, y: record.y2 }).y
                }
              : null,
            anchor,
            dirX: dxRaw / distance,
            dirY: dyRaw / distance,
            radialDistance: distance
          };
        });

      const shapeMarkup = layoutRecords.map(record => {
        const style = statusStyles[record.statusKey] || statusStyles.remaining;
        if (record.kind === 'kingpost') {
          const beam = record.screen;
          const profile = parseKingPostProfileForPrint(record.profile);
          const angleDeg = (Math.atan2(beam.y2 - beam.y1, beam.x2 - beam.x1) * 180 / Math.PI) - 90;
          const ubPrintScale = 0.62;
          const rawWidthPx = Math.min(9.2, Math.max(4.4, profile.widthM * bestFit.scale * 1.12));
          const rawDepthPx = Math.min(16.8, Math.max(8.4, profile.depthM * bestFit.scale * 1.12));
          const widthPx = rawWidthPx * ubPrintScale;
          const depthPx = rawDepthPx * ubPrintScale;
          const flangePx = Math.min(2.5, Math.max(1.0, depthPx * 0.14)) * ubPrintScale;
          const webPx = Math.min(1.85, Math.max(0.82, widthPx * 0.19)) * ubPrintScale;
          const path = buildUbSectionLocalPath(widthPx, depthPx, flangePx, webPx);
          return `<g transform="translate(${record.anchor.x.toFixed(2)} ${record.anchor.y.toFixed(2)}) rotate(${angleDeg.toFixed(3)})">
            <path d="${path}" fill="${style.fill}" stroke="${style.stroke}" stroke-width="0.9" opacity="0.96" />
          </g>`;
        }
        return `<circle cx="${record.anchor.x.toFixed(2)}" cy="${record.anchor.y.toFixed(2)}" r="7.0" fill="${style.fill}" stroke="${style.stroke}" stroke-width="1.05" />`;
      }).join('');

      const testMarkup = layoutRecords.map(record => {
        if (record.kind !== 'pile' || !record.testType) return '';
        if (record.testType === 'sonic') {
          return `<circle cx="${record.anchor.x.toFixed(2)}" cy="${record.anchor.y.toFixed(2)}" r="11.2" fill="none" stroke="#2D7FF9" stroke-width="2.1" opacity="0.96" />`;
        }
        if (record.testType === 'dynamic') {
          return `<rect x="${(record.anchor.x - 9.4).toFixed(2)}" y="${(record.anchor.y - 9.4).toFixed(2)}" width="18.8" height="18.8" rx="2.4" fill="none" stroke="#B784D7" stroke-width="2.1" opacity="0.96" />`;
        }
        return '';
      }).join('');

      const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
      const labelMarkup = layoutRecords.map(record => {
        const secondary = record.secondary;
        const isKingPost = record.kind === 'kingpost';
        if (isKingPost && record.screen) {
          const dx = record.screen.x2 - record.screen.x1;
          const dy = record.screen.y2 - record.screen.y1;
          const angleDeg = Math.atan2(dy, dx) * 180 / Math.PI;
          const labelX = clamp(record.screen.x2, plotBox.x + 6, plotBox.x + plotBox.width - 6);
          const labelY = clamp(record.screen.y2, plotBox.y + 6, plotBox.y + plotBox.height - 6);
          return `
            <g transform="translate(${labelX.toFixed(2)} ${labelY.toFixed(2)}) rotate(${angleDeg.toFixed(3)})">
              <text x="1.2" y="0" text-anchor="start" dominant-baseline="middle" font-size="7.2" font-weight="600" fill="#16202c" stroke="rgba(255,255,255,0.94)" stroke-width="0.9" paint-order="stroke">${escapeHtml(record.id)}</text>
            </g>
          `;
        }
        const textX = clamp(record.anchor.x + (record.dirX * (isKingPost ? 0.8 : 2.4)), plotBox.x + 14, plotBox.x + plotBox.width - 14);
        const topY = clamp(record.anchor.y - (isKingPost ? 12.8 : 8.0), plotBox.y + 10, plotBox.y + plotBox.height - 14);
        const lowerY = clamp(record.anchor.y + (isKingPost ? 22.2 : 10.2), plotBox.y + 18, plotBox.y + plotBox.height - 6);
        const idFontSize = isKingPost ? 7.2 : 8.6;
        const typeFontSize = isKingPost ? 6.0 : 6.7;
        const idStroke = isKingPost ? 0.9 : 1.2;
        const typeStroke = isKingPost ? 0.7 : 0.95;
        return `
          <text x="${textX.toFixed(2)}" y="${topY.toFixed(2)}" text-anchor="middle" font-size="${idFontSize}" font-weight="600" fill="#16202c" stroke="rgba(255,255,255,0.94)" stroke-width="${idStroke}" paint-order="stroke">${escapeHtml(record.id)}</text>
          ${secondary ? `<text x="${textX.toFixed(2)}" y="${lowerY.toFixed(2)}" text-anchor="middle" font-size="${typeFontSize}" font-weight="600" fill="#4b74bf" stroke="rgba(255,255,255,0.94)" stroke-width="${typeStroke}" paint-order="stroke">${escapeHtml(secondary)}</text>` : ''}
        `;
      }).join('');

      const svgMarkup = `
        <svg viewBox="0 0 ${svgWidth} ${svgHeight}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Project layout">
          <defs>
            <linearGradient id="layoutPanelFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#fbfdff" />
              <stop offset="100%" stop-color="#f4f7fb" />
            </linearGradient>
          </defs>
          <rect x="${plotBox.x}" y="${plotBox.y}" width="${plotBox.width}" height="${plotBox.height}" rx="20" fill="url(#layoutPanelFill)" stroke="rgba(19,28,39,0.08)" stroke-width="1.35" />
          ${hullPath ? `<path d="${hullPath}" fill="rgba(31,111,255,0.03)" stroke="rgba(31,111,255,0.28)" stroke-width="2" stroke-dasharray="8 8" />` : ''}
          ${shapeMarkup}
          ${testMarkup}
          ${labelMarkup}
        </svg>
      `;

      const completionLabel = summary.pileCount && !summary.kingPostCount
        ? 'Piles'
        : (summary.kingPostCount && !summary.pileCount ? 'KingPosts' : 'Elements');
      const progressLine = `${summary.completed}/${summary.total} ${completionLabel} • ${formatNumberOneDecimal(summary.progress)}% Complete`;
      const legendMarkup = legend.map(item => {
        if (item.symbol === 'ring') {
          return `
            <div class="sheet-legend-item">
              <span class="sheet-legend-swatch ring" style="--legend-color:${item.color};"></span>
              <span>${escapeHtml(item.label)}</span>
            </div>
          `;
        }
        if (item.symbol === 'square') {
          return `
            <div class="sheet-legend-item">
              <span class="sheet-legend-swatch square" style="--legend-color:${item.color};"></span>
              <span>${escapeHtml(item.label)}</span>
            </div>
          `;
        }
        return `
          <div class="sheet-legend-item">
            <span class="sheet-legend-dot" style="background:${item.color};"></span>
            <span>${escapeHtml(item.label)}</span>
          </div>
        `;
      }).join('');

      const apfcLogoUrl = new URL('assets/APFC_Logo.png', window.location.href).href;
      const binghattiLogoUrl = new URL('assets/binghatti_logo.jpg', window.location.href).href;

      const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Project Progress Layout</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root {
      --ink: #16202c;
      --muted: #73839a;
      --line: rgba(22, 32, 44, 0.10);
      --panel: #ffffff;
      --panel-soft: #f6f8fb;
      --shadow: 0 18px 44px rgba(8, 14, 22, 0.10);
      --green: #20cf7a;
      --amber: #ffb347;
      --grey: #cfd6e2;
    }
    * { box-sizing: border-box; }
    @page { size: A4 landscape; margin: 6mm; }
    html, body { margin: 0; padding: 0; background: #eef2f7; color: var(--ink); font-family: "Segoe UI", Arial, sans-serif; }
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .sheet {
      width: 100%;
      margin: 0 auto;
      height: 198mm;
      padding: 3mm 3mm 2mm;
      background: #fff;
      display: flex;
      flex-direction: column;
      gap: 1.25mm;
      overflow: hidden;
    }
    .sheet-header {
      display: flex;
      flex-direction: column;
      gap: 1px;
      padding: 0 1px 2px;
      flex: 0 0 auto;
      border-bottom: 1px solid rgba(18, 32, 51, 0.10);
    }
    .sheet-brandrow {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      width: 100%;
    }
    .sheet-head-main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 1px;
      min-width: 0;
      flex: 1 1 auto;
      padding: 0 18px;
    }
    .sheet-brandrow img {
      display: block;
      object-fit: contain;
      flex: 0 0 auto;
    }
    .sheet-brandrow .sheet-brand-apfc {
      height: 30px;
      width: auto;
    }
    .sheet-brandrow .sheet-brand-binghatti {
      height: 40px;
      width: auto;
      object-position: center;
      clip-path: inset(7px 0 7px 0);
    }
    .sheet-eyebrow {
      font-size: 9px;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #6f85a5;
      display: none;
    }
    .sheet-title {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin: 0;
      line-height: 1.08;
      color: #122033;
      text-wrap: balance;
    }
    .sheet-progressline {
      color: #6f82a0;
      font-size: 8.6px;
      font-weight: 700;
      letter-spacing: 0.025em;
    }
    .sheet-legend {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 3px 7px;
      border: 1px solid rgba(22,32,44,0.08);
      border-radius: 999px;
      background: rgba(255,255,255,0.94);
      box-shadow: 0 6px 18px rgba(8,14,22,0.06);
    }
    .sheet-legend-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-weight: 700;
      font-size: 8.5px;
      color: #42536b;
    }
    .sheet-legend-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      flex: 0 0 8px;
      box-shadow: 0 0 0 2px rgba(22,32,44,0.04);
    }
    .sheet-legend-swatch {
      width: 14px;
      height: 14px;
      position: relative;
      flex: 0 0 14px;
      display: inline-block;
    }
    .sheet-legend-swatch.ring::before {
      content: "";
      position: absolute;
      inset: 1px;
      border: 2px solid var(--legend-color);
      border-radius: 999px;
    }
    .sheet-legend-swatch.square::before {
      content: "";
      position: absolute;
      inset: 1px;
      border: 2px solid var(--legend-color);
      border-radius: 2px;
    }
    .sheet-stamp {
      color: #6d7f96;
      font-size: 9px;
      font-weight: 600;
      white-space: nowrap;
    }
    .sheet-body {
      flex: 1 1 auto;
      min-height: 0;
      display: flex;
    }
    .layout-card {
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 0;
      padding: 0;
    }
    .layout-card svg {
      display: block;
      width: 100%;
      height: 100%;
      flex: 1 1 auto;
    }
    .sheet-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 1px 1px 0;
      flex: 0 0 auto;
      border-top: 1px solid rgba(18, 32, 51, 0.08);
    }
    @media print {
      html, body { background: #ffffff; }
      .sheet { padding: 0; width: auto; }
    }
  </style>
</head>
<body onload="setTimeout(function(){ window.print(); }, 280)">
  <div class="sheet">
    <div class="sheet-header">
      <div class="sheet-brandrow">
        <img class="sheet-brand-apfc" src="${apfcLogoUrl}" alt="APFC logo" />
        <div class="sheet-head-main">
          <h1 class="sheet-title">${escapeHtml(normalizeText(selectedProject || DEFAULT_PROJECT))} - Project Progress Layout</h1>
          <div class="sheet-progressline">${escapeHtml(progressLine)}</div>
        </div>
        <img class="sheet-brand-binghatti" src="${binghattiLogoUrl}" alt="Binghatti logo" />
      </div>
    </div>

    <div class="sheet-body">
      <main class="layout-card">
        ${svgMarkup}
      </main>
    </div>
    <div class="sheet-footer">
      <div class="sheet-stamp">Generated ${escapeHtml(getPrintTimestampLabel())}</div>
      <div class="sheet-legend">${legendMarkup}</div>
    </div>
  </div>
</body>
</html>`;

      printWindow.document.open();
      printWindow.document.write(html);
      printWindow.document.close();
    }

    function bindMapFrameSync() {
      if (!els.projectMapFrame || els.projectMapFrame.dataset.syncBound === 'true') return;
      els.projectMapFrame.addEventListener('load', () => {
        broadcastAuthContext();
        setTimeout(() => triggerMapFocusAnimation(), 80);
      });
      els.projectMapFrame.dataset.syncBound = 'true';
    }

    function persistScopedSession() {
      if (!currentUser) return;
      storeAuthSession({
        ...currentUser,
        selectedProject,
        selectedPlot
      });
    }

    function syncProjectScopeFromData() {
      const projects = getCombinedProjectList();
      if (!projects.length) return;

      if (canSelectProjects()) {
        const selectableProjects = projects.filter(project => normalizeText(project).toLowerCase() !== 'all');
        if (selectableProjects.length) {
          const currentProjectIsValid = selectableProjects.includes(selectedProject);
          if (!currentProjectIsValid) {
            selectedProject = selectableProjects.includes(DEFAULT_PROJECT) ? DEFAULT_PROJECT : selectableProjects[0];
          }
          renderProjectOptions(selectableProjects);
        }
        persistScopedSession();
        return;
      }

      selectedProject = currentUser?.project || DEFAULT_PROJECT;
      persistScopedSession();
    }

    function applyUserSession(user) {
      currentUser = user;
      selectedProject = isAllProjectsValue(user?.project) ? DEFAULT_PROJECT : (user?.project || DEFAULT_PROJECT);
      selectedPlot = user?.plot || '';
      timelineState.pile = 'all';
      companyManpowerScopeMode = 'filtered';
      companyManpowerDesignationFilter = 'all';
      companyAnalyticsScopeMode = 'filtered';
      companyAnalyticsLayoutMode = 'overview';
      companyAnalyticsDesignationFilter = 'all';
      updateUserContextUi();
      if (currentUser) {
        persistScopedSession();
        setAuthLocked(false);
      } else {
        clearAuthSession();
      }
      broadcastAuthContext();
    }

    function formatDateKeyInTimezone(value, timeZone = 'Asia/Dubai') {
      const d = value instanceof Date ? value : new Date(value);
      if (!(d instanceof Date) || Number.isNaN(d.getTime())) return '';
      const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).formatToParts(d);
      const year = parts.find(part => part.type === 'year')?.value;
      const month = parts.find(part => part.type === 'month')?.value;
      const day = parts.find(part => part.type === 'day')?.value;
      return year && month && day ? `${year}-${month}-${day}` : '';
    }

    function getProductionDateKey(row) {
      const concreteEndRaw = row?.asbuilt_concreteEnd || row?.asbuilt_concreteend || row?.asbuilt_ConcreteEnd;
      const concreteEnd = concreteEndRaw ? new Date(concreteEndRaw) : null;

      if (concreteEnd instanceof Date && !Number.isNaN(concreteEnd.getTime())) {
        const d = new Date(concreteEnd);
        const hour = d.getUTCHours();
        const minute = d.getUTCMinutes();
        const totalMinutes = hour * 60 + minute;

        // Production/reporting date concept for production/timeline pages:
        // anything completed before 07:00 belongs to the previous production date.
        if (totalMinutes < (7 * 60)) {
          d.setUTCDate(d.getUTCDate() - 1);
        }
        return d.toISOString().slice(0, 10);
      }

      return normalizeDateString(row?.castingDate);
    }

    function getOverviewDateKey(row) {
      const concreteEndRaw = row?.asbuilt_concreteEnd || row?.asbuilt_concreteend || row?.asbuilt_ConcreteEnd;
      const concreteEnd = concreteEndRaw ? new Date(concreteEndRaw) : null;

      if (concreteEnd instanceof Date && !Number.isNaN(concreteEnd.getTime())) {
        const d = new Date(concreteEnd);

        if (overviewDateMode === 'calendar') {
          return formatDateKeyInTimezone(d);
        }

        const totalMinutes = d.getUTCHours() * 60 + d.getUTCMinutes();
        if (totalMinutes < (7 * 60)) {
          d.setUTCDate(d.getUTCDate() - 1);
        }
        return d.toISOString().slice(0, 10);
      }

      return normalizeDateString(row?.castingDate);
    }


    function formatDateLabel(value) {
      if (!value) return 'N/A';
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return 'N/A';
      return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit', timeZone: 'UTC' });
    }

    function formatDateFullLabel(value) {
      if (!value) return 'N/A';
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return 'N/A';
      return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });
    }

    function formatShortDateLabel(value) {
      if (!value) return 'N/A';
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return 'N/A';
      return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', timeZone: 'UTC' });
    }

    function formatDayNumberLabel(value) {
      if (!value) return 'N/A';
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return 'N/A';
      return String(d.getUTCDate());
    }

    function formatMonthShortLabel(value) {
      if (!value) return 'N/A';
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return 'N/A';
      return d.toLocaleDateString('en-GB', { month: 'short', timeZone: 'UTC' });
    }

    function todayKey() {
      const now = new Date();
      return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    }

    function previousDayKey() {
      const d = new Date(`${todayKey()}T00:00:00Z`);
      d.setUTCDate(d.getUTCDate() - 1);
      return d.toISOString().slice(0, 10);
    }

    function isWorkingDay(dateKey) {
      const d = new Date(`${dateKey}T00:00:00Z`);
      const day = d.getUTCDay();
      return day >= 1 && day <= 6;
    }

    function isExecutedRow(row) {
      return row.isExecuted === true;
    }

    function getExecutedRows(rows) {
      return rows.filter(isExecutedRow);
    }

    function shiftKingPostDateTime(value, hours = 4) {
      const raw = normalizeText(value);
      if (!raw) return '';

      const naiveMatch = raw.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/);
      if (naiveMatch) {
        const [, year, month, day, hour, minute, second = '00'] = naiveMatch;
        const shifted = new Date(Date.UTC(
          Number(year),
          Number(month) - 1,
          Number(day),
          Number(hour),
          Number(minute),
          Number(second)
        ));
        shifted.setUTCHours(shifted.getUTCHours() + hours);
        return [
          shifted.getUTCFullYear(),
          String(shifted.getUTCMonth() + 1).padStart(2, '0'),
          String(shifted.getUTCDate()).padStart(2, '0')
        ].join('-') + 'T' + [
          String(shifted.getUTCHours()).padStart(2, '0'),
          String(shifted.getUTCMinutes()).padStart(2, '0'),
          String(shifted.getUTCSeconds()).padStart(2, '0')
        ].join(':');
      }

      const parsed = new Date(raw);
      if (Number.isNaN(parsed.getTime())) return raw;
      parsed.setHours(parsed.getHours() + hours);
      return parsed.toISOString();
    }

    function extractKingPostList(data) {
      const rows = Array.isArray(data)
        ? data
        : (Array.isArray(data?.body) ? data.body : []);
      return rows
        .filter(row => row && typeof row === 'object')
        .map(row => ({
          project: normalizeText(row.project || row.Project),
          plot: normalizeText(row.plot || row.Plot),
          elementType: normalizeText(row.elementType || row.ElementType || 'KingPost'),
          id: normalizeText(row.pileId || row.PileID),
          profile: normalizeText(row.profile || row.Profile),
          design_x: row.design_x ?? row.design_X ?? null,
          design_y: row.design_y ?? row.design_Y ?? null,
          design_back_x: row.design_back_x ?? row.design_back_X ?? row.design_Back_X ?? row.design_BackX ?? row.designBackX ?? null,
          design_back_y: row.design_back_y ?? row.design_back_Y ?? row.design_Back_Y ?? row.design_BackY ?? row.designBackY ?? null,
          operationalStatus: normalizeText(row.operationalStatus || row.OperationalStatus),
          isInstalled: row.isInstalled ?? row.IsInstalled ?? null,
          beamInstallation: shiftKingPostDateTime(row.beamInstallation || row.BeamInstallation),
          drillingStart: shiftKingPostDateTime(row.asbuilt_DrillingStart || row.asbuilt_drillingStart),
          drillingEnd: shiftKingPostDateTime(row.asbuilt_DrillingEnd || row.asbuilt_drillingEnd),
          drillingDuration: Number(row.asbuilt_DurationDrilling ?? row.asbuilt_durationdrilling ?? 0) || 0,
          rig1: normalizeText(row.asbuilt_Rig1 || row.asbuilt_rig1),
          rig1Depth: Number(row.asbuilt_Rig1Depth ?? row.asbuilt_rig1depth ?? 0) || 0,
          designDepthDrilling: Number(row.design_DepthDrilling ?? row.design_depthdrilling ?? 0) || 0,
          asbuiltDepth: Number(row.asbuilt_depth ?? row.asbuilt_DepthDrillingFromPlatform ?? 0) || 0,
          section: normalizeText(row.section || row.Section),
          building: normalizeText(row.building || row.Building)
        }));
    }

    function getProjectList(rows) {
      const projects = Array.from(new Set(rows.map(r => normalizeText(r.project)).filter(Boolean))).sort((a, b) => a.localeCompare(b));
      if (projects.includes(DEFAULT_PROJECT)) {
        return [DEFAULT_PROJECT, ...projects.filter(project => project !== DEFAULT_PROJECT)];
      }
      return projects;
    }

    function getCombinedProjectList() {
      const pileProjects = rawRows.map(r => normalizeText(r.project || r.Project));
      const kingPostProjects = kingPostRows.map(r => normalizeText(r.project));
      const projects = Array.from(new Set([...pileProjects, ...kingPostProjects].filter(Boolean))).sort((a, b) => a.localeCompare(b));
      if (projects.includes(DEFAULT_PROJECT)) {
        return [DEFAULT_PROJECT, ...projects.filter(project => project !== DEFAULT_PROJECT)];
      }
      return projects;
    }

    function getRowsForProject(project) {
      const rawProject = normalizeText(project || selectedProject || DEFAULT_PROJECT);
      const targetProject = isAllProjectsValue(rawProject) ? '' : rawProject;
      return rawRows.filter(r => {
        const projectMatch = !targetProject || normalizeText(r.project) === targetProject;
        const plotMatch = isAllPlotsValue(selectedPlot) || normalizeText(r.plot) === normalizeText(selectedPlot);
        return projectMatch && plotMatch;
      });
    }

    function getKingPostRowsForProject(project) {
      const rawProject = normalizeText(project || selectedProject || DEFAULT_PROJECT);
      const targetProject = isAllProjectsValue(rawProject) ? '' : rawProject;
      return kingPostRows.filter(r => {
        const projectMatch = !targetProject || normalizeText(r.project) === targetProject;
        const plotMatch = isAllPlotsValue(selectedPlot) || normalizeText(r.plot) === normalizeText(selectedPlot);
        return projectMatch && plotMatch;
      });
    }

    function getPortfolioPileRows(project = 'All Projects') {
      const rawProject = normalizeText(project || 'All Projects');
      const targetProject = isAllProjectsValue(rawProject) ? '' : rawProject;
      return rawRows.filter(row => !targetProject || normalizeText(row.project) === targetProject);
    }

    function getPortfolioKingPostRows(project = 'All Projects') {
      const rawProject = normalizeText(project || 'All Projects');
      const targetProject = isAllProjectsValue(rawProject) ? '' : rawProject;
      return kingPostRows.filter(row => !targetProject || normalizeText(row.project) === targetProject);
    }

    function hasPileActivity(project) {
      return getRowsForProject(project).length > 0;
    }

    function hasKingPostActivity(project) {
      return getKingPostRowsForProject(project).length > 0;
    }

    function getAvailableOverviewActivities(project = selectedProject) {
      const activities = [];
      if (hasPileActivity(project)) activities.push('piles');
      if (hasKingPostActivity(project)) activities.push('kingposts');
      return activities;
    }

    function syncOverviewActivityMode(project = selectedProject) {
      const available = getAvailableOverviewActivities(project);
      if (!available.length) {
        overviewActivityMode = 'piles';
      } else if (!available.includes(overviewActivityMode)) {
        overviewActivityMode = available[0];
      }

      if (els.overviewActivityToggle) {
        const showToggle = available.length > 1;
        els.overviewActivityToggle.hidden = !showToggle;
        els.overviewActivityToggle.style.display = showToggle ? '' : 'none';
      }

      if (els.overviewActivityButtons?.length) {
        els.overviewActivityButtons.forEach(btn => {
          const mode = btn.dataset.activity;
          btn.classList.toggle('active', mode === overviewActivityMode);
          btn.hidden = !available.includes(mode);
          btn.style.display = available.includes(mode) ? '' : 'none';
        });
      }
    }

    function getOverviewMetricConfig() {
      if (overviewActivityMode === 'kingposts') {
        return [
          { key: 'predrilled', label: 'Pre-Drilled', unit: 'kp' },
          { key: 'installed', label: 'Installed', unit: 'kp' },
          { key: 'lm', label: 'Lm', unit: 'Lm' }
        ];
      }
      return [
        { key: 'piles', label: 'Piles', unit: 'piles' },
        { key: 'lm', label: 'Lm', unit: 'Lm' },
        { key: 'm3', label: 'm3', unit: 'm3' }
      ];
    }

    function syncOverviewMetricButtons() {
      const config = getOverviewMetricConfig();
      const validMetrics = config.map(item => item.key);
      if (!validMetrics.includes(chartMetric)) {
        chartMetric = config[0]?.key || 'piles';
      }
      els.metricToggleButtons.forEach((btn, idx) => {
        const item = config[idx];
        if (!item) {
          btn.hidden = true;
          btn.style.display = 'none';
          return;
        }
        btn.hidden = false;
        btn.style.display = '';
        btn.dataset.metric = item.key;
        btn.textContent = item.label;
        btn.classList.toggle('active', item.key === chartMetric);
      });
    }

    function isKingPostInstalled(row) {
      const installedValue = normalizeText(row?.isInstalled).toLowerCase();
      return installedValue === 'true' || installedValue === 'yes' || installedValue === '1' || !!normalizeText(row?.beamInstallation);
    }

    function isKingPostPreDrilled(row) {
      return normalizeText(row?.operationalStatus).toLowerCase() === 'readytoinstall';
    }

    function hasExplicitTimezoneSuffix(value) {
      return /(?:Z|[+\-]\d{2}:\d{2})$/i.test(normalizeText(value));
    }

    function formatLocalDateKey(date) {
      if (!(date instanceof Date) || Number.isNaN(date.getTime())) return '';
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }

    function getKingPostMetricDateKey(row, metric) {
      const raw = metric === 'installed'
        ? normalizeText(row?.beamInstallation)
        : (normalizeText(row?.drillingEnd) || normalizeText(row?.drillingStart));
      if (!raw) return '';
      const d = new Date(raw);
      if (Number.isNaN(d.getTime())) return '';
      const hasExplicitTimezone = hasExplicitTimezoneSuffix(raw);
      if (overviewDateMode === 'calendar') {
        return hasExplicitTimezone ? formatDateKeyInTimezone(d) : formatLocalDateKey(d);
      }
      const totalMinutes = hasExplicitTimezone
        ? (d.getUTCHours() * 60 + d.getUTCMinutes())
        : (d.getHours() * 60 + d.getMinutes());
      if (totalMinutes < (7 * 60)) {
        if (hasExplicitTimezone) {
          d.setUTCDate(d.getUTCDate() - 1);
        } else {
          d.setDate(d.getDate() - 1);
        }
      }
      return hasExplicitTimezone ? d.toISOString().slice(0, 10) : formatLocalDateKey(d);
    }

    function isKingPostMetricRow(row, metric) {
      if (metric === 'installed') return isKingPostInstalled(row);
      if (metric === 'predrilled') return isKingPostPreDrilled(row);
      if (metric === 'lm') return !!getKingPostMetricDateKey(row, 'predrilled');
      return false;
    }

    function metricLabel(metric) {
      const config = getOverviewMetricConfig().find(item => item.key === metric);
      if (config?.label) return config.label;
      return metric === 'piles' ? 'Piles' : metric === 'lm' ? 'Lm' : 'm3';
    }

    function metricUnit(metric) {
      const config = getOverviewMetricConfig().find(item => item.key === metric);
      if (config?.unit) return config.unit;
      return metric === 'piles' ? 'piles' : metric === 'lm' ? 'Lm' : 'mÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³';
    }

    function metricValueForRow(row, metric) {
      if (metric === 'predrilled' || metric === 'installed') return 1;
      if (metric === 'lm') {
        const n = Number(row.asbuilt_depth ?? row.asbuiltDepth ?? row.designDepthDrilling ?? row.design_depthdrilling);
        if (Number.isFinite(n)) return n;
      }
      if (metric === 'piles') return 1;
      if (metric === 'lm') {
        const n = Number(row.asbuilt_depth);
        return Number.isFinite(n) ? n : 0;
      }
      const n = Number(row.asbuilt_concreteQty);
      return Number.isFinite(n) ? n : 0;
    }

    function startOfWeek(dateKey) {
      const d = new Date(dateKey + 'T00:00:00Z');
      const day = d.getUTCDay() || 7;
      d.setUTCDate(d.getUTCDate() - day + 1);
      return d.toISOString().slice(0, 10);
    }

    function startOfMonth(dateKey) {
      const d = new Date(dateKey + 'T00:00:00Z');
      d.setUTCDate(1);
      return d.toISOString().slice(0, 10);
    }

    function periodKey(dateKey, granularity) {
      if (granularity === 'week') return startOfWeek(dateKey);
      if (granularity === 'month') return startOfMonth(dateKey);
      return dateKey;
    }

    function incrementPeriod(dateObj, granularity) {
      const d = new Date(dateObj);
      if (granularity === 'week') d.setUTCDate(d.getUTCDate() + 7);
      else if (granularity === 'month') d.setUTCMonth(d.getUTCMonth() + 1, 1);
      else d.setUTCDate(d.getUTCDate() + 1);
      return d;
    }

    function getActiveRigCount(rows) {
      return new Set(getExecutedRows(rows).map(r => normalizeText(r.machine)).filter(Boolean)).size;
    }

    function getOverviewRigOverride(project) {
      const projectKey = normalizeText(project).toLowerCase();
      if (projectKey === 'titania') {
        return 2;
      }
      if (projectKey === 'vintage') {
        return 1;
      }
      return null;
    }

    function getPlannedRigCountForDate(rows, dateKey, project = selectedProject) {
      const projectKey = normalizeText(project).toLowerCase();
      if (projectKey === 'titania') {
        return dateKey >= '2026-04-03' ? 2 : 1;
      }
      if (projectKey === 'vintage') {
        return 1;
      }
      const activeRigs = getActiveRigCount(rows);
      return activeRigs || 1;
    }

    function getPeriodEndKey(periodStartKey, granularity) {
      const next = incrementPeriod(new Date(periodStartKey + 'T00:00:00Z'), granularity);
      next.setUTCDate(next.getUTCDate() - 1);
      const previousDay = previousDayKey();
      return next.toISOString().slice(0, 10) > previousDay ? previousDay : next.toISOString().slice(0, 10);
    }

    function buildPlannedCurve(rows, data, project = selectedProject) {
      if (!data.length) return [];
      const executedDates = getExecutedRows(rows).map(r => getOverviewDateKey(r)).filter(Boolean).sort();
      if (!executedDates.length) return [];

      const firstDate = executedDates[0];
      let cumulative = 0;

      return data.map(item => {
        const periodEnd = getPeriodEndKey(item.date, chartGranularity);
        let cursor = new Date(firstDate + 'T00:00:00Z');
        let planned = 0;
        while (cursor.toISOString().slice(0, 10) <= periodEnd) {
          const key = cursor.toISOString().slice(0, 10);
          if (isWorkingDay(key)) {
            planned += getPlannedRigCountForDate(rows, key, project) * 3;
          }
          cursor.setUTCDate(cursor.getUTCDate() + 1);
        }
        cumulative = planned;
        return { date: item.date, value: cumulative };
      });
    }

    function formatPeriodLabel(dateKey, granularity = chartGranularity) {
      if (granularity === 'day') return formatDateLabel(dateKey).replace(/\s/g, '');
      if (granularity === 'week') return getCW(dateKey).replace(' ', '');
      return new Date(dateKey + 'T00:00:00Z').toLocaleDateString('en-GB', { month: 'short', year: '2-digit', timeZone: 'UTC' }).replace(/\s/g, '');
    }

    function periodTitle(dateKey, granularity = chartGranularity) {
      if (granularity === 'day') return formatDateLabel(dateKey);
      if (chartGranularity === 'week') return getCW(dateKey) + ' ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ' + formatDateLabel(dateKey);
      return new Date(dateKey + 'T00:00:00Z').toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
    }

    function aggregateDailyMetrics(rows, metric, granularity = chartGranularity) {
      const map = new Map();
      const executedRows = getExecutedRows(rows);
      const dates = executedRows.map(row => getOverviewDateKey(row)).filter(Boolean).sort();
      if (!dates.length) return [];

      const firstKey = periodKey(dates[0], granularity);
      const rangeEndKey = overviewDateMode === 'calendar' ? todayKey() : previousDayKey();
      const lastKey = periodKey(rangeEndKey, granularity);
      let cursor = new Date(firstKey + 'T00:00:00Z');
      const end = new Date(lastKey + 'T00:00:00Z');

      while (cursor <= end) {
        const key = cursor.toISOString().slice(0, 10);
        map.set(key, { date: key, value: 0, executedCount: 0, items: [] });
        cursor = incrementPeriod(cursor, granularity);
      }

      executedRows.forEach(row => {
        const date = getOverviewDateKey(row);
        if (!date) return;
        const key = periodKey(date, granularity);
        if (!map.has(key)) return;
        const item = map.get(key);
        item.value += metricValueForRow(row, metric);
        item.executedCount += 1;
        item.items.push({ id: normalizeText(row.id), machine: normalizeText(row.machine) || '-', date: date });
      });

      return Array.from(map.values()).sort((a, b) => a.date.localeCompare(b.date));
    }

    function aggregateKingPostMetrics(rows, metric, granularity = chartGranularity) {
      const map = new Map();
      const metricRows = rows.filter(row => isKingPostMetricRow(row, metric));
      const dates = metricRows.map(row => getKingPostMetricDateKey(row, metric)).filter(Boolean).sort();
      if (!dates.length) return [];

      const firstKey = periodKey(dates[0], granularity);
      const rangeEndKey = overviewDateMode === 'calendar' ? todayKey() : previousDayKey();
      const lastKey = periodKey(rangeEndKey, granularity);
      let cursor = new Date(firstKey + 'T00:00:00Z');
      const end = new Date(lastKey + 'T00:00:00Z');

      while (cursor <= end) {
        const key = cursor.toISOString().slice(0, 10);
        map.set(key, { date: key, value: 0, executedCount: 0, items: [] });
        cursor = incrementPeriod(cursor, granularity);
      }

      metricRows.forEach(row => {
        const date = getKingPostMetricDateKey(row, metric);
        if (!date) return;
        const key = periodKey(date, granularity);
        if (!map.has(key)) return;
        const item = map.get(key);
        item.value += metricValueForRow(row, metric);
        item.executedCount += 1;
        item.items.push({
          id: normalizeText(row.id) || '-',
          machine: normalizeText(row.rig1) || '-',
          date,
          profile: normalizeText(row.profile) || '-',
          status: isKingPostInstalled(row) ? 'Installed' : (isKingPostPreDrilled(row) ? 'Pre-Drilled' : 'Pending')
        });
      });

      return Array.from(map.values()).sort((a, b) => a.date.localeCompare(b.date));
    }

    function lastCalendarDaysKingPostMetric(rows, metric, calendarDayCount = 7) {
      const metricRows = rows.filter(row => isKingPostMetricRow(row, metric));
      const allDates = Array.from(new Set(metricRows.map(row => getKingPostMetricDateKey(row, metric)).filter(Boolean))).sort();
      if (!allDates.length) return 0;
      const latestDate = allDates[allDates.length - 1];
      const endDate = new Date(`${latestDate}T00:00:00Z`);
      const startDate = new Date(endDate);
      startDate.setUTCDate(endDate.getUTCDate() - (calendarDayCount - 1));
      const startKey = startDate.toISOString().slice(0, 10);
      const rowsInWindow = metricRows.filter(row => {
        const dateKey = getKingPostMetricDateKey(row, metric);
        return dateKey && dateKey >= startKey && dateKey <= latestDate;
      });
      const divisor = calendarDayCount || 1;
      if (metric === 'lm') {
        const total = rowsInWindow.reduce((sum, row) => sum + metricValueForRow(row, 'lm'), 0);
        return total / divisor;
      }
      return rowsInWindow.length / divisor;
    }

    function computeKingPostStats(rows) {
      const total = rows.length;
      const installedRows = rows.filter(isKingPostInstalled);
      const predrilledRows = rows.filter(isKingPostPreDrilled);
      const completed = installedRows.length;
      const predrilled = predrilledRows.length;
      const remaining = Math.max(0, total - completed);
      const progress = total ? (completed / total) * 100 : 0;
      const activeRigs = new Set(rows.map(r => normalizeText(r.rig1)).filter(Boolean)).size;
      const installedDates = Array.from(new Set(installedRows.map(r => getKingPostMetricDateKey(r, 'installed')).filter(Boolean))).sort();
      const predrilledDates = Array.from(new Set(predrilledRows.map(r => getKingPostMetricDateKey(r, 'predrilled')).filter(Boolean))).sort();
      const avgInstalledRaw = installedDates.length > 0 && installedDates.length < 6
        ? (completed / installedDates.length)
        : lastCalendarDaysKingPostMetric(rows, 'installed', 7) * (7 / 6);
      const avgPredrilledRaw = predrilledDates.length > 0 && predrilledDates.length < 6
        ? (predrilled / predrilledDates.length)
        : lastCalendarDaysKingPostMetric(rows, 'predrilled', 7) * (7 / 6);
      const avgLmRaw = predrilledDates.length > 0 && predrilledDates.length < 6
        ? (predrilledRows.reduce((sum, row) => sum + metricValueForRow(row, 'lm'), 0) / predrilledDates.length)
        : lastCalendarDaysKingPostMetric(rows, 'lm', 7) * (7 / 6);
      const avgInstalled = avgInstalledRaw > 0 ? Math.round(avgInstalledRaw * 10) / 10 : 0;
      const avgPredrilled = avgPredrilledRaw > 0 ? Math.round(avgPredrilledRaw * 10) / 10 : 0;
      const avgLm = avgLmRaw > 0 ? Math.round(avgLmRaw * 10) / 10 : 0;
      const yesterdayInstalled = aggregateKingPostMetrics(rows, 'installed').find(x => x.date === previousDayKey())?.executedCount || 0;
      const yesterdayPredrilled = aggregateKingPostMetrics(rows, 'predrilled').find(x => x.date === previousDayKey())?.executedCount || 0;
      const yesterdayKpLm = aggregateKingPostMetrics(rows, 'lm').find(x => x.date === previousDayKey())?.value || 0;
      let etaDate = '';
      let etaMonths = null;
      const etaRate = avgInstalledRaw || avgPredrilledRaw;
      if (remaining > 0 && etaRate > 0) {
        const workingDaysNeeded = Math.ceil(remaining / etaRate);
        etaDate = addWorkingDays(todayKey(), workingDaysNeeded);
        etaMonths = monthsBetween(todayKey(), etaDate);
      }
      return { total, completed, predrilled, remaining, activeRigs, avgInstalled, avgPredrilled, avgLm, progress, yesterdayInstalled, yesterdayPredrilled, yesterdayKpLm, etaDate, etaMonths };
    }

    function lastCalendarDaysMetric(rows, metric, calendarDayCount = 7) {
      const executedRows = getExecutedRows(rows).filter(r => getOverviewDateKey(r));
      if (!executedRows.length) return 0;

      const allDates = Array.from(new Set(
        executedRows
        .map(r => getOverviewDateKey(r))
        .filter(Boolean)
      )).sort();

      const latestDate = allDates[allDates.length - 1];

      if (!latestDate) return 0;

      const endDate = new Date(`${latestDate}T00:00:00Z`);
      const startDate = new Date(endDate);
      startDate.setUTCDate(endDate.getUTCDate() - (calendarDayCount - 1));
      const startKey = startDate.toISOString().slice(0, 10);
      const selectedDates = [];
      const cursor = new Date(startDate);
      while (cursor <= endDate) {
        selectedDates.push(cursor.toISOString().slice(0, 10));
        cursor.setUTCDate(cursor.getUTCDate() + 1);
      }
      const endKey = latestDate;

      const rowsInWindow = executedRows.filter(row => {
        const dateKey = getOverviewDateKey(row);
        return dateKey && dateKey >= startKey && dateKey <= endKey;
      });

      if (metric === 'piles') {
        return rowsInWindow.length / selectedDates.length;
      } else if (metric === 'lm') {
        const total = rowsInWindow.reduce((sum, row) => sum + (Number(row.asbuilt_depth) || 0), 0);
        return total / selectedDates.length;
      } else if (metric === 'm3') {
        const total = rowsInWindow.reduce((sum, row) => sum + (Number(row.asbuilt_concreteQty) || 0), 0);
        return total / selectedDates.length;
      }

      return 0;
    }

    function addWorkingDays(dateKey, workingDays) {
      const d = new Date(`${dateKey}T00:00:00Z`);
      let added = 0;
      while (added < workingDays) {
        d.setUTCDate(d.getUTCDate() + 1);
        const key = d.toISOString().slice(0, 10);
        if (isWorkingDay(key)) added += 1;
      }
      return d.toISOString().slice(0, 10);
    }

    function monthsBetween(dateFrom, dateTo) {
      const a = new Date(`${dateFrom}T00:00:00Z`);
      const b = new Date(`${dateTo}T00:00:00Z`);
      return Math.max(0, (b - a) / 86400000) / 30.44;
    }

    function computeStats(rows, project = selectedProject) {
      const total = rows.length;
      const executedRows = getExecutedRows(rows);
      const completed = executedRows.length;
      const remaining = Math.max(0, total - completed);
      const progress = total ? (completed / total) * 100 : 0;
      const projectKey = normalizeText(project).toLowerCase();

      const executedDates = Array.from(new Set(
        executedRows
          .map(r => getOverviewDateKey(r))
          .filter(Boolean)
      )).sort();
      const workedDaysCount = executedDates.length;

      let avgPilesRaw = 0;
      let avgLmRaw = 0;
      if (workedDaysCount > 0 && workedDaysCount < 6) {
        const totalLmFromStart = executedRows.reduce((sum, row) => sum + (Number(row.asbuilt_depth) || 0), 0);
        avgPilesRaw = completed / workedDaysCount;
        avgLmRaw = totalLmFromStart / workedDaysCount;
      } else {
        avgPilesRaw = lastCalendarDaysMetric(rows, 'piles', 7) * (7 / 6);
        avgLmRaw = lastCalendarDaysMetric(rows, 'lm', 7) * (7 / 6);
      }
      const avgPiles = avgPilesRaw > 0 ? Math.round(avgPilesRaw * 10) / 10 : 0;
      const avgLm = avgLmRaw > 0 ? Math.round(avgLmRaw * 10) / 10 : 0;

      const yesterdayExecuted = aggregateDailyMetrics(rows, 'piles').find(x => x.date === previousDayKey())?.executedCount || 0;
      const yesterdayLm = aggregateDailyMetrics(rows, 'lm').find(x => x.date === previousDayKey())?.value || 0;
      const latestCasting = executedRows.map(r => normalizeDateString(r.castingDate)).filter(Boolean).sort().pop() || '';
      let activeRigs = getOverviewEquipmentRigCount(project);
      if (!activeRigs) {
        activeRigs = new Set(executedRows.map(r => normalizeText(r.machine)).filter(Boolean)).size;
      }
      let etaDate = '';
      let etaMonths = null;
      if (remaining > 0 && avgPilesRaw > 0) {
        const workingDaysNeeded = Math.ceil(remaining / avgPilesRaw);
        etaDate = addWorkingDays(todayKey(), workingDaysNeeded);
        etaMonths = monthsBetween(todayKey(), etaDate);
      }
      return { total, completed, remaining, activeRigs, avgPiles, avgLm, progress, yesterdayExecuted, yesterdayLm, latestCasting, etaDate, etaMonths };
    }

    function getCW(dateKey) {
      const date = new Date(`${dateKey}T00:00:00Z`);
      const tmp = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
      const dayNum = tmp.getUTCDay() || 7;
      tmp.setUTCDate(tmp.getUTCDate() + 4 - dayNum);
      const yearStart = new Date(Date.UTC(tmp.getUTCFullYear(), 0, 1));
      const weekNo = Math.ceil((((tmp - yearStart) / 86400000) + 1) / 7);
      return `CW ${String(weekNo).padStart(2, '0')}`;
    }

    function renderExecutionMatrix(rows) {
      if (overviewActivityMode === 'kingposts') {
        const items = rows
          .map(row => {
            const installedDate = getKingPostMetricDateKey(row, 'installed');
            const predrilledDate = getKingPostMetricDateKey(row, 'predrilled');
            const status = isKingPostInstalled(row) ? 'Installed' : (isKingPostPreDrilled(row) ? 'Pre-Drilled' : 'Pending');
            const dateKey = installedDate || predrilledDate;
            return {
              id: normalizeText(row.id) || '-',
              depth: metricValueForRow(row, 'lm'),
              status,
              date: dateKey
            };
          })
          .filter(item => item.date)
          .sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id, undefined, { numeric: true }));

        if (!items.length) {
          els.matrixBody.innerHTML = '<tr><td colspan="4" style="padding:14px;color:var(--muted);">No kingpost activity available.</td></tr>';
          return;
        }

        let html = '';
        items.forEach(item => {
          html += `<tr><td>${formatDateFullLabel(item.date)}</td><td class="id-cell">${item.id}</td><td class="num">${item.depth.toFixed(2)}</td><td>${item.status}</td></tr>`;
        });
        els.matrixBody.innerHTML = html;
        return;
      }

      const executed = getExecutedRows(rows)
        .filter(row => getOverviewDateKey(row))
        .sort((a, b) =>
          getOverviewDateKey(b).localeCompare(getOverviewDateKey(a)) ||
          normalizeText(a.id).localeCompare(normalizeText(b.id), undefined, { numeric: true })
        );

      if (!executed.length) {
        els.matrixBody.innerHTML = '<tr><td colspan="4" style="padding:14px;color:var(--muted);">No executed piles available.</td></tr>';
        return;
      }

      const groups = new Map();
      executed.forEach(row => {
        const dateKey = getOverviewDateKey(row);
        const cw = getCW(dateKey);
        if (!groups.has(cw)) groups.set(cw, { rows: [], sumLm: 0, sumM3: 0, count: 0, latestDate: dateKey });
        const group = groups.get(cw);
        const lm = Number(row.asbuilt_depth) || 0;
        const m3 = Number(row.asbuilt_concreteQty) || 0;
        group.rows.push({ id: normalizeText(row.id) || '-', date: dateKey, lm, m3 });
        group.sumLm += lm;
        group.sumM3 += m3;
        group.count += 1;
        if (dateKey > group.latestDate) group.latestDate = dateKey;
      });

      const sortedGroups = Array.from(groups.entries()).sort((a, b) => {
        const aNum = parseInt(String(a[0]).replace(/\D/g, ''), 10) || 0;
        const bNum = parseInt(String(b[0]).replace(/\D/g, ''), 10) || 0;
        if (bNum !== aNum) return bNum - aNum;
        return (b[1].latestDate || '').localeCompare(a[1].latestDate || '');
      });

      let html = '';
      sortedGroups.forEach(([cw, group]) => {
        group.rows.sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id, undefined, { numeric: true }));
        html += `<tr class="cw-row"><td>${cw}</td><td class="id-cell">${group.count}</td><td class="num">${group.sumLm.toFixed(2)}</td><td class="num">${group.sumM3.toFixed(2)}</td></tr>`;
        group.rows.forEach(item => {
          html += `<tr><td>${formatDateFullLabel(item.date)}</td><td class="id-cell">${item.id}</td><td class="num">${item.lm.toFixed(2)}</td><td class="num">${item.m3.toFixed(2)}</td></tr>`;
        });
      });

      els.matrixBody.innerHTML = html;
    }

    function renderProjectOptions(projects) {
      if (!els.projectSelector) return;
      els.projectSelector.innerHTML = projects.map(project => `<option value="${project}" ${project === selectedProject ? 'selected' : ''}>${project}</option>`).join('');
    }

    function getRecentPileLmTotal(project = 'All Projects', calendarDayCount = 7) {
      const rows = getPortfolioPileRows(project);
      const executedRows = getExecutedRows(rows).filter(r => getOverviewDateKey(r));
      if (!executedRows.length) return 0;
      const allDates = Array.from(new Set(executedRows.map(r => getOverviewDateKey(r)).filter(Boolean))).sort();
      const latestDate = allDates[allDates.length - 1];
      if (!latestDate) return 0;
      const endDate = new Date(`${latestDate}T00:00:00Z`);
      const startDate = new Date(endDate);
      startDate.setUTCDate(endDate.getUTCDate() - (calendarDayCount - 1));
      const startKey = startDate.toISOString().slice(0, 10);
      return executedRows
        .filter(row => {
          const dateKey = getOverviewDateKey(row);
          return dateKey && dateKey >= startKey && dateKey <= latestDate;
        })
        .reduce((sum, row) => sum + (Number(row.asbuilt_depth) || Number(row.design_depth) || 0), 0);
    }

    function getExecutiveLatestManpowerSummary(project = 'All Projects') {
      const rows = getPortfolioManpowerRows(project);
      const latest = rows[0] || null;
      if (!latest) {
        return { total: 0, leadership: 0, operators: 0, support: 0, date: '' };
      }
      const leadership = (latest.pm || 0) + (latest.se || 0) + (latest.foreman || 0);
      const operators = (latest.op || 0) + (latest.vb || 0) + (latest.rig || 0);
      const support = (latest.we || 0) + (latest.me || 0) + (latest.hl || 0);
      return { total: latest.total || 0, leadership, operators, support, date: latest.date || '' };
    }

    function getExecutiveEquipmentSummary(project = 'All Projects') {
      const latestRows = getPortfolioEquipmentDateRows(project);
      const latest = latestRows[latestRows.length - 1] || null;
      const piles = getPortfolioPileRows(project);
      const stats = computeStats(piles, project);
      const lm7d = getRecentPileLmTotal(project, 7);
      const targetProjectToken = isAllProjectsValue(project || 'All Projects') ? '' : getCompanyProjectToken(project);
      const registryRigItems = equipmentRegistryRows
        .map(sanitizeEquipmentRegistryRow)
        .filter(item => normalizeText(item.type).toLowerCase() === 'rig')
        .filter(item => normalizeText(item.status).toLowerCase() === 'active')
        .filter(item => !targetProjectToken || getCompanyProjectToken(item.projectRaw || item.project) === targetProjectToken);
      const ownedRigs = registryRigItems.filter(item => normalizeText(item.contractor).toLowerCase() === 'apfc').length;
      const rentedRigs = registryRigItems.filter(item => normalizeText(item.contractor).toLowerCase() === 'rental').length;
      const rigCount = ownedRigs + rentedRigs || latest?.rigs || stats.activeRigs || 0;
      const lmPerRigPerDay = rigCount > 0 ? (stats.avgLm / rigCount) : 0;
      return {
        rigs: latest?.rigs || 0,
        ownedRigs,
        rentedRigs,
        cranes: latest?.cranes || 0,
        others: latest?.others || 0,
        lm7d,
        lmPerRigPerDay,
        date: latest?.date || ''
      };
    }

    function getExecutivePileCostPerLm(project = 'All Projects') {
      const manpower = getPortfolioManpowerRows(project);
      const pileRows = getPortfolioPileRows(project);
      const cumulativeLm = getExecutedRows(pileRows).reduce((sum, row) => sum + (Number(row.asbuilt_depth) || Number(row.design_depth) || 0), 0);
      if (!manpower.length || cumulativeLm <= 0) return 0;

      const dailyRates = {
        pm: 461.5,
        se: 461.5,
        foreman: 343.4,
        op: 247.8,
        vb: 101,
        rig: 108.2,
        we: 151.4,
        me: 315.5,
        hl: 101
      };
      const overheadsDaily = 2540;
      const rigRental = 2500;
      const vbRental = 3250;
      const craneRental = 1100;

      const equipmentByDate = new Map();
      getPortfolioEquipmentDateRows(project).forEach(row => equipmentByDate.set(row.date, row));

      const totalCost = manpower.reduce((sum, row) => {
        const salaries =
          (row.pm || 0) * dailyRates.pm +
          (row.se || 0) * dailyRates.se +
          (row.foreman || 0) * dailyRates.foreman +
          (row.op || 0) * dailyRates.op +
          (row.vb || 0) * dailyRates.vb +
          (row.rig || 0) * dailyRates.rig +
          (row.we || 0) * dailyRates.we +
          (row.me || 0) * dailyRates.me +
          (row.hl || 0) * dailyRates.hl;
        const equipment = equipmentByDate.get(row.date);
        const vibratorCount = Array.isArray(equipment?.activeItems)
          ? equipment.activeItems.filter(item => normalizeText(item.type).toLowerCase() === 'vibrator').length
          : 0;
        const rental = (equipment?.rigs || 0) * rigRental + (equipment?.cranes || 0) * craneRental + vibratorCount * vbRental;
        return sum + salaries + rental + overheadsDaily;
      }, 0);

      return totalCost / cumulativeLm;
    }

    function buildExecutiveProjectSnapshot(project) {
      const pileRows = getPortfolioPileRows(project);
      const kingRows = getPortfolioKingPostRows(project);
      const pileStats = computeStats(pileRows, project);
      const kingStats = computeKingPostStats(kingRows);
      const manpower = getExecutiveLatestManpowerSummary(project);
      const equipment = getExecutiveEquipmentSummary(project);
      const activeRigNames = new Set([
        ...getExecutedRows(pileRows).map(row => normalizeText(row.machine)).filter(Boolean),
        ...kingRows.map(row => normalizeText(row.rig1)).filter(Boolean)
      ]);
      const equipmentRigCount = (equipment.ownedRigs || 0) + (equipment.rentedRigs || 0);
      const activeRigs = equipmentRigCount || Math.max(activeRigNames.size, equipment.rigs, pileStats.activeRigs, kingStats.activeRigs);
      return {
        project,
        pileStats,
        kingStats,
        manpower,
        equipment,
        activeRigs,
        costPerLm: getExecutivePileCostPerLm(project)
      };
    }

    function renderExecutiveMatrix(snapshots) {
      if (!els.executiveMatrixBody) return;

      function activityBlock(type, heading, content) {
        return `
          <div class="exec-act-block exec-act-block--${type}">
            <div class="exec-act-head">
              <div class="exec-act-title exec-act-title--${type}">${heading}</div>
            </div>
            ${content}
          </div>
        `;
      }

      const rows = snapshots.map(snapshot => {
        const hasPiles = snapshot.pileStats.total > 0;
        const hasKing = snapshot.kingStats.total > 0;

        // Progress column
        let progressCell = '';
        if (hasPiles) {
          const pct = Math.min(100, Math.max(0, snapshot.pileStats.progress));
          progressCell += activityBlock('piles', 'Bored Piles', `
            <div class="exec-progress-line">
              <div class="exec-progress-nums"><span class="exec-executed">${snapshot.pileStats.completed}</span><span class="exec-slash">/</span><span class="exec-total">${snapshot.pileStats.total}</span></div>
              <span class="exec-progress-pct">${pct.toFixed(1)}%</span>
            </div>
            <div class="exec-progress-track"><div class="exec-progress-fill exec-progress-fill--piles" style="width:${pct}%"></div></div>
          `);
        }
        if (hasKing) {
          const displayCompleted = snapshot.kingStats.completed > 0 ? snapshot.kingStats.completed : snapshot.kingStats.predrilled;
          const progressLabel = snapshot.kingStats.completed > 0 ? 'Installed' : 'Pre-Drilled';
          const displayPct = snapshot.kingStats.total > 0 ? (displayCompleted / snapshot.kingStats.total) * 100 : 0;
          const pct = Math.min(100, Math.max(0, displayPct));
          progressCell += activityBlock('king', 'KingPosts', `
            <div class="exec-kv" style="margin-bottom:8px;"><span class="exec-kv-unit">${progressLabel}</span></div>
            <div class="exec-progress-line">
              <div class="exec-progress-nums"><span class="exec-executed">${displayCompleted}</span><span class="exec-slash">/</span><span class="exec-total">${snapshot.kingStats.total}</span></div>
              <span class="exec-progress-pct">${pct.toFixed(1)}%</span>
            </div>
            <div class="exec-progress-track"><div class="exec-progress-fill exec-progress-fill--king" style="width:${pct}%"></div></div>
          `);
        }

        // Yesterday column
        let yesterdayCell = '';
        if (hasPiles) {
          const cnt = snapshot.pileStats.yesterdayExecuted;
          const lm = snapshot.pileStats.yesterdayLm;
          yesterdayCell += activityBlock('piles', 'Bored Piles', `<div class="exec-kv"><span class="exec-kv-num">${cnt}</span><span class="exec-kv-unit">Pile</span><span class="exec-kv-sep">|</span><span class="exec-kv-num">${lm > 0 ? lm.toFixed(1) : '-'}</span><span class="exec-kv-unit">Lm</span></div>`);
        }
        if (hasKing) {
          const cnt = snapshot.kingStats.yesterdayInstalled > 0
            ? snapshot.kingStats.yesterdayInstalled
            : snapshot.kingStats.yesterdayPredrilled;
          const lm = snapshot.kingStats.yesterdayKpLm;
          yesterdayCell += activityBlock('king', 'KingPosts', `<div class="exec-kv"><span class="exec-kv-num">${cnt}</span><span class="exec-kv-unit">Kingpost</span><span class="exec-kv-sep">|</span><span class="exec-kv-num">${lm > 0 ? lm.toFixed(1) : '-'}</span><span class="exec-kv-unit">Lm</span></div>`);
        }

        // Rolling AVG 7CD column
        let avgCell = '';
        if (hasPiles) {
          avgCell += activityBlock('piles', 'Bored Piles', `<div class="exec-kv"><span class="exec-kv-num">${snapshot.pileStats.avgPiles.toFixed(1)}</span><span class="exec-kv-unit">Pile/CD</span><span class="exec-kv-sep">|</span><span class="exec-kv-num">${snapshot.pileStats.avgLm.toFixed(1)}</span><span class="exec-kv-unit">Lm/CD</span></div>`);
        }
        if (hasKing) {
          const kpAvg = snapshot.kingStats.avgInstalled > 0 ? snapshot.kingStats.avgInstalled : snapshot.kingStats.avgPredrilled;
          avgCell += activityBlock('king', 'KingPosts', `<div class="exec-kv"><span class="exec-kv-num">${kpAvg.toFixed(1)}</span><span class="exec-kv-unit">Kingpost/CD</span><span class="exec-kv-sep">|</span><span class="exec-kv-num">${snapshot.kingStats.avgLm.toFixed(1)}</span><span class="exec-kv-unit">Lm/CD</span></div>`);
        }

        // ETA column
        let etaCell = '';
        if (hasPiles) {
          const pileEtaDate = snapshot.pileStats.etaDate ? formatDateFullLabel(snapshot.pileStats.etaDate) : '-';
          const pileEtaMonths = snapshot.pileStats.etaMonths != null ? `${snapshot.pileStats.etaMonths.toFixed(1)} months remaining` : '';
          etaCell += activityBlock('piles', 'Bored Piles', `<div class="exec-eta-date">${escapeHtml(pileEtaDate)}</div>${pileEtaMonths ? `<div class="exec-eta-months">${pileEtaMonths}</div>` : ''}`);
        }
        if (hasKing) {
          const kingEtaDate = snapshot.kingStats.etaDate ? formatDateFullLabel(snapshot.kingStats.etaDate) : '-';
          const kingEtaMonths = snapshot.kingStats.etaMonths != null ? `${snapshot.kingStats.etaMonths.toFixed(1)} months remaining` : '';
          etaCell += activityBlock('king', 'KingPosts', `<div class="exec-eta-date">${escapeHtml(kingEtaDate)}</div>${kingEtaMonths ? `<div class="exec-eta-months">${kingEtaMonths}</div>` : ''}`);
        }

        return `
          <tr>
            <td><div class="executive-project-name">${escapeHtml(snapshot.project)}</div></td>
            <td><div class="exec-act-stack">${progressCell}</div></td>
            <td><div class="exec-act-stack">${yesterdayCell}</div></td>
            <td><div class="exec-act-stack">${avgCell}</div></td>
            <td><div class="exec-act-stack">${etaCell}</div></td>
            <td class="exec-scalar-cell">${snapshot.activeRigs}<span class="exec-unit"><br>${snapshot.equipment.ownedRigs} Owned | ${snapshot.equipment.rentedRigs} Rented</span></td>
            <td class="exec-scalar-cell">${snapshot.manpower.total}</td>
            <td class="exec-scalar-cell">${snapshot.costPerLm > 0 ? `${snapshot.costPerLm.toFixed(0)}<span class="exec-unit"> AED/Lm</span>` : '-'}</td>
          </tr>
        `;
      }).join('');
      els.executiveMatrixBody.innerHTML = rows || `<tr><td colspan="8" style="padding:20px;color:var(--muted);">No executive data available.</td></tr>`;
    }

    function renderExecutiveProgressBars(snapshots) {
      if (!els.executiveProgressBars) return;
      els.executiveProgressBars.innerHTML = snapshots.map(snapshot => {
        return `
          <div class="executive-progress-item">
            <div class="executive-progress-head">
              <div class="executive-progress-label">${escapeHtml(snapshot.project)}</div>
              <div class="executive-progress-meta">Piles ${snapshot.pileStats.progress.toFixed(1)}% | KingPosts ${snapshot.kingStats.progress.toFixed(1)}%</div>
            </div>
            <div class="executive-progress-track">
              <span class="executive-progress-fill-piles" style="width:${Math.max(0, Math.min(100, snapshot.pileStats.progress))}%"></span>
              <span class="executive-progress-fill-kingposts" style="width:${Math.max(0, Math.min(100, snapshot.kingStats.progress))}%"></span>
            </div>
          </div>
        `;
      }).join('');
    }

    function getExecutiveAvailableActivities(project = executiveTrendProject) {
      const activities = [];
      if (getPortfolioPileRows(project).length > 0) activities.push('piles');
      if (getPortfolioKingPostRows(project).length > 0) activities.push('kingposts');
      return activities;
    }

    function syncExecutiveActivityMode(project = executiveTrendProject) {
      const available = getExecutiveAvailableActivities(project);
      if (!available.length) {
        executiveActivityMode = 'piles';
      } else if (!available.includes(executiveActivityMode)) {
        executiveActivityMode = available[0];
      }

      const showToggle = available.length > 1;
      const activityToggle = document.getElementById('executiveTrendActivityToggle');
      if (activityToggle) {
        activityToggle.hidden = !showToggle;
        activityToggle.style.display = showToggle ? '' : 'none';
      }

      els.executiveActivityButtons.forEach(btn => {
        const mode = btn.dataset.executiveActivity;
        const visible = available.includes(mode);
        btn.hidden = !visible;
        btn.style.display = visible ? '' : 'none';
        btn.classList.toggle('active', mode === executiveActivityMode);
      });
    }

    function getExecutiveMetricConfig() {
      if (executiveActivityMode === 'kingposts') {
        return [
          { key: 'predrilled', label: 'Pre-Drilled', unit: 'kp' },
          { key: 'installed', label: 'Installed', unit: 'kp' },
          { key: 'lm', label: 'Lm', unit: 'Lm' }
        ];
      }
      return [
        { key: 'piles', label: 'Piles', unit: 'piles' },
        { key: 'lm', label: 'Lm', unit: 'Lm' },
        { key: 'm3', label: 'm3', unit: 'm3' }
      ];
    }

    function syncExecutiveMetricButtons() {
      const config = getExecutiveMetricConfig();
      const validKeys = config.map(c => c.key);
      if (!validKeys.includes(executiveChartMetric)) executiveChartMetric = config[0]?.key || 'piles';
      els.executiveMetricButtons.forEach((btn, idx) => {
        const item = config[idx];
        if (!item) { btn.hidden = true; btn.style.display = 'none'; return; }
        btn.hidden = false;
        btn.style.display = '';
        btn.dataset.executiveMetric = item.key;
        btn.textContent = item.label;
        btn.classList.toggle('active', item.key === executiveChartMetric);
      });
    }

    function syncExecutiveModeToggleUI() {
      if (!els.executiveModeToggle) return;
      const isCumulative = executiveChartMode === 'cumulative';
      els.executiveModeToggle.classList.toggle('on', isCumulative);
      els.executiveModeToggle.setAttribute('aria-pressed', isCumulative ? 'true' : 'false');
      const label = document.getElementById('executiveModeLabelCumulative');
      if (label) label.classList.toggle('active', isCumulative);
    }

    function buildExecutiveTrendDataset(rows) {
      const gran = executiveChartGranularity;
      const metric = executiveChartMetric;
      const mode = executiveChartMode;
      if (executiveActivityMode === 'kingposts') {
        const daily = aggregateKingPostMetrics(rows, metric, gran);
        let cumulative = 0;
        return daily.map(item => {
          cumulative += item.value;
          return { date: item.date, value: mode === 'daily' ? item.value : cumulative, dayValue: item.value, executedCount: item.executedCount, items: item.items, cumulative };
        });
      }
      const daily = aggregateDailyMetrics(rows, metric, gran);
      let cumulative = 0;
      return daily.map(item => {
        cumulative += item.value;
        return { date: item.date, value: mode === 'daily' ? item.value : cumulative, dayValue: item.value, executedCount: item.executedCount, items: item.items, cumulative };
      });
    }

    function hasUsableExecutiveTrendData(data) {
      return Array.isArray(data) && data.some(item => Number(item?.value || 0) > 0 || Number(item?.dayValue || 0) > 0);
    }

    function showExecutiveTrendTooltip(evt, dataPoint, plannedPoint, options = {}) {
      const wrap = els.executiveTrendWrap;
      const tooltip = els.executiveTrendTooltip;
      if (!wrap || !tooltip) return;
      const gran = executiveChartGranularity;
      const metric = executiveChartMetric;
      const mode = executiveChartMode;
      const actMode = executiveActivityMode;
      let html = `<div class="tooltip-title">${periodTitle(dataPoint.date, gran)}</div>`;
      if (mode === 'daily') {
        if (actMode === 'kingposts') {
          const label = metric === 'predrilled' ? 'Pre-Drilled' : metric === 'installed' ? 'Beam Installed' : 'Drilled Lm';
          const unit = metric === 'lm' ? ' Lm' : '';
          html += `<div class="tooltip-row"><span>${label}</span><strong>${Number(dataPoint.value.toFixed(1)).toLocaleString()}${unit}</strong></div>`;
          if (gran === 'day' && dataPoint.items.length) {
            html += `<div class="tooltip-list">${dataPoint.items.map(item => `<div class="tooltip-list-item"><span>${item.id || '-'}</span><span>${item.status || item.machine || '-'}</span></div>`).join('')}</div>`;
          } else {
            html += `<div class="tooltip-row"><span>Elements</span><strong>${dataPoint.executedCount}</strong></div>`;
          }
        } else if (metric === 'piles') {
          html += `<div class="tooltip-row"><span>Piles Executed</span><strong>${dataPoint.executedCount}</strong></div>`;
          if (gran === 'day' && dataPoint.items.length) {
            html += `<div class="tooltip-list">${dataPoint.items.map(item => `<div class="tooltip-list-item"><span>${item.id || '-'}</span><span>${item.machine || '-'}</span></div>`).join('')}</div>`;
          }
        } else {
          const unit = metric === 'lm' ? ' Lm' : ' m3';
          html += `<div class="tooltip-row"><span>${metric === 'lm' ? 'Lm' : 'm3'}</span><strong>${Number(dataPoint.value.toFixed(1)).toLocaleString()}${unit}</strong></div>`;
          html += `<div class="tooltip-row"><span>Piles Executed</span><strong>${dataPoint.executedCount}</strong></div>`;
        }
      } else {
        const unit = metric === 'piles' ? ' piles' : metric === 'lm' ? ' Lm' : metric === 'm3' ? ' m3' : '';
        const executedLabel = actMode === 'kingposts' ? 'This ' + (gran === 'day' ? 'Date' : 'Period') : 'Executed This ' + (gran === 'day' ? 'Date' : 'Period');
        html += `<div class="tooltip-row"><span>${executedLabel}</span><strong>${Number(dataPoint.dayValue.toFixed(1)).toLocaleString()}${unit}</strong></div>`;
        html += `<div class="tooltip-row"><span>Cumulative</span><strong>${Number(dataPoint.value.toFixed(1)).toLocaleString()}${unit}</strong></div>`;
      }
      tooltip.innerHTML = html;
      tooltip.classList.add('visible');
      wrap.appendChild(tooltip);
      const tooltipHeight = mode === 'daily' && metric === 'piles' ? 190 : 150;
      const anchorX = Number(options.anchorX || 0);
      const anchorY = Number(options.anchorY || 0);
      placeTooltipInScrollWrap(tooltip, wrap, anchorX, anchorY, 280, tooltipHeight);
      if (executiveChartHoverGuide && options.showGuide) {
        executiveChartHoverGuide.setAttribute('x1', anchorX);
        executiveChartHoverGuide.setAttribute('x2', anchorX);
        executiveChartHoverGuide.style.display = 'block';
      }
    }

    function hideExecutiveTrendTooltip() {
      const tooltip = els.executiveTrendTooltip;
      if (!tooltip) return;
      tooltip.classList.remove('visible');
      tooltip.style.position = '';
      tooltip.style.left = '';
      tooltip.style.top = '';
      tooltip.innerHTML = '';
      if (executiveChartHoverGuide) executiveChartHoverGuide.style.display = 'none';
    }

    function renderExecutiveTrendChart() {
      const project = executiveTrendProject;
      syncExecutiveActivityMode(project);
      let rows = executiveActivityMode === 'kingposts'
        ? getPortfolioKingPostRows(project)
        : getPortfolioPileRows(project);
      let data = buildExecutiveTrendDataset(rows);
      const gran = executiveChartGranularity;
      const mode = executiveChartMode;

      syncExecutiveMetricButtons();
      syncExecutiveModeToggleUI();

      if (!hasUsableExecutiveTrendData(data)) {
        const metricOptions = getExecutiveMetricConfig().map(item => item.key);
        for (const candidate of metricOptions) {
          if (candidate === executiveChartMetric) continue;
          executiveChartMetric = candidate;
          syncExecutiveMetricButtons();
          data = buildExecutiveTrendDataset(rows);
          if (hasUsableExecutiveTrendData(data)) break;
        }
      }

      if (!hasUsableExecutiveTrendData(data)) {
        const fallbackActivity = executiveActivityMode === 'kingposts' ? 'piles' : 'kingposts';
        if (getExecutiveAvailableActivities(project).includes(fallbackActivity)) {
          executiveActivityMode = fallbackActivity;
          syncExecutiveActivityMode(project);
          syncExecutiveMetricButtons();
          rows = executiveActivityMode === 'kingposts'
            ? getPortfolioKingPostRows(project)
            : getPortfolioPileRows(project);
          data = buildExecutiveTrendDataset(rows);
          if (!hasUsableExecutiveTrendData(data)) {
            const metricOptions = getExecutiveMetricConfig().map(item => item.key);
            for (const candidate of metricOptions) {
              if (candidate === executiveChartMetric) continue;
              executiveChartMetric = candidate;
              syncExecutiveMetricButtons();
              data = buildExecutiveTrendDataset(rows);
              if (hasUsableExecutiveTrendData(data)) break;
            }
          }
        }
      }

      const metric = executiveChartMetric;
      const actMode = executiveActivityMode;
      const titleMetric = getExecutiveMetricConfig().find(c => c.key === metric)?.label || metric;
      const granLabel = gran === 'day' ? 'Day' : gran === 'week' ? 'Week' : 'Month';
      const showLegend = mode === 'cumulative' && metric === 'piles' && actMode === 'piles';
      const scopedProjectCount = project === 'All Projects'
        ? (executiveActivityMode === 'kingposts'
          ? Array.from(new Set(getPortfolioKingPostRows(project).map(row => normalizeText(row.project)).filter(Boolean))).length
          : Array.from(new Set(getPortfolioPileRows(project).map(row => normalizeText(row.project)).filter(Boolean))).length)
        : 1;
      if (els.executiveTrendSeriesLegend) els.executiveTrendSeriesLegend.hidden = !showLegend;
      if (els.executiveTrendTitle) els.executiveTrendTitle.textContent = `${mode === 'daily' ? 'Daily' : 'Cumulative'} ${titleMetric} by ${granLabel}`;
      if (els.executiveTrendTag) els.executiveTrendTag.textContent = mode === 'daily' ? 'Daily' : 'Cumulative';
      if (els.executiveTrendSubtitle) {
        els.executiveTrendSubtitle.textContent = project === 'All Projects'
          ? `${scopedProjectCount} projects with ${executiveActivityMode === 'kingposts' ? 'KingPost' : 'Bored Pile'} activity`
          : `${project} production output`;
      }

      clearSvgGroup(els.executiveTrendGrid);
      clearSvgGroup(els.executiveTrendSeries);
      clearSvgGroup(els.executiveTrendLabels);
      clearSvgGroup(els.executiveTrendXAxis);

      if (!hasUsableExecutiveTrendData(data)) {
        const empty = svgEl('text', { x: '500', y: '160', 'text-anchor': 'middle', fill: 'rgba(244,247,251,0.62)', 'font-size': '16', 'font-weight': '700' });
        empty.textContent = 'No production data available';
        els.executiveTrendSeries.appendChild(empty);
        return;
      }

      const wrap = els.executiveTrendWrap;
      const visiblePoints = 14;
      const wrapWidth = wrap?.clientWidth || 920;
      const wrapHeight = wrap?.clientHeight || 360;
      const width = Math.max(Math.round(wrapWidth), 520);
      const height = Math.max(Math.round(wrapHeight), 320);
      const left = 58;
      const right = 20;
      const top = 20;
      const bottom = 56;
      const innerH = height - top - bottom;
      const visibleInnerW = width - left - right;
      const scrollNeeded = data.length > visiblePoints;
      const stepX = scrollNeeded ? visibleInnerW / visiblePoints : visibleInnerW / Math.max(data.length, 1);
      const innerW = scrollNeeded ? stepX * data.length : visibleInnerW;
      const svgWidth = left + innerW + right;
      const maxVal = Math.max(1, ...data.map(d => d.value));
      const barW = Math.min(34, Math.max(16, stepX * 0.52));

      els.executiveTrendSvg.setAttribute('viewBox', `0 0 ${svgWidth} ${height}`);
      els.executiveTrendSvg.setAttribute('width', svgWidth);
      els.executiveTrendSvg.setAttribute('height', height);
      els.executiveTrendSvg.style.width = scrollNeeded ? `${svgWidth}px` : '100%';
      els.executiveTrendSvg.style.minWidth = scrollNeeded ? `${svgWidth}px` : '100%';
      els.executiveTrendSvg.style.height = '100%';

      executiveChartHoverGuide = null;
      if (mode === 'cumulative') {
        executiveChartHoverGuide = svgEl('line', {
          x1: left, y1: top, x2: left, y2: top + innerH,
          stroke: 'rgba(255,255,255,0.55)', 'stroke-width': '1.5', 'stroke-dasharray': '6 6',
          style: 'display:none; pointer-events:none;'
        });
        els.executiveTrendSeries.appendChild(executiveChartHoverGuide);
      }

      for (let i = 0; i < 5; i += 1) {
        const y = top + (innerH / 4) * i;
        els.executiveTrendGrid.appendChild(svgEl('line', { x1: left, y1: y, x2: svgWidth - right, y2: y, stroke: 'rgba(255,255,255,0.06)', 'stroke-width': '1' }));
      }

      const gradId = actMode === 'kingposts' ? 'executiveBarGradientKing' : 'executiveBarGradient';

      if (mode === 'daily') {
        const animatedBars = [];
        data.forEach((d, idx) => {
          const x = left + stepX * idx + stepX / 2;
          const h = (d.value / maxVal) * (innerH - 8);
          const y = top + innerH - h;
          const bar = svgEl('rect', { x: x - barW / 2, y: top + innerH, width: barW, height: 0, rx: 8, style: `fill: url(#${gradId})`, class: 'bar-shape' });
          els.executiveTrendSeries.appendChild(bar);
          const lbl = svgEl('text', { x, y: y - 8, class: 'bar-label', style: 'opacity:0; transition:opacity 180ms ease;' });
          lbl.textContent = metric === 'piles' || metric === 'installed' || metric === 'predrilled' ? d.executedCount : Number(d.value.toFixed(1)).toString();
          els.executiveTrendLabels.appendChild(lbl);
          animatedBars.push({ bar, lbl, finalY: y, finalH: h, idx });
          const hit = svgEl('rect', { x: x - barW / 2, y, width: barW, height: h, class: 'hover-target' });
          hit.addEventListener('mousemove', () => showExecutiveTrendTooltip(null, d, null, { anchorX: x, anchorY: y }));
          hit.addEventListener('mouseleave', hideExecutiveTrendTooltip);
          els.executiveTrendSeries.appendChild(hit);
          const xLabel = svgEl('text', { x, y: height - 18, class: 'axis-label', 'text-anchor': 'middle' });
          xLabel.textContent = formatPeriodLabel(d.date, gran);
          els.executiveTrendXAxis.appendChild(xLabel);
        });
        const startTime = performance.now();
        const duration = 520;
        const stagger = 26;
        const easeOut = t => 1 - Math.pow(1 - t, 3);
        const frame = now => {
          let running = false;
          animatedBars.forEach(item => {
            const local = Math.min(Math.max((now - startTime - item.idx * stagger) / duration, 0), 1);
            const eased = easeOut(local);
            if (local < 1) running = true;
            const h = item.finalH * eased;
            item.bar.setAttribute('y', (top + innerH) - h);
            item.bar.setAttribute('height', h);
            item.lbl.style.opacity = local > 0.82 ? '1' : '0';
          });
          if (running) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      } else {
        const isKingMode = actMode === 'kingposts';
        let path = '';
        let area = `M ${left} ${top + innerH}`;
        data.forEach((d, idx) => {
          const x = left + stepX * idx + stepX / 2;
          const y = top + innerH - (d.value / maxVal) * (innerH - 10);
          path += `${idx === 0 ? 'M' : 'L'} ${x} ${y} `;
          area += ` L ${x} ${y}`;
          els.executiveTrendSeries.appendChild(svgEl('circle', { cx: x, cy: y, r: 5.5, class: 'point-dot', style: isKingMode ? 'fill:rgba(96,165,250,1)' : '' }));
          const lbl = svgEl('text', { x, y: y - 10, class: 'point-label' });
          lbl.textContent = metric === 'piles' || metric === 'installed' || metric === 'predrilled' ? Math.round(d.value).toString() : Number(d.value.toFixed(1)).toString();
          els.executiveTrendLabels.appendChild(lbl);
          const hit = svgEl('rect', { x: x - stepX / 2, y: top, width: stepX, height: innerH + bottom, class: 'hover-target' });
          hit.addEventListener('mousemove', () => showExecutiveTrendTooltip(null, d, null, { anchorX: x, anchorY: y, showGuide: true }));
          hit.addEventListener('mouseleave', hideExecutiveTrendTooltip);
          els.executiveTrendSeries.appendChild(hit);
          const xLabel = svgEl('text', { x, y: height - 18, class: 'axis-label', 'text-anchor': 'middle' });
          xLabel.textContent = formatPeriodLabel(d.date, gran);
          els.executiveTrendXAxis.appendChild(xLabel);
        });
        const lastX = left + stepX * (data.length - 1) + stepX / 2;
        area += ` L ${lastX} ${top + innerH} Z`;
        const lineColor = isKingMode ? 'rgba(96,165,250,0.95)' : 'rgba(142,240,191,0.95)';
        const areaColor = isKingMode ? 'rgba(96,165,250,0.12)' : 'rgba(142,240,191,0.12)';
        const glowColor = isKingMode ? 'rgba(96,165,250,0.18)' : 'rgba(110,231,183,0.18)';
        const areaEl = svgEl('path', { d: area, class: 'area-shape', style: `fill:${areaColor}; opacity:0; transition:opacity 260ms ease;` });
        els.executiveTrendSeries.appendChild(areaEl);
        const lineEl = svgEl('path', { d: path.trim(), class: 'line-shape', style: `stroke:${lineColor}; filter:drop-shadow(0 0 8px ${glowColor});` });
        els.executiveTrendSeries.appendChild(lineEl);
        requestAnimationFrame(() => {
          areaEl.style.opacity = '1';
          const length = lineEl.getTotalLength();
          lineEl.style.strokeDasharray = `${length}`;
          lineEl.style.strokeDashoffset = `${length}`;
          lineEl.style.transition = 'stroke-dashoffset 700ms cubic-bezier(.22,.61,.36,1)';
          requestAnimationFrame(() => { lineEl.style.strokeDashoffset = '0'; });
          Array.from(els.executiveTrendLabels.children).forEach((label, idx) => {
            label.style.opacity = '0';
            label.style.transition = 'opacity 180ms ease';
            setTimeout(() => { label.style.opacity = '1'; }, 280 + idx * 18);
          });
          Array.from(els.executiveTrendSeries.querySelectorAll('.point-dot')).forEach((dot, idx) => {
            dot.style.opacity = '0';
            dot.style.transition = 'opacity 180ms ease';
            setTimeout(() => { dot.style.opacity = '1'; }, 260 + idx * 18);
          });
        });
      }

      if (wrap && !wrap.dataset.execInteractiveBound) {
        let isDown = false;
        let startX = 0;
        let startScrollLeft = 0;
        wrap.addEventListener('click', evt => { if (!evt.target.closest('.hover-target')) hideExecutiveTrendTooltip(); });
        wrap.addEventListener('pointerdown', evt => {
          if ((wrap.scrollWidth - wrap.clientWidth) <= 4) return;
          isDown = true; startX = evt.clientX; startScrollLeft = wrap.scrollLeft;
          wrap.classList.add('dragging');
        });
        window.addEventListener('pointermove', evt => { if (!isDown) return; wrap.scrollLeft = startScrollLeft - (evt.clientX - startX); });
        const stopDrag = () => { isDown = false; wrap.classList.remove('dragging'); };
        window.addEventListener('pointerup', stopDrag);
        wrap.addEventListener('pointerleave', stopDrag);
        wrap.addEventListener('wheel', evt => {
          if (!evt.shiftKey) return;
          if ((wrap.scrollWidth - wrap.clientWidth) <= 4) return;
          evt.preventDefault();
          wrap.scrollLeft += Math.abs(evt.deltaX) > Math.abs(evt.deltaY) ? evt.deltaX : evt.deltaY;
        }, { passive: false });
        wrap.dataset.execInteractiveBound = '1';
      }

      if (wrap) {
        if (scrollNeeded) wrap.scrollLeft = Math.max(wrap.scrollWidth - wrap.clientWidth, 0);
        else wrap.scrollLeft = 0;
      }
    }

    function renderExecutiveResources(snapshots) {
      if (els.executiveManpowerBody) {
        els.executiveManpowerBody.innerHTML = snapshots.map(snapshot => {
          const manpower = snapshot.manpower;
          return `
            <tr>
              <td>${escapeHtml(snapshot.project)}</td>
              <td>${manpower.total}</td>
              <td>${manpower.leadership}</td>
              <td>${manpower.operators}</td>
              <td>${manpower.support}</td>
              <td>${manpower.date ? formatDateFullLabel(manpower.date) : '—'}</td>
            </tr>
          `;
        }).join('');
      }

      if (els.executiveEquipmentBody) {
        els.executiveEquipmentBody.innerHTML = snapshots.map(snapshot => {
          const equipment = snapshot.equipment;
          return `
            <tr>
              <td>${escapeHtml(snapshot.project)}</td>
              <td>${equipment.rigs}</td>
              <td>${equipment.cranes}</td>
              <td>${equipment.others}</td>
              <td>${equipment.lm7d > 0 ? equipment.lm7d.toFixed(1) : '—'}</td>
              <td>${equipment.lmPerRigPerDay > 0 ? equipment.lmPerRigPerDay.toFixed(1) : '—'}</td>
            </tr>
          `;
        }).join('');
      }
    }

    function broadcastExecutiveMapContext() {
      if (!els.executiveMapFrame?.contentWindow || !currentUser) return;
      els.executiveMapFrame.contentWindow.postMessage({
        type: 'AUTH_CONTEXT_UPDATED',
        payload: {
          project: executiveMapProject,
          plot: '',
          overviewDateMode,
          type: currentUser.type,
          name: currentUser.name,
          username: currentUser.username,
          email: currentUser.email
        }
      }, window.location.origin);
    }

    function triggerExecutiveMapFocus() {
      if (!els.executiveMapFrame?.contentWindow) return;
      els.executiveMapFrame.contentWindow.postMessage({
        type: 'MAP_FOCUS_ANIMATE'
      }, window.location.origin);
    }

    function bindExecutiveMapFrameSync() {
      if (!els.executiveMapFrame || els.executiveMapFrame.dataset.syncBound === 'true') return;
      els.executiveMapFrame.addEventListener('load', () => {
        broadcastExecutiveMapContext();
        setTimeout(() => triggerExecutiveMapFocus(), 80);
      });
      els.executiveMapFrame.dataset.syncBound = 'true';
    }

    function ensureExecutiveMapLoaded() {
      if (!els.executiveMapFrame) return;
      if (!els.executiveMapFrame.getAttribute('src')) {
        els.executiveMapFrame.setAttribute('src', els.executiveMapFrame.dataset.src || 'map.html');
      }
    }

    function renderExecutivePage() {
      syncExecutiveSelectors();
      if (executiveTrendProject === 'All Projects') {
        executiveActivityMode = 'piles';
        executiveChartMetric = 'piles';
        executiveChartMode = 'daily';
        executiveChartGranularity = 'day';
      }
      const snapshots = getCombinedProjectList().filter(Boolean).map(project => buildExecutiveProjectSnapshot(project));
      renderExecutiveMatrix(snapshots);
      renderExecutiveTrendChart();
      renderExecutiveResources(snapshots);
      if (executiveView === 'map') {
        ensureExecutiveMapLoaded();
        broadcastExecutiveMapContext();
        window.setTimeout(() => triggerExecutiveMapFocus(), 80);
      }
    }

    function setActivePage(page) {
      if (!currentUser) return;
      if (!canAccessPage(page)) {
        page = 'overview';
      }
      activePage = page;
      els.pageOverview.classList.toggle('active', page === 'overview');
      if (els.pageMap) els.pageMap.classList.toggle('active', page === 'map');
      els.pageProduction.classList.toggle('active', page === 'production');
      if (els.pageUtilization) els.pageUtilization.classList.toggle('active', page === 'utilization');
      if (els.pageManpower) els.pageManpower.classList.toggle('active', page === 'manpower');
      if (els.pageCompanyManpower) els.pageCompanyManpower.classList.toggle('active', page === 'companymanpower');
      if (els.pageCompanyAnalytics) els.pageCompanyAnalytics.classList.toggle('active', page === 'companyanalytics');
      els.pageTimeline.classList.toggle('active', page === 'timeline');
      if (els.pageCost) els.pageCost.classList.toggle('active', page === 'cost');
      els.kpiRow.style.display = page === 'overview' ? 'grid' : 'none';
      document.querySelector('.content')?.classList.toggle('production-mode', page === 'production');

      syncTopbarPageActions(page);

      updateUserContextUi();

      els.navButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === page);
      });

      if (page === 'overview') renderDashboard(selectedProject);
      if (page === 'map') window.setTimeout(triggerMapFocusAnimation, 80);
      if (page === 'production') renderProductionPage(selectedProject, true);
      if (page === 'utilization') renderUtilizationPage(selectedProject);
      if (page === 'manpower') renderManpowerPage(selectedProject);
      if (page === 'companymanpower') renderCompanyManpowerPage(selectedProject);
      if (page === 'companyanalytics') renderCompanyAnalyticsPage(selectedProject);
      if (page === 'timeline') renderTimelinePage(selectedProject, true);
      if (page === 'cost') renderCostPage(selectedProject, true);
    }

    function aggregateAverageBy(rows, valueField, groupBy) {
      const executed = getExecutedRows(rows).filter(r => getOverviewDateKey(r));
      const map = new Map();

      executed.forEach(row => {
        const raw = parseFloat(row[valueField]);
        if (!Number.isFinite(raw)) return;

        const reportDate = getOverviewDateKey(row);
        let key = '';
        if (groupBy === 'pile') key = normalizeText(row.id) || '-';
        else if (groupBy === 'cw') key = getCW(reportDate);
        else key = reportDate;

        if (!map.has(key)) map.set(key, { key, sum: 0, count: 0, items: [] });
        const item = map.get(key);
        item.sum += raw;
        item.count += 1;
        item.items.push({
          id: normalizeText(row.id) || '-',
          value: raw,
          date: reportDate,
          cw: getCW(reportDate)
        });
      });

      return Array.from(map.values())
        .map(item => ({
          key: item.key,
          avg: item.count ? item.sum / item.count : 0,
          count: item.count,
          items: item.items.sort((a, b) => (a.date || '').localeCompare(b.date || '') || a.id.localeCompare(b.id, undefined, { numeric: true }))
        }))
        .sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
    }

    function aggregateKingPostAverageBy(rows, valueGetter, groupBy, dateGetter) {
      const map = new Map();
      rows.forEach(row => {
        const raw = Number(valueGetter(row));
        if (!Number.isFinite(raw)) return;
        const reportDate = dateGetter(row);
        if (!reportDate) return;

        let key = '';
        if (groupBy === 'pile') key = normalizeText(row.id) || '-';
        else if (groupBy === 'cw') key = getCW(reportDate);
        else key = reportDate;

        if (!map.has(key)) map.set(key, { key, sum: 0, count: 0, items: [] });
        const item = map.get(key);
        item.sum += raw;
        item.count += 1;
        item.items.push({
          id: normalizeText(row.id) || '-',
          value: raw,
          date: reportDate,
          cw: getCW(reportDate)
        });
      });

      return Array.from(map.values())
        .map(item => ({
          key: item.key,
          avg: item.count ? item.sum / item.count : 0,
          count: item.count,
          items: item.items.sort((a, b) => (a.date || '').localeCompare(b.date || '') || a.id.localeCompare(b.id, undefined, { numeric: true }))
        }))
        .sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
    }

    function aggregateKingPostCountBy(rows, groupBy, dateGetter, itemLabelGetter = null) {
      const map = new Map();
      rows.forEach(row => {
        const reportDate = dateGetter(row);
        if (!reportDate) return;

        let key = '';
        if (groupBy === 'pile') key = normalizeText(row.id) || '-';
        else if (groupBy === 'cw') key = getCW(reportDate);
        else key = reportDate;

        if (!map.has(key)) map.set(key, { key, sum: 0, count: 0, items: [] });
        const item = map.get(key);
        item.sum += 1;
        item.count += 1;
        item.items.push({
          id: normalizeText(row.id) || '-',
          value: 1,
          date: reportDate,
          cw: getCW(reportDate),
          label: itemLabelGetter ? itemLabelGetter(row) : ''
        });
      });

      return Array.from(map.values())
        .map(item => ({
          key: item.key,
          avg: item.sum,
          count: item.count,
          items: item.items.sort((a, b) => (a.date || '').localeCompare(b.date || '') || a.id.localeCompare(b.id, undefined, { numeric: true }))
        }))
        .sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
    }

    function formatNumberOneDecimal(value) {
      return Number(value || 0).toFixed(1);
    }

    function formatPercentValue(value) {
      const pct = Number(value || 0) * 100;
      return `${pct.toFixed(1)}%`;
    }

    function getProductionLabelFontSize(chartWidth) {
      if (chartWidth < 320) return 9.5;
      if (chartWidth < 460) return 10.5;
      if (chartWidth < 700) return 11.5;
      return 12.5;
    }

    function placeTooltipInScrollWrap(tooltipEl, wrapEl, anchorX, anchorY, tooltipWidth = 300, tooltipHeight = 170) {
      const offset = 12;
      const scrollLeft = wrapEl.scrollLeft || 0;
      const scrollTop = wrapEl.scrollTop || 0;
      const viewLeft = scrollLeft;
      const viewRight = scrollLeft + wrapEl.clientWidth;
      const viewTop = scrollTop;
      const viewBottom = scrollTop + wrapEl.clientHeight;

      let x = anchorX - (tooltipWidth / 2);
      let y = anchorY - tooltipHeight - offset;

      if (y < viewTop + 8) {
        y = anchorY + offset;
      }

      x = Math.max(viewLeft + 8, Math.min(x, viewRight - tooltipWidth - 8));
      y = Math.max(viewTop + 8, Math.min(y, viewBottom - tooltipHeight - 8));

      tooltipEl.style.left = `${x}px`;
      tooltipEl.style.top = `${y}px`;
    }

    function showProductionTooltip(evt, dataPoint, valueFormatter, options = {}) {
      const wrap = evt.currentTarget.closest('.prod-chart-wrap');
      if (!wrap) return;

      const title = options.title || 'Value';
      const periodText = options.groupBy === 'day'
        ? formatDateFullLabel(dataPoint.key)
        : (options.groupBy === 'cw' ? dataPoint.key : dataPoint.key);

      let html = `<div class="tooltip-title">${periodText}</div>`;

      if (options.isCount) {
        html += `<div class="tooltip-row"><span>${title}</span><strong>${valueFormatter(dataPoint.avg)}</strong></div>`;
      } else if (options.groupBy === 'day' || options.groupBy === 'cw') {
        html += `<div class="tooltip-row"><span>AVG ${title}</span><strong>${valueFormatter(dataPoint.avg)}</strong></div>`;
      } else {
        html += `<div class="tooltip-row"><span>${title}</span><strong>${valueFormatter(dataPoint.avg)}</strong></div>`;
      }

      if (options.groupBy === 'day' && Array.isArray(dataPoint.items) && dataPoint.items.length) {
        html += `<div class="tooltip-list">`;
        dataPoint.items.forEach(item => {
          const rightValue = options.isCount
            ? (item.label || item.id || '-')
            : valueFormatter(item.value);
          html += `<div class="tooltip-list-item"><span>${item.id || '-'}</span><span>${rightValue}</span></div>`;
        });
        html += `</div>`;
      }

      els.chartTooltip.innerHTML = html;
      els.chartTooltip.classList.add('visible');
      document.body.appendChild(els.chartTooltip);
      els.chartTooltip.style.position = 'fixed';

      const tooltipRect = els.chartTooltip.getBoundingClientRect();
      const targetRect = evt.currentTarget.getBoundingClientRect();
      const gap = 10;

      let left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
      let top = targetRect.top - tooltipRect.height - gap;

      if (top < 8) {
        top = targetRect.bottom + gap;
      }

      left = Math.max(8, Math.min(left, window.innerWidth - tooltipRect.width - 8));
      top = Math.max(8, Math.min(top, window.innerHeight - tooltipRect.height - 8));

      els.chartTooltip.style.left = `${left}px`;
      els.chartTooltip.style.top = `${top}px`;
    }

    function renderSmallBarChart(svg, data, valueFormatter, options = {}) {
      const shouldAnimate = options.animate !== false;
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      if (!data.length) return;

      const defs = svgEl('defs');
      const grad = svgEl('linearGradient', { id: 'prodBarGradient', x1: '0', y1: '0', x2: '0', y2: '1' });
      grad.appendChild(svgEl('stop', { offset: '0%', 'stop-color': '#8ef0bf' }));
      grad.appendChild(svgEl('stop', { offset: '55%', 'stop-color': '#6ee7b7', 'stop-opacity': '0.58' }));
      grad.appendChild(svgEl('stop', { offset: '100%', 'stop-color': '#6ee7b7', 'stop-opacity': '0.18' }));
      defs.appendChild(grad);
      svg.appendChild(defs);

      const isPileView = options.groupBy === 'pile';
      const visibleBars = isPileView ? 8 : 12;
      const wrap = svg.closest('.prod-chart-wrap');
      const wrapWidth = wrap?.clientWidth || svg.clientWidth || svg.getBoundingClientRect().width || 420;
      const wrapHeight = wrap?.clientHeight || svg.clientHeight || svg.getBoundingClientRect().height || 250;
      const width = Math.max(Math.round(wrapWidth), 320);
      const height = Math.max(Math.round(wrapHeight), 230);
      const left = 54;
      const right = 18;
      const top = 18;
      const bottom = 64;
      const innerH = Math.max(height - top - bottom, 120);
      const plotTop = top;
      const plotBottom = top + innerH;
      const values = data.map(d => Number(d.avg) || 0);
      const minVal = Math.min(0, ...values);
      const maxVal = Math.max(0, ...values);
      const range = Math.max(maxVal - minVal, 1);
      const visibleInnerW = Math.max(width - left - right, 180);
      const scrollNeeded = data.length > visibleBars;
      const stepX = scrollNeeded
        ? visibleInnerW / visibleBars
        : (data.length > 1 ? visibleInnerW / (data.length - 1) : 0);
      const innerW = scrollNeeded ? stepX * data.length : visibleInnerW;
      const svgWidth = left + innerW + right;
      const barW = isPileView
        ? Math.max(12, Math.min(18, stepX * 0.30))
        : Math.max(16, Math.min(24, stepX * 0.40));
      const chartWidth = width;
      const labelFontSize = Math.max(9, getProductionLabelFontSize(chartWidth) - 1.5);
      const minBarHeightForLabel = chartWidth < 420 ? 24 : 18;
      const yScale = value => plotTop + ((maxVal - value) / range) * innerH;
      const baselineY = minVal >= 0 ? plotBottom : (maxVal <= 0 ? plotTop : yScale(0));

      svg.setAttribute('viewBox', `0 0 ${svgWidth} ${height}`);
      svg.setAttribute('width', svgWidth);
      svg.setAttribute('height', height);
      svg.style.width = scrollNeeded ? `${svgWidth}px` : '100%';
      svg.style.minWidth = scrollNeeded ? `${svgWidth}px` : '100%';
      svg.style.height = '100%';

      for (let i = 0; i < 5; i += 1) {
        const tickValue = maxVal - ((maxVal - minVal) / 4) * i;
        const y = yScale(tickValue);
        svg.appendChild(svgEl('line', { x1: left, y1: y, x2: svgWidth - right, y2: y, stroke: 'rgba(255,255,255,0.06)', 'stroke-width': '1' }));
      }

      svg.appendChild(svgEl('line', { x1: left, y1: baselineY, x2: svgWidth - right, y2: baselineY, stroke: 'rgba(255,255,255,0.16)', 'stroke-width': '1.2' }));

      const monthRuns = [];
      let currentRun = null;
      const animatedBars = [];
      const xStart = left + (scrollNeeded ? (stepX / 2) : (barW / 2));
      const xEnd = left + visibleInnerW - (scrollNeeded ? (stepX / 2) : (barW / 2));

      data.forEach((item, idx) => {
        const x = data.length <= 1
          ? left + visibleInnerW / 2
          : (scrollNeeded
            ? left + stepX * idx + stepX / 2
            : xStart + ((xEnd - xStart) / (data.length - 1)) * idx);
        const finalYValue = yScale(item.avg);
        const finalY = Math.min(finalYValue, baselineY);
        const finalH = Math.max(2, Math.abs(finalYValue - baselineY));

        const bar = svgEl('rect', {
          x: x - barW / 2,
          y: baselineY,
          width: barW,
          height: 0,
          rx: 3,
          fill: 'url(#prodBarGradient)',
          stroke: 'rgba(255,255,255,0.12)',
          'stroke-width': '1'
        });
        svg.appendChild(bar);
        animatedBars.push({ bar, finalY, finalH, avg: item.avg, idx });

        if (finalH >= minBarHeightForLabel) {
          const labelY = item.avg >= 0 ? finalY - 8 : finalY + finalH + 18;
          const label = svgEl('text', {
            x,
            y: labelY,
            class: 'prod-label',
            style: `font-size:${labelFontSize}px; opacity:0; transition: opacity 180ms ease;`
          });
          label.textContent = valueFormatter(item.avg);
          svg.appendChild(label);
          animatedBars[animatedBars.length - 1].label = label;
        }

        const isDayLabel = options.groupBy === 'day' && /^\d{4}-\d{2}-\d{2}$/.test(item.key);
        const axisFontSize = Math.max(labelFontSize - 1, 10);

        if (isDayLabel) {
          const monthText = formatMonthShortLabel(item.key);
          const dayText = formatDayNumberLabel(item.key);

          if (!currentRun || currentRun.month !== monthText) {
            currentRun = { month: monthText, startX: x, endX: x };
            monthRuns.push(currentRun);
          } else {
            currentRun.endX = x;
          }

          const dayAxis = svgEl('text', {
            x,
            y: height - 12,
            class: 'prod-axis',
            style: `font-size:${axisFontSize}px; font-weight:800;`
          });
          dayAxis.textContent = dayText;
          svg.appendChild(dayAxis);
        } else {
          const axis = svgEl('text', {
            x,
            y: height - 14,
            class: 'prod-axis',
            style: `font-size:${axisFontSize}px; font-weight:700;`
          });
          axis.textContent = item.key;
          svg.appendChild(axis);
        }

        const hit = svgEl('rect', {
          x: x - barW / 2,
          y: finalY,
          width: barW,
          height: finalH,
          class: 'hover-target'
        });
        hit.addEventListener('mousemove', evt => showProductionTooltip(evt, item, valueFormatter, options));
        hit.addEventListener('mouseleave', hideTooltip);
        svg.appendChild(hit);
      });

      if (monthRuns.length) {
        monthRuns.forEach(run => {
          const monthAxis = svgEl('text', {
            x: (run.startX + run.endX) / 2,
            y: height - 30,
            class: 'prod-axis',
            style: 'font-size:10px; font-weight:700; letter-spacing:0.4px;'
          });
          monthAxis.textContent = run.month;
          svg.appendChild(monthAxis);
        });

        if (monthRuns.length > 1) {
          for (let i = 1; i < monthRuns.length; i += 1) {
            const prevRun = monthRuns[i - 1];
            const nextRun = monthRuns[i];
            const separatorX = (prevRun.endX + nextRun.startX) / 2;

            svg.appendChild(svgEl('line', {
              x1: separatorX,
              y1: height - 44,
              x2: separatorX,
              y2: height - 4,
              stroke: 'rgba(255,255,255,0.18)',
              'stroke-width': '1.2'
            }));
          }
        }
      }

      const animateBars = () => {
        const duration = 480;
        const stagger = 28;
        const startTime = performance.now();

        function easeOutCubic(t) {
          return 1 - Math.pow(1 - t, 3);
        }

        function frame(now) {
          let running = false;
          animatedBars.forEach(item => {
            const local = Math.min(Math.max((now - startTime - item.idx * stagger) / duration, 0), 1);
            const eased = easeOutCubic(local);
            if (local < 1) running = true;

            const h = item.finalH * eased;
            const y = item.avg >= 0 ? baselineY - h : baselineY;
            item.bar.setAttribute('y', y);
            item.bar.setAttribute('height', h);

            if (item.label) {
              item.label.style.opacity = local > 0.85 ? '1' : '0';
            }
          });
          if (running) requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);
      };

      if (shouldAnimate) {
        animateBars();
      } else {
        animatedBars.forEach(item => {
          item.bar.setAttribute('y', item.avg >= 0 ? baselineY - item.finalH : baselineY);
          item.bar.setAttribute('height', item.finalH);
          if (item.label) item.label.style.opacity = '1';
        });
      }

      if (wrap) {
        if (!wrap.dataset.interactiveBound) {
          let isDown = false;
          let startX = 0;
          let startScrollLeft = 0;
          wrap.addEventListener('click', evt => {
            if (!evt.target.closest('.hover-target')) hideTooltip();
          });
          wrap.addEventListener('pointerdown', evt => {
            if ((wrap.scrollWidth - wrap.clientWidth) <= 4) return;
            isDown = true;
            startX = evt.clientX;
            startScrollLeft = wrap.scrollLeft;
            wrap.classList.add('dragging');
          });
          window.addEventListener('pointermove', evt => {
            if (!isDown) return;
            wrap.scrollLeft = startScrollLeft - (evt.clientX - startX);
          });
          const stopDrag = () => {
            isDown = false;
            wrap.classList.remove('dragging');
          };
          window.addEventListener('pointerup', stopDrag);
          wrap.addEventListener('pointerleave', stopDrag);
          wrap.addEventListener('wheel', evt => {
            if ((wrap.scrollWidth - wrap.clientWidth) <= 4) return;
            if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
              evt.preventDefault();
              wrap.scrollLeft += evt.deltaY;
            }
          }, { passive: false });
          wrap.dataset.interactiveBound = '1';
        }
        if (scrollNeeded) {
          const moveToRight = () => { wrap.scrollLeft = Math.max(wrap.scrollWidth - wrap.clientWidth, 0); };
          moveToRight();
          requestAnimationFrame(moveToRight);
          requestAnimationFrame(() => requestAnimationFrame(moveToRight));
        } else {
          wrap.scrollLeft = 0;
        }
      }
    }

function renderProductionMetricChart(project, key, forceAnimate = false) {
      const pileRows = getRowsForProject(project);
      const kpRows = getKingPostRowsForProject(project);
      const isKingPosts = overviewActivityMode === 'kingposts' && kpRows.length > 0;
      const configs = {
        gross: {
          svg: els.prodSvgs.gross,
          field: 'asbuilt_durationgross',
          formatter: v => formatNumberOneDecimal(v),
          options: { title: 'Gross Duration', groupBy: prodState.gross }
        },
        drilling: {
          svg: els.prodSvgs.drilling,
          field: 'asbuilt_durationdrilling',
          formatter: v => formatNumberOneDecimal(v),
          options: { title: 'Drilling Duration', groupBy: prodState.drilling }
        },
        cage: {
          svg: els.prodSvgs.cage,
          field: 'asbuilt_durationcage',
          formatter: v => formatNumberOneDecimal(v),
          options: { title: 'Cage Duration', groupBy: prodState.cage }
        },
        concrete: {
          svg: els.prodSvgs.concrete,
          field: 'asbuilt_durationconcrete',
          formatter: v => formatNumberOneDecimal(v),
          options: { title: 'Concrete Duration', groupBy: prodState.concrete }
        },
        overconsumption: {
          svg: els.prodSvgs.overconsumption,
          field: 'asbuilt_overconsumption',
          formatter: formatPercentValue,
          options: { title: 'Over Consumption', isPercent: true, groupBy: prodState.overconsumption }
        },
        overexcavation: {
          svg: els.prodSvgs.overexcavation,
          field: 'asbuilt_overexcavation',
          formatter: v => `${formatNumberOneDecimal(v)} m`,
          options: { title: 'Over Excavation', groupBy: prodState.overexcavation }
        }
      };

      const cfg = configs[key];
      if (!cfg || !cfg.svg) return;

      if (isKingPosts) {
        const kingPostConfigs = {
          gross: {
            data: aggregateKingPostCountBy(
              kpRows.filter(isKingPostPreDrilled),
              prodState.gross,
              row => getKingPostMetricDateKey(row, 'predrilled'),
              row => normalizeText(row.rig1) || 'Pre-Drilled'
            ),
            formatter: v => `${Math.round(v)}`,
            options: { title: 'Pre-Drilled', groupBy: prodState.gross, isCount: true }
          },
          drilling: {
            data: aggregateKingPostCountBy(
              kpRows.filter(isKingPostInstalled),
              prodState.drilling,
              row => getKingPostMetricDateKey(row, 'installed'),
              row => normalizeText(row.profile) || 'Installed'
            ),
            formatter: v => `${Math.round(v)}`,
            options: { title: 'Beam Installation', groupBy: prodState.drilling, isCount: true }
          },
          cage: {
            data: aggregateKingPostAverageBy(
              kpRows,
              row => row.drillingDuration,
              prodState.cage,
              row => getKingPostMetricDateKey(row, 'predrilled')
            ),
            formatter: v => formatNumberOneDecimal(v),
            options: { title: 'Drilling Duration', groupBy: prodState.cage }
          },
          concrete: {
            data: aggregateKingPostAverageBy(
              kpRows,
              row => row.asbuilt_overexcavation,
              prodState.concrete,
              row => getKingPostMetricDateKey(row, 'predrilled')
            ),
            formatter: v => `${formatNumberOneDecimal(v)} m`,
            options: { title: 'Over Excavation', groupBy: prodState.concrete }
          }
        };
        const kpCfg = kingPostConfigs[key];
        if (!kpCfg) {
          while (cfg.svg.firstChild) cfg.svg.removeChild(cfg.svg.firstChild);
          return;
        }
        renderSmallBarChart(
          cfg.svg,
          kpCfg.data,
          kpCfg.formatter,
          { ...kpCfg.options, animate: forceAnimate || !productionChartsInitialized }
        );
        return;
      }

      renderSmallBarChart(
        cfg.svg,
        aggregateAverageBy(pileRows, cfg.field, cfg.options.groupBy),
        cfg.formatter,
        { ...cfg.options, animate: forceAnimate || !productionChartsInitialized }
      );
    }

    function renderProductionPage(project, forceAnimate = false) {
      const cards = Array.from(document.querySelectorAll('#pageProduction .prod-card'));
      const cardEls = {
        gross: cards[0],
        drilling: cards[1],
        cage: cards[2],
        concrete: cards[3],
        overconsumption: cards[4],
        overexcavation: cards[5]
      };
      const setCardMeta = (card, title, subtitle, tag, groups) => {
        if (!card) return;
        const titleEl = card.querySelector('.prod-title');
        const subtitleEl = card.querySelector('.prod-subtitle');
        const tagEl = card.querySelector('.panel-tag');
        if (titleEl) titleEl.textContent = title;
        if (subtitleEl) subtitleEl.textContent = subtitle;
        if (tagEl) tagEl.textContent = tag;
        const buttons = Array.from(card.querySelectorAll('.mini-toggle'));
        buttons.forEach(btn => {
          const visible = groups.includes(btn.dataset.group);
          btn.hidden = !visible;
          btn.style.display = visible ? '' : 'none';
          btn.classList.toggle('active', prodState[btn.dataset.prodKey] === btn.dataset.group);
        });
      };

      const isKingPosts = overviewActivityMode === 'kingposts' && getKingPostRowsForProject(project).length > 0;
      if (isKingPosts) {
        setCardMeta(cardEls.gross, 'Pre-Drilled Output', 'Pre-drilled kingposts by day or CW', 'Nos', ['day', 'cw']);
        setCardMeta(cardEls.drilling, 'Beam Installation', 'Installed kingposts by day or CW', 'Nos', ['day', 'cw']);
        setCardMeta(cardEls.cage, 'Drilling Duration', 'Average duration by day or CW', 'hrs', ['day', 'cw']);
        setCardMeta(cardEls.concrete, 'Over Excavation', 'Average by day, CW, or kingpost', 'm', ['day', 'cw', 'pile']);
        if (cardEls.gross) cardEls.gross.style.display = '';
        if (cardEls.drilling) cardEls.drilling.style.display = '';
        if (cardEls.cage) cardEls.cage.style.display = '';
        if (cardEls.concrete) cardEls.concrete.style.display = '';
        if (cardEls.overconsumption) cardEls.overconsumption.style.display = 'none';
        if (cardEls.overexcavation) cardEls.overexcavation.style.display = 'none';
        ['gross', 'drilling', 'cage', 'concrete'].forEach(key => renderProductionMetricChart(project, key, forceAnimate));
      } else {
        setCardMeta(cardEls.gross, 'Gross Duration', 'Average duration by day or CW', 'hrs', ['day', 'cw']);
        setCardMeta(cardEls.drilling, 'Drilling Duration', 'Average duration by day or CW', 'hrs', ['day', 'cw']);
        setCardMeta(cardEls.cage, 'Cage Duration', 'Average duration by day or CW', 'hrs', ['day', 'cw']);
        setCardMeta(cardEls.concrete, 'Pouring Duration', 'Average duration by day or CW', 'hrs', ['day', 'cw']);
        setCardMeta(cardEls.overconsumption, 'Over Consumption', 'Average by day, CW, or pile', '%', ['day', 'cw', 'pile']);
        setCardMeta(cardEls.overexcavation, 'Over Excavation', 'Average by day, CW, or pile', 'm', ['day', 'cw', 'pile']);
        Object.values(cardEls).forEach(card => {
          if (card) card.style.display = '';
        });
        ['gross', 'drilling', 'cage', 'concrete', 'overconsumption', 'overexcavation']
          .forEach(key => renderProductionMetricChart(project, key, forceAnimate));
      }
      productionChartsInitialized = true;
    }

    function buildChartDataset(rows, metric, mode) {
      if (overviewActivityMode === 'kingposts') {
        const daily = aggregateKingPostMetrics(rows, metric);
        let cumulative = 0;
        return daily.map(item => {
          cumulative += item.value;
          return {
            date: item.date,
            value: mode === 'daily' ? item.value : cumulative,
            dayValue: item.value,
            executedCount: item.executedCount,
            items: item.items,
            cumulative
          };
        });
      }
      const daily = aggregateDailyMetrics(rows, metric);
      let cumulative = 0;
      return daily.map(item => {
        cumulative += item.value;
        return {
          date: item.date,
          value: mode === 'daily' ? item.value : cumulative,
          dayValue: item.value,
          executedCount: item.executedCount,
          items: item.items,
          cumulative
        };
      });
    }

    function svgEl(tag, attrs = {}) {
      const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      return el;
    }

    function clearSvgGroup(node) {
      while (node.firstChild) node.removeChild(node.firstChild);
    }

    function renderChart(rows, project = selectedProject) {
      const data = buildChartDataset(rows, chartMetric, chartMode);
      const plannedData = (chartMode === 'cumulative' && chartMetric === 'piles') ? buildPlannedCurve(rows, data, project) : [];
      if (els.overviewSeriesLegend) {
        const showLegend = chartMode === 'cumulative' && chartMetric === 'piles' && plannedData.length > 0;
        els.overviewSeriesLegend.hidden = !showLegend;
      }
      const titleMetric = metricLabel(chartMetric);
      const granularityLabel = chartGranularity === 'day' ? 'Day' : (chartGranularity === 'week' ? 'Week' : 'Month');
      const useTwoRowMobileDayAxis = window.matchMedia('(max-width: 767px)').matches && chartGranularity === 'day';
      els.chartTitle.textContent = `${chartMode === 'daily' ? 'Daily' : 'Cumulative'} ${titleMetric} by ${granularityLabel}`;
      els.chartTag.textContent = chartMode === 'daily' ? 'Daily' : 'Cumulative';
      clearSvgGroup(els.chartGrid);
      clearSvgGroup(els.chartSeries);
      clearSvgGroup(els.chartLabels);
      clearSvgGroup(els.chartXAxis);

      if (!data.length) return;

      const wrap = els.chartWrap;
      const visiblePoints = 14;
      const wrapWidth = wrap?.clientWidth || 920;
      const wrapHeight = wrap?.clientHeight || 360;
      const width = Math.max(Math.round(wrapWidth), 520);
      const height = Math.max(Math.round(wrapHeight), 320);
      const left = 58;
      const right = 20;
      const top = 20;
      const bottom = useTwoRowMobileDayAxis ? 74 : 56;
      const innerH = height - top - bottom;
      const visibleInnerW = width - left - right;
      const scrollNeeded = data.length > visiblePoints;
      const stepX = scrollNeeded
        ? visibleInnerW / visiblePoints
        : visibleInnerW / Math.max(data.length, 1);
      const innerW = scrollNeeded ? stepX * data.length : visibleInnerW;
      const svgWidth = left + innerW + right;
      const maxVal = Math.max(1, ...data.map(d => d.value), ...plannedData.map(d => d.value || 0));
      const barW = Math.min(34, Math.max(16, stepX * 0.52));

      els.chartSvg.setAttribute('viewBox', `0 0 ${svgWidth} ${height}`);
      els.chartSvg.setAttribute('width', svgWidth);
      els.chartSvg.setAttribute('height', height);
      els.chartSvg.style.width = scrollNeeded ? `${svgWidth}px` : '100%';
      els.chartSvg.style.minWidth = scrollNeeded ? `${svgWidth}px` : '100%';
      els.chartSvg.style.height = '100%';

      chartHoverGuide = null;
      if (chartMode === 'cumulative') {
        chartHoverGuide = svgEl('line', {
          x1: left,
          y1: top,
          x2: left,
          y2: top + innerH,
          stroke: 'rgba(255,255,255,0.55)',
          'stroke-width': '1.5',
          'stroke-dasharray': '6 6',
          style: 'display:none; pointer-events:none;'
        });
        els.chartSeries.appendChild(chartHoverGuide);
      }

      for (let i = 0; i < 5; i += 1) {
        const y = top + (innerH / 4) * i;
        els.chartGrid.appendChild(svgEl('line', { x1: left, y1: y, x2: svgWidth - right, y2: y, stroke: 'rgba(255,255,255,0.06)', 'stroke-width': '1' }));
      }

      if (chartMode === 'daily') {
        const monthRuns = [];
        let currentRun = null;
        const animatedBars = [];
        data.forEach((d, idx) => {
          const x = left + stepX * idx + stepX / 2;
          const h = (d.value / maxVal) * (innerH - 8);
          const y = top + innerH - h;
          const bar = svgEl('rect', { x: x - barW / 2, y: top + innerH, width: barW, height: 0, rx: 8, class: 'bar-shape' });
          els.chartSeries.appendChild(bar);
          const label = svgEl('text', { x, y: y - 8, class: 'bar-label', style: 'opacity:0; transition:opacity 180ms ease;' });
          label.textContent = chartMetric === 'piles' ? d.executedCount : Number(d.value.toFixed(1)).toString();
          els.chartLabels.appendChild(label);
          animatedBars.push({ bar, label, finalY: y, finalH: h, idx });
          const hit = svgEl('rect', { x: x - barW / 2, y, width: barW, height: h, class: 'hover-target' });
          hit.dataset.anchorX = x;
          hit.dataset.anchorY = y;
          hit.addEventListener('mousemove', evt => showTooltip(evt, d, null, { anchorX: x, anchorY: y }));
          hit.addEventListener('mouseleave', hideTooltip);
          els.chartSeries.appendChild(hit);
          if (useTwoRowMobileDayAxis) {
            const monthText = formatMonthShortLabel(d.date);
            const dayText = formatDayNumberLabel(d.date);
            if (!currentRun || currentRun.month !== monthText) {
              currentRun = { month: monthText, startX: x, endX: x };
              monthRuns.push(currentRun);
            } else {
              currentRun.endX = x;
            }
            const dayAxis = svgEl('text', { x, y: height - 18, class: 'axis-label', 'text-anchor': 'middle' });
            dayAxis.textContent = dayText;
            els.chartXAxis.appendChild(dayAxis);
          } else {
            const xLabel = svgEl('text', { x, y: height - 18, class: 'axis-label', 'text-anchor': 'middle' });
            xLabel.textContent = formatPeriodLabel(d.date);
            els.chartXAxis.appendChild(xLabel);
          }
        });

        if (useTwoRowMobileDayAxis && monthRuns.length) {
          monthRuns.forEach(run => {
            const monthAxis = svgEl('text', {
              x: (run.startX + run.endX) / 2,
              y: height - 38,
              class: 'axis-label',
              'text-anchor': 'middle',
              style: 'font-size:10px; font-weight:700; letter-spacing:0.25px;'
            });
            monthAxis.textContent = run.month;
            els.chartXAxis.appendChild(monthAxis);
          });
        }

        const startTime = performance.now();
        const duration = 520;
        const stagger = 26;
        const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
        const frame = now => {
          let running = false;
          animatedBars.forEach(item => {
            const local = Math.min(Math.max((now - startTime - item.idx * stagger) / duration, 0), 1);
            const eased = easeOutCubic(local);
            if (local < 1) running = true;
            const h = item.finalH * eased;
            const y = (top + innerH) - h;
            item.bar.setAttribute('y', y);
            item.bar.setAttribute('height', h);
            item.label.style.opacity = local > 0.82 ? '1' : '0';
          });
          if (running) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      } else {
        const monthRuns = [];
        let currentRun = null;
        let path = '';
        let area = `M ${left} ${top + innerH}`;
        let plannedPath = '';
        data.forEach((d, idx) => {
          const x = left + stepX * idx + stepX / 2;
          const y = top + innerH - (d.value / maxVal) * (innerH - 10);
          path += `${idx === 0 ? 'M' : 'L'} ${x} ${y} `;
          area += ` L ${x} ${y}`;

          if (plannedData[idx]) {
            const plannedY = top + innerH - (plannedData[idx].value / maxVal) * (innerH - 10);
            plannedPath += `${idx === 0 ? 'M' : 'L'} ${x} ${plannedY} `;
          }

          els.chartSeries.appendChild(svgEl('circle', { cx: x, cy: y, r: 5.5, class: 'point-dot' }));
          const label = svgEl('text', { x, y: y - 10, class: 'point-label' });
          label.textContent = chartMetric === 'piles' ? Math.round(d.value).toString() : Number(d.value.toFixed(1)).toString();
          els.chartLabels.appendChild(label);
          const hit = svgEl('rect', { x: x - stepX / 2, y: top, width: stepX, height: innerH + bottom, class: 'hover-target' });
          hit.dataset.anchorX = x;
          hit.dataset.anchorY = y;
          hit.addEventListener('mousemove', evt => showTooltip(evt, d, plannedData[idx], { anchorX: x, anchorY: y, showGuide: true }));
          hit.addEventListener('mouseleave', hideTooltip);
          els.chartSeries.appendChild(hit);
          if (useTwoRowMobileDayAxis) {
            const monthText = formatMonthShortLabel(d.date);
            const dayText = formatDayNumberLabel(d.date);
            if (!currentRun || currentRun.month !== monthText) {
              currentRun = { month: monthText, startX: x, endX: x };
              monthRuns.push(currentRun);
            } else {
              currentRun.endX = x;
            }
            const dayAxis = svgEl('text', { x, y: height - 18, class: 'axis-label', 'text-anchor': 'middle' });
            dayAxis.textContent = dayText;
            els.chartXAxis.appendChild(dayAxis);
          } else {
            const xLabel = svgEl('text', { x, y: height - 18, class: 'axis-label', 'text-anchor': 'middle' });
            xLabel.textContent = formatPeriodLabel(d.date);
            els.chartXAxis.appendChild(xLabel);
          }
        });
        if (useTwoRowMobileDayAxis && monthRuns.length) {
          monthRuns.forEach(run => {
            const monthAxis = svgEl('text', {
              x: (run.startX + run.endX) / 2,
              y: height - 38,
              class: 'axis-label',
              'text-anchor': 'middle',
              style: 'font-size:10px; font-weight:700; letter-spacing:0.25px;'
            });
            monthAxis.textContent = run.month;
            els.chartXAxis.appendChild(monthAxis);
          });
        }
        const lastX = left + stepX * (data.length - 1) + stepX / 2;
        area += ` L ${lastX} ${top + innerH} Z`;

        const areaEl = svgEl('path', { d: area, class: 'area-shape', style: 'opacity:0; transition:opacity 260ms ease;' });
        els.chartSeries.appendChild(areaEl);

        let plannedEl = null;
        if (plannedPath) {
          plannedEl = svgEl('path', {
            d: plannedPath.trim(),
            fill: 'none',
            stroke: 'rgba(255,255,255,0.72)',
            'stroke-width': '2',
            'stroke-dasharray': '8 6',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round'
          });
          els.chartSeries.appendChild(plannedEl);
        }

        const lineEl = svgEl('path', { d: path.trim(), class: 'line-shape' });
        els.chartSeries.appendChild(lineEl);

        const animatePath = pathEl => {
          const length = pathEl.getTotalLength();
          pathEl.style.strokeDasharray = `${length}`;
          pathEl.style.strokeDashoffset = `${length}`;
          pathEl.style.transition = 'stroke-dashoffset 700ms cubic-bezier(.22,.61,.36,1)';
          requestAnimationFrame(() => { pathEl.style.strokeDashoffset = '0'; });
        };

        requestAnimationFrame(() => {
          areaEl.style.opacity = '1';
          animatePath(lineEl);
          if (plannedEl) animatePath(plannedEl);
          Array.from(els.chartLabels.children).forEach((label, idx) => {
            label.style.opacity = '0';
            label.style.transition = 'opacity 180ms ease';
            setTimeout(() => { label.style.opacity = '1'; }, 280 + idx * 18);
          });
          Array.from(els.chartSeries.querySelectorAll('.point-dot')).forEach((dot, idx) => {
            dot.style.opacity = '0';
            dot.style.transformOrigin = 'center';
            dot.style.transition = 'opacity 180ms ease';
            setTimeout(() => { dot.style.opacity = '1'; }, 260 + idx * 18);
          });
        });
      }

      if (wrap) {
        if (!wrap.dataset.interactiveBound) {
          let isDown = false;
          let startX = 0;
          let startScrollLeft = 0;
          wrap.addEventListener('click', evt => {
            if (!evt.target.closest('.hover-target')) hideTooltip();
          });
          wrap.addEventListener('pointerdown', evt => {
            if ((wrap.scrollWidth - wrap.clientWidth) <= 4) return;
            isDown = true;
            startX = evt.clientX;
            startScrollLeft = wrap.scrollLeft;
            wrap.classList.add('dragging');
          });

          window.addEventListener('pointermove', evt => {
            if (!isDown) return;
            wrap.scrollLeft = startScrollLeft - (evt.clientX - startX);
          });

          const stopDrag = () => {
            isDown = false;
            wrap.classList.remove('dragging');
          };

          window.addEventListener('pointerup', stopDrag);
          wrap.addEventListener('pointerleave', stopDrag);
          wrap.addEventListener('wheel', evt => {
            if ((wrap.scrollWidth - wrap.clientWidth) <= 4) return;
            if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
              evt.preventDefault();
              wrap.scrollLeft += evt.deltaY;
            }
          }, { passive: false });

          wrap.dataset.interactiveBound = '1';
        }

        if (scrollNeeded) {
          wrap.scrollLeft = Math.max(wrap.scrollWidth - wrap.clientWidth, 0);
        } else {
          wrap.scrollLeft = 0;
        }
      }
    }

    function showTooltip(evt, dataPoint, plannedPoint = null, options = {}) {
      const wrap = els.chartWrap;
      let html = `<div class="tooltip-title">${periodTitle(dataPoint.date)}</div>`;
      if (chartMode === 'daily') {
        if (overviewActivityMode === 'kingposts') {
          const label = chartMetric === 'predrilled'
            ? 'Pre-Drilled'
            : chartMetric === 'installed'
              ? 'Beam Installed'
              : 'Drilled Lm';
          const unit = metricUnit(chartMetric);
          html += `<div class="tooltip-row"><span>${label}</span><strong>${Number(dataPoint.value.toFixed(1)).toLocaleString()}${chartMetric === 'lm' ? ` ${unit}` : ''}</strong></div>`;
          if (chartGranularity === 'day' && dataPoint.items.length) {
            html += `<div class="tooltip-list">${dataPoint.items.map(item => `<div class="tooltip-list-item"><span>${item.id || '-'}</span><span>${item.status || item.machine || '-'}</span></div>`).join('')}</div>`;
          } else {
            html += `<div class="tooltip-row"><span>Elements</span><strong>${dataPoint.executedCount}</strong></div>`;
          }
        } else if (chartMetric === 'piles') {
          html += `<div class="tooltip-row"><span>Piles Executed</span><strong>${dataPoint.executedCount}</strong></div>`;
          if (chartGranularity === 'day' && dataPoint.items.length) {
            html += `<div class="tooltip-list">${dataPoint.items.map(item => `<div class="tooltip-list-item"><span>${item.id || '-'}</span><span>${item.machine || '-'}</span></div>`).join('')}</div>`;
          }
        } else {
          const unit = metricUnit(chartMetric);
          html += `<div class="tooltip-row"><span>${metricLabel(chartMetric)}</span><strong>${Number(dataPoint.value.toFixed(1)).toLocaleString()} ${unit}</strong></div>`;
          html += `<div class="tooltip-row"><span>Piles Executed</span><strong>${dataPoint.executedCount}</strong></div>`;
        }
      } else {
        const unit = metricUnit(chartMetric);
        const executedLabel = overviewActivityMode === 'kingposts'
          ? (chartMetric === 'predrilled' ? 'Pre-Drilled This ' : chartMetric === 'installed' ? 'Installed This ' : 'Drilled This ')
          : 'Executed This ';
        html += `<div class="tooltip-row"><span>${executedLabel}${chartGranularity === 'day' ? 'Date' : 'Period'}</span><strong>${Number(dataPoint.dayValue.toFixed(1)).toLocaleString()} ${unit}</strong></div>`;
        html += `<div class="tooltip-row"><span>Cumulative</span><strong>${Number(dataPoint.value.toFixed(1)).toLocaleString()} ${unit}</strong></div>`;
        if (chartMetric === 'piles' && plannedPoint) {
          html += `<div class="tooltip-row"><span>Planned</span><strong>${Number(plannedPoint.value.toFixed(1)).toLocaleString()} piles</strong></div>`;
          html += `<div class="tooltip-row"><span>Variance</span><strong>${Number((dataPoint.value - plannedPoint.value).toFixed(1)).toLocaleString()} piles</strong></div>`;
        }

      }
      els.chartTooltip.innerHTML = html;
      els.chartTooltip.classList.add('visible');
      wrap.appendChild(els.chartTooltip);

      const tooltipHeight = chartMode === 'daily' && chartMetric === 'piles' ? 190 : 150;
      const anchorX = Number(options.anchorX || evt.currentTarget?.dataset?.anchorX || 0);
      const anchorY = Number(options.anchorY || evt.currentTarget?.dataset?.anchorY || 0);
      placeTooltipInScrollWrap(els.chartTooltip, wrap, anchorX, anchorY, 280, tooltipHeight);

      if (chartHoverGuide && options.showGuide) {
        chartHoverGuide.setAttribute('x1', anchorX);
        chartHoverGuide.setAttribute('x2', anchorX);
        chartHoverGuide.style.display = 'block';
      }
    }

    function hideTooltip() {
      els.chartTooltip.classList.remove('visible');
      els.chartTooltip.style.position = '';
      els.chartTooltip.style.left = '';
      els.chartTooltip.style.top = '';
      els.chartTooltip.innerHTML = '';
      if (chartHoverGuide) chartHoverGuide.style.display = 'none';
    }

    function hideChartTooltipsOnOutsideInteraction(evt) {
      const target = evt.target;
      if (!target) return;
      if (target.closest('.hover-target')) return;
      if (target.closest('.chart-tooltip')) return;
      hideTooltip();
      hideTimelineTooltip();
      hideUtilizationTimelineTooltip();
      if (typeof window.hideCostTtp === 'function') window.hideCostTtp();
    }

    function syncModeToggleUI() {
      const btn = document.getElementById('modeToggle');
      const isCumulative = chartMode === 'cumulative';
      btn.classList.toggle('on', isCumulative);
      btn.setAttribute('aria-pressed', isCumulative ? 'true' : 'false');
      els.modeLabelCumulative.classList.toggle('active', isCumulative);
    }

    function toggleMode() {
      chartMode = chartMode === 'daily' ? 'cumulative' : 'daily';
      syncModeToggleUI();
      renderDashboard(selectedProject);
    }

    function setMetric(metric) {
      chartMetric = metric;
      els.metricToggleButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.metric === metric));
      renderDashboard(selectedProject);
    }

    function setGranularity(granularity) {
      chartGranularity = granularity;
      els.granularityToggleButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.granularity === granularity));
      renderDashboard(selectedProject);
    }

    function renderDashboard(project) {
      const rows = getRowsForProject(project);
      const stats = computeStats(rows, project);
      const avgBasisLabel = '7CD';
      els.pageSubtitle.textContent = getScopeSubtitle();
      els.kpiTotal.textContent = stats.total.toLocaleString();
      els.kpiExecuted.textContent = stats.completed.toLocaleString();
      els.kpiRemaining.textContent = stats.remaining.toLocaleString();
      els.kpiRigs.textContent = stats.activeRigs.toLocaleString();
      els.kpiAvg.textContent = stats.avgPiles ? stats.avgPiles.toLocaleString() + ' pile/d' : '0 pile/d';
      if (els.kpiAvgMetaL) els.kpiAvgMetaL.textContent = stats.avgLm ? stats.avgLm.toLocaleString() + ' Lm' : '0 Lm';
      els.kpiAvgMeta.textContent = avgBasisLabel;
      els.kpiEta.textContent = stats.etaDate ? formatDateLabel(stats.etaDate) : 'ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â';
      els.kpiTotalMetaR.textContent = 'Live';
      els.kpiCompletedMetaL.textContent = `${stats.progress.toFixed(1)}% executed`;
      els.kpiCompletedMetaR.textContent = `${stats.yesterdayExecuted} yesterday`;
      els.kpiRemainingMetaR.textContent = `${(100 - stats.progress).toFixed(1)}%`;
      els.kpiEtaDays.textContent = stats.etaMonths !== null ? `${stats.etaMonths.toFixed(1)} mo` : 'ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â';
      renderChart(rows, project);
      renderExecutionMatrix(rows);
      if (activePage === 'production') renderProductionPage(project);
    }

    function renderDashboard(project) {
      syncOverviewActivityMode(project);
      syncOverviewMetricButtons();

      const rows = overviewActivityMode === 'kingposts'
        ? getKingPostRowsForProject(project)
        : getRowsForProject(project);
      const avgBasisLabel = '7CD';
      const totalLabel = els.kpiTotal?.closest('.kpi-card')?.querySelector('.kpi-label');
      const executedLabel = els.kpiExecuted?.closest('.kpi-card')?.querySelector('.kpi-label');
      const remainingLabel = els.kpiRemaining?.closest('.kpi-card')?.querySelector('.kpi-label');
      const rigsLabel = els.kpiRigs?.closest('.kpi-card')?.querySelector('.kpi-label');
      const avgLabel = els.kpiAvg?.closest('.kpi-card')?.querySelector('.kpi-label');
      const etaLabel = els.kpiEta?.closest('.kpi-card')?.querySelector('.kpi-label');

      els.pageSubtitle.textContent = getScopeSubtitle();

      if (overviewActivityMode === 'kingposts') {
        const stats = computeKingPostStats(rows);

        if (totalLabel) totalLabel.textContent = 'Total KingPosts';
        if (executedLabel) executedLabel.textContent = 'Pre-Drilled';
        if (remainingLabel) remainingLabel.textContent = 'Beam Installed';
        if (rigsLabel) rigsLabel.textContent = 'Active Rigs';
        if (avgLabel) avgLabel.textContent = 'Avg Production (6WD)';
        if (etaLabel) etaLabel.textContent = 'Est Completion';

        els.kpiTotal.textContent = stats.total.toLocaleString();
        els.kpiExecuted.textContent = stats.predrilled.toLocaleString();
        els.kpiRemaining.textContent = stats.completed.toLocaleString();
        els.kpiRigs.textContent = stats.activeRigs.toLocaleString();
        els.kpiAvg.textContent = stats.avgPredrilled ? `${stats.avgPredrilled.toLocaleString()} kp/d` : '0 kp/d';
        if (els.kpiTotalMetaL) els.kpiTotalMetaL.textContent = 'Design Qty';
        if (els.kpiTotalMetaR) els.kpiTotalMetaR.textContent = 'Live';
        if (els.kpiCompletedMetaL) els.kpiCompletedMetaL.textContent = `${stats.predrilled.toLocaleString()} ready to install`;
        if (els.kpiCompletedMetaR) els.kpiCompletedMetaR.textContent = `${stats.yesterdayInstalled} installed yesterday`;
        if (els.kpiRemainingMetaL) els.kpiRemainingMetaL.textContent = `${stats.progress.toFixed(1)}% complete`;
        if (els.kpiRemainingMetaR) els.kpiRemainingMetaR.textContent = `${stats.remaining.toLocaleString()} remaining`;
        if (els.kpiAvgMetaL) els.kpiAvgMetaL.textContent = stats.avgLm ? `${stats.avgLm.toLocaleString()} Lm` : '0 Lm';
        if (els.kpiAvgMeta) els.kpiAvgMeta.textContent = avgBasisLabel;
        els.kpiEta.textContent = stats.etaDate ? formatDateLabel(stats.etaDate) : '—';
        if (els.kpiEtaMeta) els.kpiEtaMeta.textContent = 'Duration';
        if (els.kpiEtaDays) els.kpiEtaDays.textContent = stats.etaMonths !== null ? `${stats.etaMonths.toFixed(1)} mo` : '—';

        if (els.overviewMatrixTitle) els.overviewMatrixTitle.textContent = 'KingPost Activity Matrix';
        if (els.overviewMatrixTag) els.overviewMatrixTag.textContent = 'Live';
        if (els.overviewMatrixHead1) els.overviewMatrixHead1.textContent = 'Date';
        if (els.overviewMatrixHead2) els.overviewMatrixHead2.textContent = 'ID';
        if (els.overviewMatrixHead3) els.overviewMatrixHead3.textContent = 'Depth';
        if (els.overviewMatrixHead4) els.overviewMatrixHead4.textContent = 'Status';
      } else {
        const stats = computeStats(rows, project);

        if (totalLabel) totalLabel.textContent = 'Total Piles';
        if (executedLabel) executedLabel.textContent = 'Piles Completed';
        if (remainingLabel) remainingLabel.textContent = 'Piles Remaining';
        if (rigsLabel) rigsLabel.textContent = 'Active Rigs';
        if (avgLabel) avgLabel.textContent = 'Avg Production (6WD)';
        if (etaLabel) etaLabel.textContent = 'Est Completion';

        els.kpiTotal.textContent = stats.total.toLocaleString();
        els.kpiExecuted.textContent = stats.completed.toLocaleString();
        els.kpiRemaining.textContent = stats.remaining.toLocaleString();
        els.kpiRigs.textContent = stats.activeRigs.toLocaleString();
        els.kpiAvg.textContent = stats.avgPiles ? `${stats.avgPiles.toLocaleString()} pile/d` : '0 pile/d';
        if (els.kpiTotalMetaL) els.kpiTotalMetaL.textContent = 'Design Qty';
        if (els.kpiTotalMetaR) els.kpiTotalMetaR.textContent = 'Live';
        if (els.kpiCompletedMetaL) els.kpiCompletedMetaL.textContent = `${stats.progress.toFixed(1)}% executed`;
        if (els.kpiCompletedMetaR) els.kpiCompletedMetaR.textContent = `${stats.yesterdayExecuted} yesterday`;
        if (els.kpiRemainingMetaL) els.kpiRemainingMetaL.textContent = 'Remaining to execute';
        if (els.kpiRemainingMetaR) els.kpiRemainingMetaR.textContent = `${(100 - stats.progress).toFixed(1)}%`;
        if (els.kpiAvgMetaL) els.kpiAvgMetaL.textContent = stats.avgLm ? `${stats.avgLm.toLocaleString()} Lm` : '0 Lm';
        if (els.kpiAvgMeta) els.kpiAvgMeta.textContent = avgBasisLabel;
        els.kpiEta.textContent = stats.etaDate ? formatDateLabel(stats.etaDate) : '—';
        if (els.kpiEtaMeta) els.kpiEtaMeta.textContent = 'Duration';
        if (els.kpiEtaDays) els.kpiEtaDays.textContent = stats.etaMonths !== null ? `${stats.etaMonths.toFixed(1)} mo` : '—';

        if (els.overviewMatrixTitle) els.overviewMatrixTitle.textContent = 'Executed Piles Matrix';
        if (els.overviewMatrixTag) els.overviewMatrixTag.textContent = 'CW';
        if (els.overviewMatrixHead1) els.overviewMatrixHead1.textContent = 'CW / Date';
        if (els.overviewMatrixHead2) els.overviewMatrixHead2.textContent = 'ID';
        if (els.overviewMatrixHead3) els.overviewMatrixHead3.textContent = 'Lm';
        if (els.overviewMatrixHead4) els.overviewMatrixHead4.textContent = 'm3';
      }

      renderChart(rows, project);
      renderExecutionMatrix(rows);
      if (activePage === 'production') renderProductionPage(project);
    }

    async function loadDashboardData() {
      setAppLoading(true, 'Loading dashboard', 'Refreshing live project data and preparing visuals.');
      els.dataSourceChip.textContent = 'Loading Source';
      const data = await fetchWorkerJson(DATA_FILE_KEYS.piles);
      const sourceRows = extractPileList(data);
      rawRows = sourceRows;
      if (!currentUser) throw new Error('Sign in required');

      try {
        const kingPostData = await fetchWorkerJson(DATA_FILE_KEYS.kingpost);
        kingPostRows = extractKingPostList(kingPostData);
      } catch (err) {
        console.error('Unable to load kingpost source:', err);
        kingPostRows = [];
      }

      if (!rawRows.length && !kingPostRows.length) {
        throw new Error('No rows found in project sources');
      }

      try {
        const manpowerData = await fetchWorkerJson(DATA_FILE_KEYS.manpower);
        manpowerRows = extractManpowerList(manpowerData);
      } catch (err) {
        console.error('Unable to load manpower source:', err);
        manpowerRows = [];
      }

      try {
        const companyManpowerData = await fetchWorkerJson(DATA_FILE_KEYS.manpowers);
        companyManpowerRows = extractCompanyManpowerList(companyManpowerData);
      } catch (err) {
        console.error('Unable to load company manpower source:', err);
        companyManpowerRows = [];
      }

      try {
        const equipmentData = await fetchWorkerJson(DATA_FILE_KEYS.equipment);
        equipmentRegistryRows = extractEquipmentRegistryList(equipmentData);
      } catch (err) {
        console.error('Unable to load equipment registry source:', err);
        equipmentRegistryRows = [];
      }

      try {
        const dailyReportEquipmentData = await fetchWorkerJson(DATA_FILE_KEYS.dailyrigs);
        dailyReportEquipmentRows = extractDailyReportEquipmentList(dailyReportEquipmentData);
      } catch (err) {
        console.error('Unable to load daily report equipment source:', err);
        dailyReportEquipmentRows = [];
      }

      try {
        const rigProductionData = await fetchWorkerJson(DATA_FILE_KEYS.rigproduction);
        rigProductionRows = extractRigProductionList(rigProductionData);
      } catch (err) {
        console.error('Unable to load rig production source:', err);
        rigProductionRows = [];
      }

      syncProjectScopeFromData();
      broadcastAuthContext();
      updateCompanyExportProjectOptions();
      updateCompanyDesignationOptions();
      updateCompanyAnalyticsDesignationOptions();

      setAppLoading(true, 'Rendering dashboard', 'Applying role filters, summaries, and charts.');
      renderDashboard(selectedProject);
      if (activePage === 'utilization') renderUtilizationPage(selectedProject);
      if (activePage === 'manpower') renderManpowerPage(selectedProject);
      if (activePage === 'companymanpower') renderCompanyManpowerPage(selectedProject);
      if (activePage === 'companyanalytics') renderCompanyAnalyticsPage(selectedProject);
      els.dataSourceChip.textContent = 'Live Data Source';
      setAppLoading(false);
    }

    async function refreshDashboardData() {
      if (!currentUser) {
        setAuthLocked(true);
        return;
      }
      if (els.refreshDashboardBtn) {
        els.refreshDashboardBtn.disabled = true;
        els.refreshDashboardBtn.textContent = 'Refreshing...';
      }
      try {
        if (typeof window.refreshAppToLatestBuild === 'function') {
          await window.refreshAppToLatestBuild();
          return;
        }
        await loadDashboardData();
      } catch (err) {
        console.error(err);
        els.dataSourceChip.textContent = 'Source Error';
        setAppLoading(false);
      } finally {
        if (els.refreshDashboardBtn) {
          els.refreshDashboardBtn.disabled = false;
          els.refreshDashboardBtn.textContent = 'Refresh Dashboard';
        }
      }
    }


    function getRowDate(row, keys) {
      for (const key of keys) {
        const value = row?.[key];
        if (!value) continue;
        const d = new Date(value);
        if (!Number.isNaN(d.getTime())) return d;
      }
      return null;
    }

    function hoursBetween(start, end) {
      if (!(start instanceof Date) || !(end instanceof Date)) return null;
      const diff = (end.getTime() - start.getTime()) / 36e5;
      return Number.isFinite(diff) && diff >= 0 ? diff : null;
    }

    function signedHoursBetween(start, end) {
      if (!(start instanceof Date) || !(end instanceof Date)) return null;
      const diff = (end.getTime() - start.getTime()) / 36e5;
      return Number.isFinite(diff) ? diff : null;
    }
    function formatDateTimeLabel(value) {
      if (!(value instanceof Date) || Number.isNaN(value.getTime())) return 'N/A';
      return value.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Dubai'
      });
    }

    function formatTimelineHeaderDate(value) {
      if (!(value instanceof Date) || Number.isNaN(value.getTime())) return 'N/A';
      return value.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        timeZone: 'Asia/Dubai'
      });
    }

    function buildPileTimelineRows(rows) {
      const candidates = rows.map(row => {
        const drillStart = getRowDate(row, ['asbuilt_drillingStart', 'asbuilt_drillingstart', 'asbuilt_DrillingStart']);
        const drillEnd = getRowDate(row, ['asbuilt_drillingEnd', 'asbuilt_drillingend', 'asbuilt_DrillingEnd']);
        const cageStart = getRowDate(row, ['asbuilt_cageStart', 'asbuilt_cagestart', 'asbuilt_CageStart']);
        const cageEnd = getRowDate(row, ['asbuilt_cageEnd', 'asbuilt_cageend', 'asbuilt_CageEnd']);
        const pourStart = getRowDate(row, ['asbuilt_concreteStart', 'asbuilt_concretestart', 'asbuilt_ConcreteStart']);
        const pourEnd = getRowDate(row, ['asbuilt_concreteEnd', 'asbuilt_concreteend', 'asbuilt_ConcreteEnd']);
        const id = normalizeText(row.id || row.pileId || row.PileID || row.name);
        if (!id) return null;
        const machine = normalizeText(row.machine);
        const machineDepthRaw = Number(row.machine1depth);
        const machineDepth = Number.isFinite(machineDepthRaw) && machineDepthRaw > 0 ? machineDepthRaw : null;

        const activities = [
          { key: 'drilling', label: 'Drilling', color: '#4ade80', start: drillStart, end: drillEnd, duration: Number(row.asbuilt_durationdrilling) || hoursBetween(drillStart, drillEnd) || 0, machine, machineDepth },
          { key: 'cage', label: 'Cage Installation', color: '#c4e45f', start: cageStart, end: cageEnd, duration: Number(row.asbuilt_durationcage) || hoursBetween(cageStart, cageEnd) || 0 },
          { key: 'pouring', label: 'Pouring', color: '#4b92c6', start: pourStart, end: pourEnd, duration: Number(row.asbuilt_durationconcrete) || hoursBetween(pourStart, pourEnd) || 0 }
        ].filter(a => a.start && a.end && a.end >= a.start);

        if (!activities.length) return null;

        const gap1 = drillEnd && cageStart ? signedHoursBetween(drillEnd, cageStart) : null;
        const gap2 = cageEnd && pourStart ? signedHoursBetween(cageEnd, pourStart) : null;
        const gross = Number(row.asbuilt_durationgross) || (drillStart && pourEnd ? hoursBetween(drillStart, pourEnd) : null) || 0;
        const designDepth = Number(row.design_depth);
        const asbuiltDepth = Number(row.asbuilt_depth);

        return {
          id,
          row,
          length: Number.isFinite(asbuiltDepth) && asbuiltDepth > 0 ? asbuiltDepth : (Number.isFinite(designDepth) ? designDepth : 0),
          activities,
          drillStart,
          drillEnd,
          cageStart,
          cageEnd,
          pourStart,
          pourEnd,
          drilling: Number(row.asbuilt_durationdrilling) || hoursBetween(drillStart, drillEnd) || 0,
          cage: Number(row.asbuilt_durationcage) || hoursBetween(cageStart, cageEnd) || 0,
          pouring: Number(row.asbuilt_durationconcrete) || hoursBetween(pourStart, pourEnd) || 0,
          gap1,
          gap2,
          gross,
          minStart: new Date(Math.min(...activities.map(a => a.start.getTime()))),
          maxEnd: new Date(Math.max(...activities.map(a => a.end.getTime())))
        };
      }).filter(Boolean);

      return candidates.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
    }

    function buildKingPostTimelineRows(rows) {
      const candidates = rows.map(row => {
        const drillStart = getRowDate(row, ['drillingStart', 'asbuilt_DrillingStart', 'asbuilt_drillingStart']);
        const drillEnd = getRowDate(row, ['drillingEnd', 'asbuilt_DrillingEnd', 'asbuilt_drillingEnd']);
        const beamDate = getRowDate(row, ['beamInstallation', 'BeamInstallation']);
        const id = normalizeText(row.id || row.PileID || row.name);
        if (!id) return null;
        const rig = normalizeText(row.rig1 || row.asbuilt_Rig1);
        const rigDepthRaw = Number(row.rig1Depth ?? row.asbuilt_Rig1Depth);
        const rigDepth = Number.isFinite(rigDepthRaw) && rigDepthRaw > 0 ? rigDepthRaw : null;
        const drillDuration = Number(row.drillingDuration ?? row.asbuilt_DurationDrilling) || hoursBetween(drillStart, drillEnd) || 0;
        const beamDuration = beamDate ? 1 : 0;

        const activities = [];
        if (drillStart && drillEnd && drillEnd >= drillStart) {
          activities.push({
            key: 'drilling',
            label: 'Drilling',
            color: '#4ade80',
            start: drillStart,
            end: drillEnd,
            duration: drillDuration,
            machine: rig,
            machineDepth: rigDepth
          });
        }
        if (beamDate) {
          const beamEnd = new Date(beamDate.getTime() + beamDuration * 36e5);
          activities.push({
            key: 'beam',
            label: 'Beam Installation',
            color: '#4b92c6',
            start: beamDate,
            end: beamEnd,
            duration: beamDuration
          });
        }
        if (!activities.length) return null;

        const lengthRaw = Number(row.asbuiltDepth ?? row.asbuilt_depth ?? row.designDepthDrilling ?? row.design_DepthDrilling);
        const gross = drillStart && beamDate
          ? Math.max(beamDuration, hoursBetween(drillStart, new Date(beamDate.getTime() + beamDuration * 36e5)) || 0)
          : (drillDuration || beamDuration);

        return {
          id,
          row,
          length: Number.isFinite(lengthRaw) ? lengthRaw : 0,
          status: beamDate ? 'Installed' : (isKingPostPreDrilled(row) ? 'Pre-Drilled' : 'Pending'),
          activities,
          drillStart,
          drillEnd,
          beamStart: beamDate,
          beamEnd: beamDate ? new Date(beamDate.getTime() + beamDuration * 36e5) : null,
          drilling: drillDuration,
          beam: beamDuration,
          cage: null,
          pouring: null,
          gap1: null,
          gap2: null,
          gross,
          minStart: new Date(Math.min(...activities.map(a => a.start.getTime()))),
          maxEnd: new Date(Math.max(...activities.map(a => a.end.getTime())))
        };
      }).filter(Boolean);

      return candidates.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
    }

    function timelineRowsForProject(project) {
      if (overviewActivityMode === 'kingposts' && hasKingPostActivity(project)) {
        return buildKingPostTimelineRows(getKingPostRowsForProject(project));
      }
      return buildPileTimelineRows(getRowsForProject(project));
    }

    function getTimelineRowsForPileFilter(project) {
      const rows = timelineRowsForProject(project);
      const start = timelineState.start ? new Date(`${timelineState.start}T00:00:00Z`) : null;
      const end = timelineState.end ? new Date(`${timelineState.end}T23:59:59Z`) : null;
      return rows.filter(item => {
        if (start && item.maxEnd < start) return false;
        if (end && item.minStart > end) return false;
        return true;
      });
    }


    function getTimelineFilteredRows(project) {
      const rows = timelineRowsForProject(project);
      const pile = timelineState.pile;
      const start = timelineState.start ? new Date(`${timelineState.start}T00:00:00Z`) : null;
      const end = timelineState.end ? new Date(`${timelineState.end}T23:59:59Z`) : null;

      return rows.filter(item => {
        if (pile !== 'all' && item.id !== pile) return false;
        if (start && item.maxEnd < start) return false;
        if (end && item.minStart > end) return false;
        return true;
      });
    }

    function updateTimelinePileList(project) {
      if (!els.timelinePileList) return;
      const rows = getTimelineRowsForPileFilter(project).slice().sort((a, b) => {
        const dateDiff = b.maxEnd.getTime() - a.maxEnd.getTime();
        if (dateDiff !== 0) return dateDiff;
        return a.id.localeCompare(b.id, undefined, { numeric: true });
      });
      const searchRaw = normalizeText(timelineState.pileSearch).toLowerCase();
      const searchNeedle = searchRaw.startsWith('p') ? searchRaw : `p${searchRaw}`;
      const filteredRows = rows.filter(row => {
        if (!searchRaw) return true;
        const id = normalizeText(row.id).toLowerCase();
        return id.includes(searchRaw) || id.includes(searchNeedle);
      });
      const pileIds = filteredRows.map(r => r.id);

      if (timelineState.pile !== 'all' && !pileIds.includes(timelineState.pile)) {
        timelineState.pile = 'all';
      }

      els.timelinePileList.innerHTML = '';
      const makeBtn = (label, value) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'timeline-chip' + (timelineState.pile === value ? ' active' : '');
        btn.textContent = label;
        btn.addEventListener('click', () => {
          timelineState.pile = value;
          updateTimelinePileList(project);
          renderTimelinePage(project);
        });
        return btn;
      };

      els.timelinePileList.appendChild(makeBtn('All', 'all'));
      pileIds.forEach(id => els.timelinePileList.appendChild(makeBtn(id, id)));
    }

    function renderTimelineTable(rows) {
      if (!els.timelineTableBody) return;
      const isKingPosts = overviewActivityMode === 'kingposts';
      if (!rows.length) {
        els.timelineTableBody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:rgba(244,247,251,0.62);">No data</td></tr>`;
        return;
      }
      if (isKingPosts) {
        els.timelineTableBody.innerHTML = rows.map(item => `
          <tr>
            <td>${item.id}</td>
            <td>${formatNumberOneDecimal(item.length)}</td>
            <td>${formatNumberOneDecimal(item.drilling)} hr</td>
            <td>${item.beam ? `${formatNumberOneDecimal(item.beam)} hr` : '-'}</td>
            <td>${item.status || '-'}</td>
            <td>-</td>
            <td>-</td>
            <td>${formatNumberOneDecimal(item.gross)} hr</td>
          </tr>
        `).join('');
        return;
      }
      els.timelineTableBody.innerHTML = rows.map(item => `
        <tr>
          <td>${item.id}</td>
          <td>${formatNumberOneDecimal(item.length)}</td>
          <td>${formatNumberOneDecimal(item.drilling)} hr</td>
          <td>${formatNumberOneDecimal(item.cage)} hr</td>
          <td>${formatNumberOneDecimal(item.pouring)} hr</td>
          <td>${Number.isFinite(item.gap1) ? `${formatNumberOneDecimal(item.gap1)} hr` : '-'}</td>
          <td>${Number.isFinite(item.gap2) ? `${formatNumberOneDecimal(item.gap2)} hr` : '-'}</td>
          <td>${formatNumberOneDecimal(item.gross)} hr</td>
        </tr>
      `).join('');
    }

    function renderTimelineSummary(rows, forceAnimate = false) {
      const count = rows.length;
      const isKingPosts = overviewActivityMode === 'kingposts';
      const avg = key => {
        const vals = rows.map(r => r[key]).filter(v => Number.isFinite(v) && v >= 0);
        return vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
      };

      const label = timelineState.start || timelineState.end
        ? `${timelineState.start || '...'} to ${timelineState.end || '...'}`
        : 'Total / All Dates';

      els.timelineSummarySubtitle.textContent = `Current scope: ${label}`;
      els.timelinePieSubtitle.textContent = isKingPosts
        ? `Average drilling and beam installation for ${timelineState.pile === 'all' ? 'all filtered kingposts' : timelineState.pile}`
        : `Average activities and gaps for ${timelineState.pile === 'all' ? 'all filtered piles' : timelineState.pile}`;
      els.timelinePileTag.textContent = timelineState.pile === 'all' ? (isKingPosts ? 'All KingPosts' : 'All Piles') : timelineState.pile;
      els.timelineTag.textContent = timelineState.pile === 'all' ? `${count} ${isKingPosts ? 'kingposts' : 'piles'}` : timelineState.pile;
      if (els.timelineScopeCount) {
        els.timelineScopeCount.textContent = `${count} ${isKingPosts ? `kingpost${count === 1 ? '' : 's'}` : `pile${count === 1 ? '' : 's'}`}`;
      }

      if (els.timelineHeadDrilling) els.timelineHeadDrilling.textContent = 'Drilling';
      if (els.timelineHeadCage) els.timelineHeadCage.textContent = isKingPosts ? 'Beam Inst.' : 'Cage';
      if (els.timelineHeadPouring) els.timelineHeadPouring.textContent = isKingPosts ? 'Status' : 'Pouring';
      if (els.timelineHeadGap1) els.timelineHeadGap1.textContent = isKingPosts ? '-' : 'Gap 1';
      if (els.timelineHeadGap2) els.timelineHeadGap2.textContent = isKingPosts ? '-' : 'Gap 2';
      if (els.timelineHeadGross) els.timelineHeadGross.textContent = 'Gross';

      if (els.timelineLegendDrilling) els.timelineLegendDrilling.style.display = '';
      if (els.timelineLegendGap1) els.timelineLegendGap1.style.display = isKingPosts ? 'none' : '';
      if (els.timelineLegendCage) {
        els.timelineLegendCage.style.display = '';
        els.timelineLegendCage.innerHTML = `<span class="timeline-legend-swatch" style="background:${isKingPosts ? '#4b92c6' : '#c4e45f'};"></span>${isKingPosts ? 'Beam Installation' : 'Cage'}`;
      }
      if (els.timelineLegendGap2) els.timelineLegendGap2.style.display = isKingPosts ? 'none' : '';
      if (els.timelineLegendPouring) els.timelineLegendPouring.style.display = isKingPosts ? 'none' : '';

      renderTimelineTable(rows);

      const gapColor = '#f1a9a9';
      const items = isKingPosts
        ? [
            { label: 'Drilling', value: avg('drilling'), color: '#4ade80' },
            { label: 'Beam Installation', value: avg('beam'), color: '#4b92c6' }
          ].filter(item => Number.isFinite(item.value) && item.value > 0)
        : [
            { label: 'Drilling', value: avg('drilling'), color: '#4ade80' },
            { label: 'Gap 1', value: avg('gap1'), color: gapColor },
            { label: 'Cage', value: avg('cage'), color: '#c4e45f' },
            { label: 'Gap 2', value: avg('gap2'), color: gapColor },
            { label: 'Pouring', value: avg('pouring'), color: '#4b92c6' }
          ].filter(item => Number.isFinite(item.value) && item.value > 0);

      renderTimelinePie(items, forceAnimate);
    }

    function renderTimelinePie(items, forceAnimate = false) {
      const svg = els.timelinePieSvg;
      while (svg.firstChild) svg.removeChild(svg.firstChild);

      const cx = 180;
      const cy = 160;
      const outerR = 108;
      const innerR = 56;
      const total = items.reduce((sum, item) => sum + item.value, 0);
      els.timelinePieTotal.textContent = formatNumberOneDecimal(total);

      if (!items.length || total <= 0) {
        const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        t.setAttribute('x', cx);
        t.setAttribute('y', cy);
        t.setAttribute('text-anchor', 'middle');
        t.setAttribute('class', 'timeline-axis-text');
        t.textContent = 'No data';
        svg.appendChild(t);
        return;
      }

      let angle = -Math.PI / 2;
      items.forEach((item, itemIdx) => {
        const slice = (item.value / total) * Math.PI * 2;
        const next = angle + slice;
        const x1 = cx + Math.cos(angle) * outerR;
        const y1 = cy + Math.sin(angle) * outerR;
        const x2 = cx + Math.cos(next) * outerR;
        const y2 = cy + Math.sin(next) * outerR;
        const ix1 = cx + Math.cos(next) * innerR;
        const iy1 = cy + Math.sin(next) * innerR;
        const ix2 = cx + Math.cos(angle) * innerR;
        const iy2 = cy + Math.sin(angle) * innerR;
        const largeArc = slice > Math.PI ? 1 : 0;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix2} ${iy2} Z`);
        path.setAttribute('fill', item.color);
        path.setAttribute('opacity', forceAnimate ? '0' : '0.95');
        if (forceAnimate) {
            path.style.transformOrigin = `${cx}px ${cy}px`;
            path.style.transform = 'scale(0.7)';
            path.style.transition = 'all 340ms cubic-bezier(.22,.61,.36,1)';
            setTimeout(() => {
                path.style.opacity = '0.95';
                path.style.transform = 'scale(1)';
            }, 80 + itemIdx * 50);
        }
        svg.appendChild(path);

        const mid = angle + slice / 2;
        const lx1 = cx + Math.cos(mid) * (outerR + 6);
        const ly1 = cy + Math.sin(mid) * (outerR + 6);
        const lx2 = cx + Math.cos(mid) * (outerR + 22);
        const ly2 = cy + Math.sin(mid) * (outerR + 22);
        const lx3 = lx2 + (Math.cos(mid) >= 0 ? 12 : -12);

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        line.setAttribute('d', `M ${lx1} ${ly1} L ${lx2} ${ly2} L ${lx3} ${ly2}`);
        line.setAttribute('fill', 'none');
        line.setAttribute('stroke', 'rgba(255,255,255,0.36)');
        line.setAttribute('stroke-width', '1.2');
        line.style.opacity = forceAnimate ? '0' : '1';
        if (forceAnimate) {
            line.style.transition = 'opacity 240ms ease';
            setTimeout(() => { line.style.opacity = '1'; }, 240 + itemIdx * 50);
        }
        svg.appendChild(line);

        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', lx3 + (Math.cos(mid) >= 0 ? 4 : -4));
        label.setAttribute('y', ly2 + 4);
        label.setAttribute('text-anchor', Math.cos(mid) >= 0 ? 'start' : 'end');
        label.setAttribute('class', 'timeline-axis-text');
        label.style.opacity = forceAnimate ? '0' : '1';
        if (forceAnimate) {
            label.style.transition = 'opacity 240ms ease';
            setTimeout(() => { label.style.opacity = '1'; }, 270 + itemIdx * 50);
        }

        const t1 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        t1.textContent = `${item.label} `;
        t1.setAttribute('fill', 'rgba(244,247,251,0.92)');

        const t2 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
        t2.textContent = `${formatNumberOneDecimal(item.value)} hr (${formatNumberOneDecimal((item.value / total) * 100)}%)`;
        t2.setAttribute('fill', 'rgba(244,247,251,0.62)');

        label.appendChild(t1);
        label.appendChild(t2);
        svg.appendChild(label);

        angle = next;
      });
    }

    function showTimelineTooltip(evt, html) {
      if (!timelineTooltipEl) {
        timelineTooltipEl = document.createElement('div');
        timelineTooltipEl.className = 'timeline-tooltip';
        document.body.appendChild(timelineTooltipEl);
      }
      timelineTooltipEl.innerHTML = html;
      timelineTooltipEl.classList.add('visible');
      const rect = timelineTooltipEl.getBoundingClientRect();
      const targetRect = evt.currentTarget.getBoundingClientRect();
      let left = targetRect.left + targetRect.width / 2 - rect.width / 2;
      let top = targetRect.top - rect.height - 10;
      if (top < 8) top = targetRect.bottom + 10;
      left = Math.max(8, Math.min(left, window.innerWidth - rect.width - 8));
      top = Math.max(8, Math.min(top, window.innerHeight - rect.height - 8));
      timelineTooltipEl.style.left = `${left}px`;
      timelineTooltipEl.style.top = `${top}px`;
    }

    function hideTimelineTooltip() {
      if (timelineTooltipEl) timelineTooltipEl.classList.remove('visible');
    }

    function renderTimelinePage(project, forceAnimate = false) {
      if (!els.pageTimeline) return;
      updateTimelinePileList(project);
      const rows = getTimelineFilteredRows(project);
      const isKingPosts = overviewActivityMode === 'kingposts' && hasKingPostActivity(project);
      renderTimelineSummary(rows, forceAnimate);

      const wrap = els.timelineChartWrap;
      const svg = els.timelineSvg;
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      wrap.scrollTop = 0;

      if (!rows.length) {
        els.timelineEmpty.style.display = 'grid';
        els.timelineSubtitle.textContent = isKingPosts
          ? 'No kingpost activities found for the current filter'
          : 'No pile activities found for the current filter';
        return;
      }

      els.timelineEmpty.style.display = 'none';
      els.timelineSubtitle.textContent = timelineState.pile === 'all'
        ? (isKingPosts ? 'Kingpost activities timeline filtered by selected period and element' : 'Pile activities timeline filtered by selected period and pile')
        : `${timelineState.pile} activity timeline`;

      const minStart = new Date(Math.min(...rows.flatMap(r => r.activities.map(a => a.start.getTime()))));
      const maxEnd = new Date(Math.max(...rows.flatMap(r => r.activities.map(a => a.end.getTime()))));
      const axisStart = timelineState.start ? new Date(`${timelineState.start}T00:00:00Z`) : minStart;
      const axisEnd = timelineState.end ? new Date(`${timelineState.end}T23:59:59Z`) : maxEnd;
      const totalHours = Math.max((axisEnd.getTime() - axisStart.getTime()) / 36e5, 24);

      const stickyPaneW = 128;
      const plotStartX = stickyPaneW + 10;
      const right = 24;
      const top = 44;
      const bottom = 28;
      const laneGap = 18;
      const drillingMachines = Array.from(new Set(
        rows.flatMap(row => row.activities
          .filter(activity => activity.key === 'drilling')
          .map(activity => normalizeText(activity.machine))
          .filter(Boolean)
        )
      )).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
      const drillingRowCount = Math.max(1, drillingMachines.length);
      const drillingMachineIndex = new Map(drillingMachines.map((machine, index) => [machine, index]));
      const baseLaneHeight = 56;
      const lanes = isKingPosts
        ? [
            { key: 'drilling', label: 'Drilling', color: '#4ade80', height: drillingRowCount > 1 ? Math.max(72, 26 * drillingRowCount + 16) : baseLaneHeight },
            { key: 'beam', label: 'Beam Installation', color: '#4b92c6', height: baseLaneHeight }
          ]
        : [
            { key: 'drilling', label: 'Drilling', color: '#4ade80', height: drillingRowCount > 1 ? Math.max(72, 26 * drillingRowCount + 16) : baseLaneHeight },
            { key: 'cage', label: 'Cage Installation', color: '#c4e45f', height: baseLaneHeight },
            { key: 'pouring', label: 'Pouring', color: '#4b92c6', height: baseLaneHeight }
          ];
      const laneTops = [];
      lanes.reduce((cursor, lane, idx) => {
        laneTops[idx] = cursor;
        return cursor + lane.height + laneGap;
      }, top);
      const innerH = lanes.reduce((sum, lane) => sum + lane.height, 0) + (lanes.length - 1) * laneGap;

      let pxPerHour = 4.6;
      if (timelineState.pile === 'all' && !timelineState.start && !timelineState.end) pxPerHour = 5.8;
      if (timelineState.pile !== 'all') pxPerHour = 9.5;
      if (totalHours <= 24) pxPerHour = Math.max(pxPerHour, 26);
      else if (totalHours <= 72) pxPerHour = Math.max(pxPerHour, 14);
      else if (totalHours <= 168) pxPerHour = Math.max(pxPerHour, 8.5);
      pxPerHour *= timelineState.zoom || 1;

      const minVisibleWidth = Math.max((wrap?.clientWidth || 900) - plotStartX - right, 520);
      const innerW = Math.max(minVisibleWidth, totalHours * pxPerHour);
      const width = plotStartX + innerW + right;
      const height = top + innerH + bottom;

      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      svg.setAttribute('width', width);
      svg.setAttribute('height', height);
      svg.style.width = `${width}px`;
      svg.style.minWidth = `${width}px`;
      svg.style.height = `${height}px`;
      wrap.style.height = `${height + 6}px`;
      wrap.style.overflowY = 'hidden';

      lanes.forEach((lane, idx) => {
        const y = laneTops[idx];
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', plotStartX);
        line.setAttribute('y1', y + lane.height / 2);
        line.setAttribute('x2', width - right);
        line.setAttribute('y2', y + lane.height / 2);
        line.setAttribute('stroke', 'rgba(255,255,255,0.08)');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);

        if (lane.key === 'drilling' && drillingRowCount > 1) {
          const rowHeight = (lane.height - 16) / drillingRowCount;
          for (let i = 1; i < drillingRowCount; i += 1) {
            const splitY = y + 8 + rowHeight * i;
            const splitLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            splitLine.setAttribute('x1', plotStartX);
            splitLine.setAttribute('y1', splitY);
            splitLine.setAttribute('x2', width - right);
            splitLine.setAttribute('y2', splitY);
            splitLine.setAttribute('stroke', 'rgba(255,255,255,0.12)');
            splitLine.setAttribute('stroke-width', '1');
            splitLine.setAttribute('stroke-dasharray', '4 7');
            svg.appendChild(splitLine);
          }
        }
      });

      const dayCount = Math.ceil(totalHours / 24);
      for (let i = 0; i <= dayCount; i += 1) {
        const dt = new Date(axisStart.getTime() + i * 24 * 36e5);
        const x = plotStartX + 8 + ((dt.getTime() - axisStart.getTime()) / 36e5) * pxPerHour;

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x);
        line.setAttribute('y1', top - 6);
        line.setAttribute('x2', x);
        line.setAttribute('y2', height - bottom + 4);
        line.setAttribute('stroke', 'rgba(255,255,255,0.06)');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);

        if (i < dayCount) {
          const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          txt.setAttribute('x', x + 6);
          txt.setAttribute('y', top - 14);
          txt.setAttribute('class', 'timeline-axis-text');
          txt.setAttribute('data-timeline-date', '1');
          txt.textContent = formatTimelineHeaderDate(dt);
          svg.appendChild(txt);
        }
      }

      const laneIndex = isKingPosts
        ? { drilling: 0, beam: 1 }
        : { drilling: 0, cage: 1, pouring: 2 };
      const animatedTimelineElements = [];
      rows.forEach(pile => {
        pile.activities.forEach(activity => {
          const idx = laneIndex[activity.key];
          const lane = lanes[idx];
          const laneY = laneTops[idx];
          const x = plotStartX + 8 + ((activity.start.getTime() - axisStart.getTime()) / 36e5) * pxPerHour;
          const w = Math.max(6, ((activity.end.getTime() - activity.start.getTime()) / 36e5) * pxPerHour);
          const duration = hoursBetween(activity.start, activity.end) || activity.duration || 0;
          const drillingMachine = normalizeText(activity.machine);
          const activitySegments = activity.key === 'drilling'
            ? [{
                rowIndex: drillingMachineIndex.has(drillingMachine) ? drillingMachineIndex.get(drillingMachine) : 0,
                rowCount: drillingRowCount,
                machine: drillingMachine,
                depth: activity.machineDepth
              }]
            : [{ rowIndex: 0, rowCount: 1, machine: '', depth: null }];
          const segmentGap = 4;

          activitySegments.forEach(segment => {
            const rowCount = Math.max(1, Number(segment.rowCount) || activitySegments.length || 1);
            const rowIndex = Math.max(0, Number(segment.rowIndex) || 0);
            const barH = Math.max(8, (lane.height - 16 - (rowCount - 1) * segmentGap) / rowCount);
            const barY = laneY + 8 + rowIndex * (barH + segmentGap);

            const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            bar.setAttribute('x', x);
            bar.setAttribute('y', barY);
            bar.setAttribute('width', forceAnimate ? '0' : String(w));
            bar.setAttribute('height', barH);
            bar.setAttribute('rx', '4');
            bar.setAttribute('fill', activity.color);
            bar.setAttribute('opacity', rowCount > 1 ? '0.9' : '0.94');
            bar.setAttribute('stroke', 'rgba(255,255,255,0.12)');
            bar.setAttribute('stroke-width', '1');
            svg.appendChild(bar);

            const hit = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            hit.setAttribute('x', x);
            hit.setAttribute('y', Math.max(laneY + 4, barY - 2));
            hit.setAttribute('width', Math.max(10, w));
            hit.setAttribute('height', barH + 4);
            hit.setAttribute('fill', 'transparent');
            hit.style.cursor = 'pointer';
            const segmentRows = activity.key === 'drilling' && segment.machine
              ? `<div class="tooltip-row"><span>Machine</span><strong>${escapeHtml(segment.machine)}</strong></div><div class="tooltip-row"><span>Drilled Lm</span><strong>${Number.isFinite(segment.depth) ? `${formatNumberOneDecimal(segment.depth)} m` : '-'}</strong></div>`
              : '';
            const html = `<div class="tooltip-title">${pile.id} | ${activity.label}</div>${segmentRows}<div class="tooltip-row"><span>Start</span><strong>${formatDateTimeLabel(activity.start)}</strong></div><div class="tooltip-row"><span>End</span><strong>${formatDateTimeLabel(activity.end)}</strong></div><div class="tooltip-row"><span>Duration</span><strong>${formatNumberOneDecimal(duration)} hr</strong></div>`;
            hit.addEventListener('pointerenter', evt => showTimelineTooltip(evt, html));
            hit.addEventListener('pointermove', evt => showTimelineTooltip(evt, html));
            hit.addEventListener('mouseleave', hideTimelineTooltip);
            svg.appendChild(hit);

            let labelObj = null;
            if ((timelineState.pile !== 'all' || w > 56) && pile.id.length <= 8) {
              labelObj = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              labelObj.setAttribute('x', x + w / 2);
              labelObj.setAttribute('y', barY + barH / 2 + 4);
              labelObj.setAttribute('class', 'timeline-bar-label');
              labelObj.style.opacity = forceAnimate ? '0' : '1';
              labelObj.textContent = pile.id;
              svg.appendChild(labelObj);
            }
            if (forceAnimate) {
              animatedTimelineElements.push({ bar, finalW: w, label: labelObj });
            }
          });
        });
      });

      if (forceAnimate && animatedTimelineElements.length) {
        const startTime = performance.now();
        const duration = 580;
        const stagger = 12;
        const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
        const frame = now => {
          let running = false;
          animatedTimelineElements.forEach((item, idx) => {
            const local = Math.min(Math.max((now - startTime - idx * stagger) / duration, 0), 1);
            const eased = easeOutCubic(local);
            if (local < 1) running = true;
            item.bar.setAttribute('width', String(item.finalW * eased));
            if (item.label) {
              item.label.style.opacity = local > 0.85 ? '1' : '0';
            }
          });
          if (running) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      }

      // Foreground sticky pane to keep Y-axis labels isolated from scrolled chart content
      const stickyBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      stickyBg.setAttribute('x', '0');
      stickyBg.setAttribute('y', '0');
      stickyBg.setAttribute('width', String(stickyPaneW));
      stickyBg.setAttribute('height', String(height));
      stickyBg.setAttribute('fill', 'rgba(6,8,11,0.985)');
      stickyBg.setAttribute('stroke', 'rgba(255,255,255,0.06)');
      stickyBg.setAttribute('stroke-width', '1');
      stickyBg.setAttribute('data-sticky-lane-bg', '1');
      svg.appendChild(stickyBg);




      lanes.forEach((lane, idx) => {
        const y = laneTops[idx];
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', String(stickyPaneW - 10));
        label.setAttribute('y', String(y + lane.height / 2 + 4));
        label.setAttribute('text-anchor', 'end');
        label.setAttribute('class', 'timeline-lane-label');
        label.setAttribute('data-base-x', String(stickyPaneW - 10));
        label.setAttribute('data-sticky-lane-label', '1');
        label.textContent = lane.label;
        svg.appendChild(label);
      });

      const stickyDivider = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      stickyDivider.setAttribute('x1', String(stickyPaneW));
      stickyDivider.setAttribute('y1', '0');
      stickyDivider.setAttribute('x2', String(stickyPaneW));
      stickyDivider.setAttribute('y2', String(height));
      stickyDivider.setAttribute('stroke', 'rgba(255,255,255,0.08)');
      stickyDivider.setAttribute('stroke-width', '1');
      stickyDivider.setAttribute('data-sticky-divider', '1');
      svg.appendChild(stickyDivider);

      const syncTimelineStickyLabels = () => {
        const scrollLeft = wrap.scrollLeft || 0;
        const stickyLabels = svg.querySelectorAll('[data-sticky-lane-label="1"]');
        stickyLabels.forEach(label => {
          const baseX = Number(label.getAttribute('data-base-x') || (stickyPaneW - 18));
          label.setAttribute('x', String(baseX + scrollLeft));
        });
        const stickyBgEl = svg.querySelector('[data-sticky-lane-bg="1"]');
        if (stickyBgEl) stickyBgEl.setAttribute('x', String(scrollLeft));
        const stickyDividerEl = svg.querySelector('[data-sticky-divider="1"]');
        if (stickyDividerEl) {
          stickyDividerEl.setAttribute('x1', String(stickyPaneW + scrollLeft));
          stickyDividerEl.setAttribute('x2', String(stickyPaneW + scrollLeft));
        }
      };

      const moveToRight = () => {
        wrap.scrollLeft = Math.max(wrap.scrollWidth - wrap.clientWidth, 0);
        syncTimelineStickyLabels();
      };
      if (wrap.scrollWidth > wrap.clientWidth) {
        moveToRight();
        requestAnimationFrame(moveToRight);
      } else {
        wrap.scrollLeft = 0;
        syncTimelineStickyLabels();
      }

      if (els.timelineZoomResetBtn) {
        els.timelineZoomResetBtn.textContent = `${Math.round((timelineState.zoom || 1) * 100)}%`;
      }

      if (!wrap.dataset.timelineInteractiveBound) {
        let isDown = false;
        let startX = 0;
        let startScrollLeft = 0;
        wrap.addEventListener('pointerdown', evt => {
          if ((wrap.scrollWidth - wrap.clientWidth) <= 4) return;
          isDown = true;
          startX = evt.clientX;
          startScrollLeft = wrap.scrollLeft;
          wrap.classList.add('dragging');
        });
        window.addEventListener('pointermove', evt => {
          if (!isDown) return;
          wrap.scrollLeft = startScrollLeft - (evt.clientX - startX);
          syncTimelineStickyLabels();
        });
        const stopDrag = () => {
          isDown = false;
          wrap.classList.remove('dragging');
        };
        window.addEventListener('pointerup', stopDrag);
        wrap.addEventListener('pointerleave', stopDrag);
        wrap.addEventListener('wheel', evt => {
          if (evt.ctrlKey || evt.metaKey) {
            evt.preventDefault();
            timelineState.zoom = Math.max(0.5, Math.min(4, (timelineState.zoom || 1) * (evt.deltaY < 0 ? 1.1 : 0.9)));
            renderTimelinePage(project);
            return;
          }
          if ((wrap.scrollWidth - wrap.clientWidth) <= 4) return;
          if (Math.abs(evt.deltaY) > Math.abs(evt.deltaX)) {
            evt.preventDefault();
            wrap.scrollLeft += evt.deltaY;
            syncTimelineStickyLabels();
          }
        }, { passive: false });
        wrap.addEventListener('scroll', syncTimelineStickyLabels, { passive: true });
        wrap.dataset.timelineInteractiveBound = '1';
      }
      syncTimelineStickyLabels();
    }




    function getTodayIsoLocal() {
      const d = new Date();
      const local = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      return local.toISOString().slice(0, 10);
    }

    function syncTimelinePresetButtons() {
      const buttons = [
        [els.timelinePreset7Btn, 7],
        [els.timelinePreset14Btn, 14],
        [els.timelinePreset30Btn, 30]
      ];
      let activeDays = null;
      if (timelineState.start && timelineState.end && timelineState.end === getTodayIsoLocal()) {
        const start = new Date(`${timelineState.start}T00:00:00`);
        const end = new Date(`${timelineState.end}T00:00:00`);
        const diffDays = Math.round((end - start) / 86400000) + 1;
        if ([7, 14, 30].includes(diffDays)) activeDays = diffDays;
      }
      buttons.forEach(([btn, days]) => {
        if (!btn) return;
        btn.classList.toggle('primary', activeDays === days);
      });
    }

    function applyTimelinePreset(days) {
      const end = new Date();
      end.setHours(0, 0, 0, 0);
      const start = new Date(end);
      start.setDate(start.getDate() - (days - 1));

      const endStr = end.toISOString().slice(0, 10);
      const startStr = start.toISOString().slice(0, 10);

      timelineState.start = startStr;
      timelineState.end = endStr;

      if (els.timelineStartDate) els.timelineStartDate.value = startStr;
      if (els.timelineEndDate) els.timelineEndDate.value = endStr;

      updateTimelinePileList(selectedProject);
      syncTimelinePresetButtons();
      renderTimelinePage(selectedProject);
    }

    function renderCostPage(project, forceAnimate = false) {
      if (!els.pageCost) return;
      const rows = getRowsForProject(project);
      const isTitaniaCostTemplateProject = normalizeText(project).toLowerCase() === 'titania';

      const executed = getExecutedRows(rows).filter(r => getOverviewDateKey(r));
      const cwLmMap = new Map();
      executed.forEach(r => {
        const date = getOverviewDateKey(r);
        let cwNum = 0;
        try {
          cwNum = parseInt(String(getCW(date)).replace(/\D/g, ''), 10);
        } catch (e) {}
        if (!Number.isFinite(cwNum) || cwNum <= 0) return;
        const asbuilt = Number(r.asbuilt_depth) || Number(r.design_depth) || 0;
        cwLmMap.set(cwNum, (cwLmMap.get(cwNum) || 0) + asbuilt);
      });

      const baseWeeks = isTitaniaCostTemplateProject ? [10, 11, 12, 13] : [];
      const data = isTitaniaCostTemplateProject
        ? {
            10: { pm: 1, se: 2, foreman: 2, op: 3, vb: 1, rig: 5, hl: 7, we: 1, me: 1, rigs: 1 },
            11: { pm: 1, se: 2, foreman: 3, op: 6, vb: 2, rig: 7, hl: 7, we: 2, me: 1, rigs: 2 },
            12: { pm: 1, se: 2, foreman: 3, op: 6, vb: 2, rig: 9, hl: 11, we: 1, me: 1, rigs: 2 },
            13: { pm: 1, se: 3, foreman: 3, op: 6, vb: 2, rig: 9, hl: 11, we: 2, me: 1, rigs: 2 }
          }
        : {};

      function getManpowerValue(row, keys) {
        for (const key of keys) {
          const raw = row?.[key];
          if (raw === undefined || raw === null || raw === '') continue;
          const n = Number(raw);
          if (Number.isFinite(n)) return n;
        }
        return 0;
      }

      const manpowerWeekly = new Map();
      const filteredManpower = manpowerRows.filter(row => {
        const projectMatch = normalizeText(row?.project) === normalizeText(selectedProject);
        const plotMatch = isAllPlotsValue(selectedPlot) || normalizeText(row?.plot) === normalizeText(selectedPlot);
        return projectMatch && plotMatch;
      });

      const latestDailyManpower = new Map();
      filteredManpower.forEach(row => {
        const dateKey = normalizeDateString(row?.date);
        if (!dateKey) return;
        latestDailyManpower.set(dateKey, row);
      });

      const manpowerDates = Array.from(latestDailyManpower.keys()).sort();
      const targetLastDay = previousDayKey();
      let lastDayDateKey = '';
      for (let i = manpowerDates.length - 1; i >= 0; i -= 1) {
        if (manpowerDates[i] <= targetLastDay) {
          lastDayDateKey = manpowerDates[i];
          break;
        }
      }
      if (!lastDayDateKey && manpowerDates.length) {
        lastDayDateKey = manpowerDates[manpowerDates.length - 1];
      }

      const lastDayManpower = lastDayDateKey ? latestDailyManpower.get(lastDayDateKey) : null;
      const lastDayCounts = lastDayManpower ? {
        pm: getManpowerValue(lastDayManpower, ['projectmanager', 'project manager']),
        se: getManpowerValue(lastDayManpower, ['siteengineer', 'site engineer', 'siteenginner']),
        foreman: getManpowerValue(lastDayManpower, ['foreman']),
        op: getManpowerValue(lastDayManpower, ['operator', 'operators']),
        vb: getManpowerValue(lastDayManpower, ['vibro operator', 'vibrooperator', 'vibro_operator']),
        rig: getManpowerValue(lastDayManpower, ['riggers', 'rigger']),
        we: getManpowerValue(lastDayManpower, ['welder', 'welders']),
        me: getManpowerValue(lastDayManpower, ['mechanic', 'mechanics']),
        hl: getManpowerValue(lastDayManpower, ['helpers', 'helper'])
      } : { pm: 0, se: 0, foreman: 0, op: 0, vb: 0, rig: 0, we: 0, me: 0, hl: 0 };

      const minDynamicWeek = isTitaniaCostTemplateProject ? 14 : 1;
      Array.from(latestDailyManpower.values()).forEach(row => {
        const dateKey = normalizeDateString(row?.date);
        if (!dateKey) return;
        let cwNum = 0;
        try {
          cwNum = parseInt(String(getCW(dateKey)).replace(/\D/g, ''), 10);
        } catch (e) {}
        if (!Number.isFinite(cwNum) || cwNum < minDynamicWeek) return;

        const bucket = manpowerWeekly.get(cwNum) || { dailyRows: [] };
        bucket.dailyRows.push({
          date: dateKey,
          pm: getManpowerValue(row, ['projectmanager', 'project manager']),
          se: getManpowerValue(row, ['siteengineer', 'site engineer', 'siteenginner']),
          foreman: getManpowerValue(row, ['foreman']),
          op: getManpowerValue(row, ['operator', 'operators']),
          vb: getManpowerValue(row, ['vibro operator', 'vibrooperator', 'vibro_operator']),
          rig: getManpowerValue(row, ['riggers', 'rigger']),
          we: getManpowerValue(row, ['welder', 'welders']),
          me: getManpowerValue(row, ['mechanic', 'mechanics']),
          hl: getManpowerValue(row, ['helpers', 'helper'])
        });
        manpowerWeekly.set(cwNum, bucket);
      });

      const dynamicWeeks = Array.from(manpowerWeekly.keys()).sort((a, b) => a - b);
      const weekLastDayLabelMap = new Map();
      dynamicWeeks.forEach(week => {
        const bucket = manpowerWeekly.get(week);
        const dailyRows = Array.isArray(bucket?.dailyRows) ? bucket.dailyRows.sort((a, b) => a.date.localeCompare(b.date)) : [];
        const lastDaily = dailyRows[dailyRows.length - 1] || {};
        const days = Math.max(1, Math.min(6, dailyRows.length || 0));
        weekLastDayLabelMap.set(week, lastDaily.date ? `Last day (${formatShortDateLabel(lastDaily.date)})` : '');
        data[week] = {
          source: 'manpower',
          dailyRows,
          pm: Number(lastDaily.pm) || 0,
          se: Number(lastDaily.se) || 0,
          foreman: Number(lastDaily.foreman) || 0,
          op: Number(lastDaily.op) || 0,
          vb: Number(lastDaily.vb) || 0,
          rig: Number(lastDaily.rig) || 0,
          we: Number(lastDaily.we) || 0,
          me: Number(lastDaily.me) || 0,
          hl: Number(lastDaily.hl) || 0,
          rigs: 2,
          daysFromManpower: days
        };
      });

      const weeks = [...baseWeeks, ...dynamicWeeks];

      if (els.costTableHeadRow) {
        const weekHeaders = weeks.map(week => {
          const lastDayLabel = weekLastDayLabelMap.get(week);
          if (lastDayLabel) {
            return `<th class="num"><div>Week ${week}</div><div style="font-size:10px; color:rgba(244,247,251,0.6); margin-top:2px;">${lastDayLabel}</div></th>`;
          }
          return `<th class="num">Week ${week}</th>`;
        }).join('');
        const lastDayHeaderText = lastDayDateKey ? `Last day (${formatShortDateLabel(lastDayDateKey)})` : 'Last day';
        els.costTableHeadRow.innerHTML = `<th class="col-head">CATEGORY / WEEK</th>${weekHeaders}<th class="num total-col">${lastDayHeaderText}</th>`;
      }

      const dailyRates = {
        pm: 461.5,
        se: 461.5,
        foreman: 343.4,
        op: 247.8,
        vb: 101,
        rig: 108.2,
        we: 151.4,
        me: 315.5,
        hl: 101
      };

      const overheadsDaily = 2540; // Updated overheads rate
      const rigRental = 2500; // Updated rig rate
      const vbRental = 3250; // Updated vibro+powerpack rate
      const craneRental = 1100;
      const projectKey = normalizeText(project).toLowerCase();
      const normalizedSelectedPlot = normalizeText(selectedPlot);
      const getDailyReportEquipmentCountsForDate = (dateKey = '') => {
        const normalizedDate = normalizeDateString(dateKey);
        if (!normalizedDate) return null;
        const targetProjectToken = getCompanyProjectToken(project);
        const matches = dailyReportEquipmentRows
          .map(sanitizeDailyReportEquipmentRow)
          .filter(item => item.date === normalizedDate)
          .filter(item => getCompanyProjectToken(item.projectRaw || item.project) === targetProjectToken)
          .filter(item => {
            if (isAllPlotsValue(normalizedSelectedPlot)) return true;
            const rowPlot = normalizeText(item.plot);
            return rowPlot === normalizedSelectedPlot || isAllPlotsValue(rowPlot);
          });

        if (!matches.length) return null;

        const rigSet = new Set();
        const craneSet = new Set();
        const vbSet = new Set();

        matches.forEach(item => {
          const typeKey = normalizeText(item.type).toLowerCase();
          const labelKey = normalizeText(item.label) || `${typeKey}-${item.date}`;
          if (typeKey === 'rig') {
            rigSet.add(labelKey);
          } else if (typeKey === 'crane') {
            craneSet.add(labelKey);
          } else if (typeKey === 'vibrator') {
            vbSet.add(labelKey);
          }
        });

        return {
          rig: rigSet.size,
          vb: vbSet.size,
          crane: craneSet.size
        };
      };
      const getEquipmentCountsForDate = (dateKey = '') => {
        const normalizedDate = normalizeDateString(dateKey);
        const dailyReportCounts = getDailyReportEquipmentCountsForDate(normalizedDate);
        if (dailyReportCounts) return dailyReportCounts;
        if (projectKey !== 'titania') {
          return { rig: 0, vb: 0, crane: 0 };
        }
        if (normalizedDate && normalizedDate >= '2026-04-03') {
          return { rig: 0, vb: 0, crane: 0 };
        }
        if (projectKey === 'titania') {
          return {
            rig: 1,
            vb: 1,
            crane: 1
          };
        }
        return { rig: 0, vb: 0, crane: 0 };
      };
      const equipmentCounts = getEquipmentCountsForDate(lastDayDateKey);

      const lastDayValues = {
        pm: lastDayCounts.pm * dailyRates.pm,
        se: lastDayCounts.se * dailyRates.se,
        foreman: lastDayCounts.foreman * dailyRates.foreman,
        op: lastDayCounts.op * dailyRates.op,
        vb: lastDayCounts.vb * dailyRates.vb,
        rig: lastDayCounts.rig * dailyRates.rig,
        we: lastDayCounts.we * dailyRates.we,
        me: lastDayCounts.me * dailyRates.me,
        hl: lastDayCounts.hl * dailyRates.hl,
        r_rig: lastDayDateKey ? equipmentCounts.rig * rigRental : 0,
        r_vb: lastDayDateKey ? equipmentCounts.vb * vbRental : 0,
        r_crane: lastDayDateKey ? equipmentCounts.crane * craneRental : 0
      };
      lastDayValues.salaries = lastDayValues.pm + lastDayValues.se + lastDayValues.foreman + lastDayValues.op + lastDayValues.vb + lastDayValues.rig + lastDayValues.we + lastDayValues.me + lastDayValues.hl;
      lastDayValues.rental = lastDayValues.r_rig + lastDayValues.r_vb + lastDayValues.r_crane;
      lastDayValues.direct = lastDayValues.salaries + lastDayValues.rental;
      lastDayValues.overheads = lastDayDateKey ? overheadsDaily : 0;
      lastDayValues.total = lastDayValues.direct + lastDayValues.overheads;

      const lastDayLm = lastDayDateKey
        ? executed
            .filter(r => getOverviewDateKey(r) === lastDayDateKey)
            .reduce((sum, r) => sum + (Number(r.asbuilt_depth) || Number(r.design_depth) || 0), 0)
        : 0;
      const lastDayCumLm = lastDayDateKey
        ? executed
            .filter(r => getOverviewDateKey(r) <= lastDayDateKey)
            .reduce((sum, r) => sum + (Number(r.asbuilt_depth) || Number(r.design_depth) || 0), 0)
        : 0;
      lastDayValues.lm = lastDayLm;
      lastDayValues.cumLm = lastDayCumLm;
      lastDayValues.cplm = lastDayLm > 0 ? (lastDayValues.total / lastDayLm) : 0;
      
      const getEquipDays = (w, eq, fallbackDays = 6) => {
        if (isTitaniaCostTemplateProject) {
          if (w === 10) return 1;
          if (eq === 'rig' || eq === 'crane') {
             if (w === 12) return 2; // Rig/Crane offline starting Wed Mar 18
             if (w === 13) return 3; // Rig/Crane offline until Wed Mar 25
             return fallbackDays;
          }
          if (eq === 'vb') {
            if (w === 12) return 2; // Vibrator offline Mar 18-21, 2026 (4 days)
            return fallbackDays;
          }
        }
        return fallbackDays;
      };

      const sums = { salaries: 0, rental: 0, direct: 0, overheads: 0, total: 0, lm: 0, r_crane: 0 };
      
      let runningCumLm = 0;
      const weeklyData = weeks.map(w => {
        const d = data[w];
        const days = Number.isFinite(d?.daysFromManpower) ? d.daysFromManpower : (w === 10 ? 1 : 6);
        const isDynamicManpowerWeek = d?.source === 'manpower' && Array.isArray(d?.dailyRows) && d.dailyRows.length > 0;

        const calcRoleCost = (roleKey, rate) => {
          if (!isDynamicManpowerWeek) {
            return (Number(d?.[roleKey]) || 0) * rate * days;
          }
          let roleTotal = 0;
          d.dailyRows.forEach(dayRow => {
            const count = Number(dayRow?.[roleKey]) || 0;
            roleTotal += count * rate;
          });
          return roleTotal;
        };
        
        const pm = calcRoleCost('pm', dailyRates.pm);
        const se = calcRoleCost('se', dailyRates.se);
        const foreman = calcRoleCost('foreman', dailyRates.foreman);
        const op = calcRoleCost('op', dailyRates.op);
        const vb = calcRoleCost('vb', dailyRates.vb);
        const rig = calcRoleCost('rig', dailyRates.rig);
        const we = calcRoleCost('we', dailyRates.we);
        const me = calcRoleCost('me', dailyRates.me);
        const hl = calcRoleCost('hl', dailyRates.hl);

        const salaries = pm + se + foreman + op + vb + rig + we + me + hl;

        const calcEquipmentRental = (equipmentKey, rate) => {
          return d.dailyRows.reduce((sum, dayRow) => {
            const count = Number(getEquipmentCountsForDate(dayRow?.date)?.[equipmentKey]) || 0;
            return sum + (count * rate);
          }, 0);
        };

        const getStaticEquipmentRental = (equipmentKey, rate) => {
          const count = Number(getEquipmentCountsForDate('')[equipmentKey]) || 0;
          return count * rate * getEquipDays(w, equipmentKey.replace('r_', ''), days);
        };

        const r_rig = isDynamicManpowerWeek ? calcEquipmentRental('rig', rigRental) : getStaticEquipmentRental('rig', rigRental);
        const r_vb = isDynamicManpowerWeek ? calcEquipmentRental('vb', vbRental) : getStaticEquipmentRental('vb', vbRental);
        const r_crane = isDynamicManpowerWeek ? calcEquipmentRental('crane', craneRental) : getStaticEquipmentRental('crane', craneRental);
        const rental = r_rig + r_vb + r_crane;

        const direct = salaries + rental;
        const overheads = overheadsDaily * days;
        const total = direct + overheads;
        const lm = cwLmMap.get(w) || 0;
        
        sums.pm = (sums.pm || 0) + pm;
        sums.se = (sums.se || 0) + se;
        sums.foreman = (sums.foreman || 0) + foreman;
        sums.op = (sums.op || 0) + op;
        sums.vb = (sums.vb || 0) + vb;
        sums.rig = (sums.rig || 0) + rig;
        sums.we = (sums.we || 0) + we;
        sums.me = (sums.me || 0) + me;
        sums.hl = (sums.hl || 0) + hl;

        sums.r_rig = (sums.r_rig || 0) + r_rig;
        sums.r_vb = (sums.r_vb || 0) + r_vb;
        sums.r_crane = (sums.r_crane || 0) + r_crane;

        sums.salaries += salaries;
        sums.rental += rental;
        sums.direct += direct;
        sums.overheads += overheads;
        sums.total += total;
        sums.lm += lm;
        runningCumLm += lm;
        const cumLm = runningCumLm;
        const cumTotal = sums.total;
        const cplm = cumLm > 0 ? cumTotal / cumLm : 0;

        return { w, days, salaries, pm, se, foreman, op, vb, rig, we, me, hl, rental, r_rig, r_vb, r_crane, direct, overheads, total, lm, cumLm, cumTotal, cplm };
      });
      const getEquipmentWeekMeta = (weekNumber, equipmentKey, fallbackDays = 0) => {
        const bucket = data[weekNumber];
        const isDynamicWeek = bucket?.source === 'manpower' && Array.isArray(bucket?.dailyRows) && bucket.dailyRows.length > 0;
        if (isDynamicWeek) {
          const counts = bucket.dailyRows
            .map(dayRow => Number(getEquipmentCountsForDate(dayRow?.date)?.[equipmentKey]) || 0)
            .filter(count => count > 0);
          if (!counts.length) return { hasValue: false, countText: '-', daysText: '-', count: 0, days: 0 };
          const uniqueCounts = Array.from(new Set(counts));
          if (uniqueCounts.length === 1) {
            return {
              hasValue: true,
              countText: `${uniqueCounts[0]} Nos`,
              daysText: `${counts.length} Days`,
              count: uniqueCounts[0],
              days: counts.length
            };
          }
          const minCount = Math.min(...counts);
          const maxCount = Math.max(...counts);
          return {
            hasValue: true,
            countText: `${minCount}-${maxCount} Nos`,
            daysText: `${counts.length} Days`,
            count: counts.reduce((sum, value) => sum + value, 0),
            days: counts.length
          };
        }

        const staticCount = Number(getEquipmentCountsForDate('')[equipmentKey]) || 0;
        if (!staticCount) return { hasValue: false, countText: '-', daysText: '-', count: 0, days: 0 };
        const effectiveDays = getEquipDays(weekNumber, equipmentKey, fallbackDays);
        return {
          hasValue: true,
          countText: `${staticCount} Nos`,
          daysText: `${effectiveDays} Days`,
          count: staticCount,
          days: effectiveDays
        };
      };

      function formatCost(val, isLm = false) {
        if (!val) return '-';
        return Number(val.toFixed(isLm ? 1 : 2)).toLocaleString('en-US');
      }

      const hasRigRental = weeklyData.some(wd => wd.r_rig > 0) || lastDayValues.r_rig > 0;
      const hasVbRental = weeklyData.some(wd => wd.r_vb > 0) || lastDayValues.r_vb > 0;
      const hasCraneRental = weeklyData.some(wd => wd.r_crane > 0) || lastDayValues.r_crane > 0;
      const rentalDetailRows = [];
      if (hasRigRental) rentalDetailRows.push({ targetPivot: 'rental', key: 'r_rig', label: 'Piling Rig' });
      if (hasVbRental) rentalDetailRows.push({ targetPivot: 'rental', key: 'r_vb', label: 'Vibrator & Power Pack' });
      if (hasCraneRental) rentalDetailRows.push({ targetPivot: 'rental', key: 'r_crane', label: 'Crawler Crane' });

      const tableRows = [
        { key: 'directSection', sectionLabel: 'Direct', sectionRow: true },
        { key: 'salaries', label: 'Personnel Cost', groupSub: true, hasPivot: true },
        { targetPivot: 'salaries', key: 'pm', label: 'Project Manager' },
        { targetPivot: 'salaries', key: 'se', label: 'Site Engineers' },
        { targetPivot: 'salaries', key: 'foreman', label: 'Foreman' },
        { targetPivot: 'salaries', key: 'op', label: 'Equipment Operators' },
        { targetPivot: 'salaries', key: 'vb', label: 'Vibro Operators' },
        { targetPivot: 'salaries', key: 'rig', label: 'Riggers' },
        { targetPivot: 'salaries', key: 'we', label: 'Welders' },
        { targetPivot: 'salaries', key: 'me', label: 'Mechanic' },
        { targetPivot: 'salaries', key: 'hl', label: 'Helpers' },

        { key: 'rental', label: 'Equipment Rental', groupSub: true, hasPivot: true },
        ...rentalDetailRows,

        { key: 'direct', label: '', groupHead: true },
        { key: 'overheadSection', sectionLabel: 'Indirect', sectionRow: true },
        { key: 'overheads', label: 'Overheads Share', groupSub: true },
        { key: 'overheads', label: '', groupHead: true },
        { key: 'totalBreak', sectionLabel: '', sectionRow: true },
        { key: 'total', label: 'Total Cost', totalRow: true },
        { key: 'productionSection', sectionLabel: 'Production', sectionRow: true },
        { key: 'lm', label: 'Executed Lm', groupSub: true },
        { key: 'cumLm', label: 'Cumulative Lm', groupHead: true },
        { key: 'unitRateSection', sectionLabel: 'Unit Rate Calculation', sectionRow: true },
        { key: 'cplm', label: 'Cost / Lm', groupHead: true }
      ];

      function getCostRowRate(row) {
        if (!row || !row.targetPivot) return null;
        if (row.targetPivot === 'salaries') return dailyRates[row.key] || null;
        if (row.key === 'r_rig') return rigRental;
        if (row.key === 'r_vb') return vbRental;
        if (row.key === 'r_crane') return craneRental;
        return null;
      }

      window.toggleCostPivot = function(btn, groupKey) {
        btn.classList.toggle('expanded');
        document.querySelectorAll(`.pivot-${groupKey}`).forEach(tr => {
          tr.classList.toggle('expanded');
        });
      };

      let html = '';
      tableRows.forEach(row => {
        if (row.sectionRow) {
          const sectionLabel = row.sectionLabel || '';
          html += `
            <tr class="section-row row-${row.key}${sectionLabel ? '' : ' empty-section-row'}">
              <td colspan="${weeks.length + 2}">
                <div class="section-row-inner">
                  ${sectionLabel ? `<span class="section-row-label">${sectionLabel}</span>` : ''}
                </div>
              </td>
            </tr>`;
          return;
        }
        let totalVal = row.key === 'cplm'
          ? lastDayValues.cplm
          : lastDayValues[row.key];
        if (row.key === 'cumLm') totalVal = null;

        const baseClass = row.totalRow ? 'total-row' : (row.groupHead ? 'group-head' : (row.targetPivot ? `pivot-child pivot-${row.targetPivot}` : 'group-sub'));
        const cssClass = `${baseClass} row-${row.key}`;
        html += `<tr class="${cssClass}">`;

        let labelHtml = row.label;
        if (row.hasPivot) {
          labelHtml = `<div class="cost-pivot-toggle" onclick="toggleCostPivot(this, '${row.key}')">${row.label}</div>`;
        } else if (row.targetPivot) {
          const rateLabel = getCostRowRate(row);
          labelHtml = `<div>${row.label}</div><div class="cost-rate-note">${rateLabel ? `${formatCost(rateLabel, true)} AED` : ''}</div>`;
        }

        html += `<td class="col-head">${labelHtml}</td>`;

        weeklyData.forEach(wd => {
          if (row.targetPivot) {
            let count = 0;
            let targetDays = wd.days;
            let countText = '-';
            let daysText = '-';
            if (row.targetPivot === 'salaries') {
              count = data[wd.w][row.key];
              countText = `${count} Nos`;
              daysText = `${targetDays} Days`;
            } else if (row.key === 'r_rig') {
              const meta = getEquipmentWeekMeta(wd.w, 'rig', wd.days);
              count = meta.count;
              targetDays = meta.days || wd.days;
              countText = meta.countText;
              daysText = meta.daysText;
            } else if (row.key === 'r_vb') {
              const meta = getEquipmentWeekMeta(wd.w, 'vb', wd.days);
              count = meta.count;
              targetDays = meta.days || wd.days;
              countText = meta.countText;
              daysText = meta.daysText;
            } else if (row.key === 'r_crane') {
              const meta = getEquipmentWeekMeta(wd.w, 'crane', wd.days);
              count = meta.count;
              targetDays = meta.days || wd.days;
              countText = meta.countText;
              daysText = meta.daysText;
            }
            if (count > 0 && Number(wd[row.key]) > 0) {
              html += `<td class="num cost-detail-cell">
                 <div class="cost-detail-value">${formatCost(wd[row.key])} AED</div>
                 <div class="cost-detail-meta">
                   <span class="cost-detail-count">${countText}</span>
                   <span class="cost-detail-times">x</span>
                   <span class="cost-detail-days">${daysText}</span>
                 </div>
               </td>`;
              return;
            }
            html += `<td class="num">-</td>`;
            return;
          }
          html += `<td class="num">${formatCost(wd[row.key], row.key === 'lm')}</td>`;
        });

        if (row.targetPivot) {
          let lastDayCount = 0;
          if (row.targetPivot === 'salaries') {
            lastDayCount = Number(lastDayCounts[row.key]) || 0;
          } else if (row.key === 'r_rig') {
            lastDayCount = lastDayDateKey ? equipmentCounts.rig : 0;
          } else if (row.key === 'r_vb') {
            lastDayCount = lastDayDateKey ? equipmentCounts.vb : 0;
          } else if (row.key === 'r_crane') {
            lastDayCount = lastDayDateKey ? equipmentCounts.crane : 0;
          }

          const lastDayValue = Number(lastDayValues[row.key]) || 0;
          if (lastDayCount > 0 || lastDayValue > 0) {
            html += `<td class="num total-col cost-detail-cell">
              <div class="cost-detail-value">${formatCost(lastDayValue)} AED</div>
              <div class="cost-detail-meta">
                <span class="cost-detail-count">${lastDayCount} Nos</span>
              </div>
            </td>`;
          } else {
            html += `<td class="num total-col">-</td>`;
          }
        } else {
          if (row.key === 'cumLm') {
            html += `<td class="num total-col"></td>`;
          } else {
            html += `<td class="num total-col">${formatCost(totalVal, row.key === 'lm')}</td>`;
          }
        }
        html += `</tr>`;
      });
      if (els.costTableBody) els.costTableBody.innerHTML = html;

      // Global Tooltip Context for inline HTML string calls
      let ttp = document.getElementById('costTooltip');
      if (!ttp) {
        ttp = document.createElement('div');
        ttp.id = 'costTooltip';
        ttp.className = 'chart-tooltip';
        ttp.style.position = 'fixed';
        document.body.appendChild(ttp);
      }
      window.showCostTtp = (e, html) => {
        ttp.innerHTML = html;
        ttp.classList.add('visible');
        let x = e.clientX + 14;
        let y = e.clientY + 14;
        if (x + 240 > window.innerWidth) x = e.clientX - 250;
        ttp.style.left = x + 'px';
        ttp.style.top = y + 'px';
      };
      window.hideCostTtp = () => ttp.classList.remove('visible');

      // Render Cost Trend stacked bar chart
      const svg = els.costTrendSvg;
      const wrap = document.getElementById('costTrendWrap') || (svg ? svg.parentElement : null);
      if (svg && wrap) {
        while (svg.firstChild) svg.removeChild(svg.firstChild);
        
        let legend = wrap.querySelector('.cost-chart-legend');
        if (!legend) {
           legend = document.createElement('div');
           legend.className = 'cost-chart-legend';
           legend.style.cssText = 'position:absolute; top:8px; width:100%; display:flex; gap:16px; z-index:5; justify-content:center; padding:6px 12px; pointer-events:none;';
           legend.innerHTML = `
             <div style="display:flex; align-items:center; gap:6px; font-size:11.5px; font-weight:800; color:rgba(255,255,255,0.7);"><span style="width:12px; height:12px; background:#4b92c6; border-radius:3px; opacity:0.9;"></span> Salaries</div>
             <div style="display:flex; align-items:center; gap:6px; font-size:11.5px; font-weight:800; color:rgba(255,255,255,0.7);"><span style="width:12px; height:12px; background:#c4e45f; border-radius:3px; opacity:0.9;"></span> Rental</div>
             <div style="display:flex; align-items:center; gap:6px; font-size:11.5px; font-weight:800; color:rgba(255,255,255,0.7);"><span style="width:12px; height:12px; background:#4ade80; border-radius:3px; opacity:0.9;"></span> Overheads</div>
           `;
           wrap.appendChild(legend);
        }
        const chartH = 320;
        const chartW = 1000;
        const maxTotal = Math.max(...weeklyData.map(d => d.total));
        const scaleY = (chartH - 60) / (maxTotal || 1);
        const stepX = chartW / (weeks.length + 1);
        
        weeklyData.forEach((wd, i) => {
          const x = stepX * (i + 1);
          let currentY = chartH - 30; // base line
          
          const stack = [
            { val: wd.salaries, color: '#4b92c6', label: 'Sal.' },
            { val: wd.rental, color: '#c4e45f', label: 'Rent.' },
            { val: wd.overheads, color: '#4ade80', label: 'Ovhd.' }
          ];

          stack.forEach((st, barIdx) => {
            if (!st.val) return;
            const h = st.val * scaleY;
            const y = currentY - h;
            
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', x - 30);
            rect.setAttribute('y', forceAnimate ? currentY : y);
            rect.setAttribute('width', 60);
            rect.setAttribute('height', forceAnimate ? 0 : h);
            rect.setAttribute('fill', st.color);
            rect.setAttribute('opacity', '0.9');
            rect.setAttribute('rx', '4');
            rect.setAttribute('stroke', 'rgba(255,255,255,0.08)');
            rect.setAttribute('stroke-width', '1');
            
            if (forceAnimate) {
               rect.style.transition = 'all 480ms cubic-bezier(0.25, 1, 0.5, 1)';
               setTimeout(() => {
                  rect.setAttribute('height', h);
                  rect.setAttribute('y', y);
               }, 50 + (i * 80) + (barIdx * 30)); 
            }
            svg.appendChild(rect);
            
            if (h > 24) {
               const lbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
               lbl.setAttribute('x', x);
               lbl.setAttribute('y', y + h/2 + 5);
               lbl.setAttribute('fill', '#000');
               lbl.setAttribute('font-size', '15px');
               lbl.setAttribute('font-family', 'Inter, Arial, sans-serif');
               lbl.setAttribute('font-weight', '900');
               lbl.setAttribute('text-anchor', 'middle');
               lbl.setAttribute('opacity', forceAnimate ? '0' : '0.85');
               const pct = wd.total > 0 ? ((st.val / wd.total) * 100).toFixed(0) : 0;
               lbl.textContent = `${pct}%`;
               
               if (forceAnimate) {
                 lbl.style.transition = 'opacity 300ms ease';
                 setTimeout(() => lbl.setAttribute('opacity', '0.8'), 300 + i * 80);
               }
               svg.appendChild(lbl);
            }
            currentY -= h;
          });
          
          const xLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          xLabel.setAttribute('x', x);
          xLabel.setAttribute('y', chartH - 10);
          xLabel.setAttribute('class', 'axis-label');
          xLabel.setAttribute('font-size', '14.5px');
          xLabel.setAttribute('font-weight', '700');
          xLabel.setAttribute('text-anchor', 'middle');
          xLabel.textContent = `Week ${wd.w}`;
          svg.appendChild(xLabel);

          // Hover Map
          const hoverRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          hoverRect.setAttribute('x', x - 35);
          hoverRect.setAttribute('y', 20);
          hoverRect.setAttribute('width', 70);
          hoverRect.setAttribute('height', chartH - 50);
          hoverRect.setAttribute('class', 'hover-target');
          
          const sPct = wd.total > 0 ? ((wd.salaries/wd.total)*100).toFixed(1) : 0;
          const rPct = wd.total > 0 ? ((wd.rental/wd.total)*100).toFixed(1) : 0;
          const oPct = wd.total > 0 ? ((wd.overheads/wd.total)*100).toFixed(1) : 0;
          
          hoverRect.addEventListener('mousemove', e => window.showCostTtp(e, `
            <div class="tooltip-title">Week ${wd.w} Breakdown</div>
            <div class="tooltip-row"><span>Salaries <span style="color:#60a5fa; font-size:10px;">(${sPct}%)</span></span><strong>${wd.salaries > 0 ? `${formatCost(wd.salaries)} AED` : '-'}</strong></div>
            <div class="tooltip-row"><span>Rental Eq. <span style="color:#a3e635; font-size:10px;">(${rPct}%)</span></span><strong>${wd.rental > 0 ? `${formatCost(wd.rental)} AED` : '-'}</strong></div>
            <div class="tooltip-row"><span>Overheads <span style="color:#4ade80; font-size:10px;">(${oPct}%)</span></span><strong>${wd.overheads > 0 ? `${formatCost(wd.overheads)} AED` : '-'}</strong></div>
            <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:8px 0;">
            <div class="tooltip-row"><span>Total Cost</span><strong style="color:var(--accent)">${wd.total > 0 ? `${formatCost(wd.total)} AED` : '-'}</strong></div>
          `));
          hoverRect.addEventListener('mouseleave', window.hideCostTtp);
          svg.appendChild(hoverRect);
        });
      }

      // Render Cost per Lm Line Chart
      const lmSvg = els.costLmSvg;
      if (lmSvg) {
        while (lmSvg.firstChild) lmSvg.removeChild(lmSvg.firstChild);
        const chartH = 220;
        const chartW = 620;
        lmSvg.setAttribute('viewBox', `0 0 ${chartW} ${chartH}`);
        const stepX = chartW / (weeks.length + 1);
        const maxLmCost = Math.max(...weeklyData.map(d => d.cplm));
        const maxScaleScaleLmScale = maxLmCost > 0 ? maxLmCost * 1.2 : 1;
        const lmScaleY = (chartH - 72) / maxScaleScaleLmScale;
        let pathD = '';
        
        weeklyData.forEach((wd, i) => {
          const x = stepX * (i + 1);
          const y = chartH - 52 - (wd.cplm * lmScaleY);
          
          pathD += `${i === 0 ? 'M' : 'L'} ${x} ${y} `;
          
          const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          dot.setAttribute('cx', x);
          dot.setAttribute('cy', y);
          dot.setAttribute('r', '4.5');
          dot.setAttribute('fill', '#f4f7fb');
          dot.setAttribute('class', 'point-dot');
          dot.style.opacity = forceAnimate ? '0' : '1';
          
          const valL = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          valL.setAttribute('x', x);
          valL.setAttribute('y', y - 12);
          valL.setAttribute('class', 'point-label');
          valL.setAttribute('font-size', '16px');
          valL.setAttribute('font-weight', '900');
          valL.setAttribute('fill', '#f4f7fb');
          valL.style.opacity = forceAnimate ? '0' : '1';
          valL.textContent = wd.cplm > 0 ? wd.cplm.toFixed(1) : "-";
          valL.setAttribute('text-anchor', 'middle');
          
          if (forceAnimate) {
             dot.style.transition = 'opacity 300ms ease';
             valL.style.transition = 'opacity 300ms ease';
             setTimeout(() => {
               dot.style.opacity = '1';
               valL.style.opacity = '1';
             }, 300 + i * 100);
          }
          
          lmSvg.appendChild(dot);
          lmSvg.appendChild(valL);
          
          const xLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          xLabel.setAttribute('x', x);
          xLabel.setAttribute('y', chartH - 14);
          xLabel.setAttribute('class', 'axis-label');
          xLabel.setAttribute('font-size', '15px');
          xLabel.setAttribute('font-weight', '700');
          xLabel.setAttribute('fill', 'rgba(244,247,251,0.92)');
          xLabel.setAttribute('text-anchor', 'middle');
          xLabel.textContent = `Week ${wd.w}`;
          lmSvg.appendChild(xLabel);

          const hoverCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          hoverCircle.setAttribute('cx', x);
          hoverCircle.setAttribute('cy', y);
          hoverCircle.setAttribute('r', '30');
          hoverCircle.setAttribute('class', 'hover-target');
          hoverCircle.addEventListener('mousemove', e => window.showCostTtp(e, `
            <div class="tooltip-title">Week ${wd.w} Efficiency</div>
            <div class="tooltip-row"><span>Cum. Executed</span><strong>${wd.cumLm > 0 ? `${formatCost(wd.cumLm, true)} Lm` : '-'}</strong></div>
            <div class="tooltip-row"><span>Cum. Total Cost</span><strong>${wd.cumTotal > 0 ? `${formatCost(wd.cumTotal)} AED` : '-'}</strong></div>
            <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:8px 0;">
            <div class="tooltip-row"><span>Cum. Cost / Lm</span><strong style="color:var(--accent)">${wd.cplm > 0 ? `${wd.cplm.toFixed(1)} AED/Lm` : "-"}</strong></div>
          `));
          hoverCircle.addEventListener('mouseleave', window.hideCostTtp);
          lmSvg.appendChild(hoverCircle);
        });
        
        if (pathD) {
          const pathLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          pathLine.setAttribute('d', pathD.trim());
          pathLine.setAttribute('fill', 'none');
          pathLine.setAttribute('stroke', 'rgba(142,240,191,0.95)');
          pathLine.setAttribute('stroke-width', '3');
          pathLine.setAttribute('class', 'line-shape');
          lmSvg.insertBefore(pathLine, lmSvg.firstChild);
          
          if (forceAnimate) {
             const len = 1500; // approximation since getTotalLength isn't pre-rendered
             pathLine.style.strokeDasharray = len;
             pathLine.style.strokeDashoffset = len;
             pathLine.style.transition = 'stroke-dashoffset 800ms cubic-bezier(.22,.61,.36,1)';
             requestAnimationFrame(() => {
                 requestAnimationFrame(() => {
                     pathLine.style.strokeDashoffset = '0';
                 });
             });
          }
        }
      }
    }

    function getManpowerCount(row, keys) {
      for (const key of keys) {
        const raw = row?.[key];
        if (raw === undefined || raw === null || raw === '') continue;
        const n = Number(raw);
        if (Number.isFinite(n)) return n;
      }
      return 0;
    }

    function getFilteredManpowerRows(project) {
      const rawProject = normalizeText(project || selectedProject || DEFAULT_PROJECT);
      const targetProject = isAllProjectsValue(rawProject) ? '' : rawProject;
      const filtered = manpowerRows.filter(row => {
        const projectMatch = !targetProject || normalizeText(row?.project) === targetProject;
        const plotMatch = isAllPlotsValue(selectedPlot) || normalizeText(row?.plot) === normalizeText(selectedPlot);
        return projectMatch && plotMatch;
      });

      const latestByDate = new Map();
      filtered.forEach(row => {
        const dateKey = normalizeDateString(row?.date);
        if (!dateKey) return;
        latestByDate.set(dateKey, row);
      });

      const rows = Array.from(latestByDate.entries())
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(([dateKey, row]) => {
          const item = {
            date: dateKey,
            pm: getManpowerCount(row, ['projectmanager', 'project manager']),
            se: getManpowerCount(row, ['siteengineer', 'site engineer', 'siteenginner']),
            foreman: getManpowerCount(row, ['foreman']),
            op: getManpowerCount(row, ['operator', 'operators']),
            vb: getManpowerCount(row, ['vibro operator', 'vibrooperator', 'vibro_operator']),
            rig: getManpowerCount(row, ['riggers', 'rigger']),
            we: getManpowerCount(row, ['welder', 'welders']),
            me: getManpowerCount(row, ['mechanic', 'mechanics']),
            hl: getManpowerCount(row, ['helpers', 'helper'])
          };
          item.total = item.pm + item.se + item.foreman + item.op + item.vb + item.rig + item.we + item.me + item.hl;
          return item;
        });

      return rows;
    }

    function getPortfolioManpowerRows(project = 'All Projects') {
      const rawProject = normalizeText(project || 'All Projects');
      const targetProject = isAllProjectsValue(rawProject) ? '' : rawProject;
      const filtered = manpowerRows.filter(row => {
        const projectMatch = !targetProject || normalizeText(row?.project) === targetProject;
        return projectMatch;
      });

      const latestByDate = new Map();
      filtered.forEach(row => {
        const dateKey = normalizeDateString(row?.date);
        if (!dateKey) return;
        latestByDate.set(dateKey, row);
      });

      return Array.from(latestByDate.entries())
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(([dateKey, row]) => {
          const item = {
            date: dateKey,
            pm: getManpowerCount(row, ['projectmanager', 'project manager']),
            se: getManpowerCount(row, ['siteengineer', 'site engineer', 'siteenginner']),
            foreman: getManpowerCount(row, ['foreman']),
            op: getManpowerCount(row, ['operator', 'operators']),
            vb: getManpowerCount(row, ['vibro operator', 'vibrooperator', 'vibro_operator']),
            rig: getManpowerCount(row, ['riggers', 'rigger']),
            we: getManpowerCount(row, ['welder', 'welders']),
            me: getManpowerCount(row, ['mechanic', 'mechanics']),
            hl: getManpowerCount(row, ['helpers', 'helper'])
          };
          item.total = item.pm + item.se + item.foreman + item.op + item.vb + item.rig + item.we + item.me + item.hl;
          return item;
        });
    }

    function renderManpowerHistogram(rows) {
      const svg = els.manpowerHistSvg;
      if (!svg) return;
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      const wrap = svg.parentElement;

      if (!rows.length) {
        if (wrap) {
          wrap.classList.remove('equipment-chart-wrap-scrollable');
          wrap.style.overflowX = 'hidden';
          wrap.style.overflowY = 'hidden';
          wrap.scrollLeft = 0;
        }
        svg.style.width = '100%';
        svg.style.minWidth = '100%';
        const empty = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        empty.setAttribute('x', '500');
        empty.setAttribute('y', '160');
        empty.setAttribute('text-anchor', 'middle');
        empty.setAttribute('fill', 'rgba(244,247,251,0.62)');
        empty.setAttribute('font-size', '14');
        empty.setAttribute('font-weight', '700');
        empty.textContent = 'No manpower data available';
        svg.appendChild(empty);
        return;
      }

      const maxVisibleBars = 14;
      const chartH = 320;
      const left = 52;
      const right = 18;
      const top = 16;
      const bottom = 62;
      const orderedRows = rows.slice().reverse();
      const isScrollable = orderedRows.length > maxVisibleBars;
      const visiblePlotW = 1000 - left - right;
      const overflowSlotW = visiblePlotW / maxVisibleBars;
      const overflowBarW = 28;
      const chartW = isScrollable ? left + right + ((orderedRows.length - 1) * overflowSlotW) + overflowBarW : 1000;
      const innerH = chartH - top - bottom;
      const stepX = isScrollable ? overflowSlotW : (chartW - left - right) / Math.max(orderedRows.length, 1);
      const barW = isScrollable ? overflowBarW : Math.max(16, Math.min(40, stepX * 0.5));
      const maxVal = Math.max(...rows.map(r => r.total), 1);
      const scaleY = innerH / maxVal;
      svg.setAttribute('viewBox', `0 0 ${chartW} ${chartH}`);
      if (wrap) {
        wrap.classList.toggle('equipment-chart-wrap-scrollable', isScrollable);
        wrap.style.overflowX = isScrollable ? 'auto' : 'hidden';
        wrap.style.overflowY = 'hidden';
        wrap.style.webkitOverflowScrolling = 'touch';
        if (!isScrollable) wrap.scrollLeft = 0;
      }
      svg.style.width = isScrollable ? `${chartW}px` : '100%';
      svg.style.minWidth = isScrollable ? `${chartW}px` : '100%';
      svg.style.height = '100%';

      let tooltipEl = document.getElementById('manpowerTooltip');
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'manpowerTooltip';
        tooltipEl.className = 'chart-tooltip';
        tooltipEl.style.position = 'fixed';
        document.body.appendChild(tooltipEl);
      }

      const showTooltip = (evt, row) => {
        tooltipEl.innerHTML = `
          <div class="tooltip-title">${formatDateFullLabel(row.date)}</div>
          <div class="tooltip-row"><span>PM</span><strong>${row.pm}</strong></div>
          <div class="tooltip-row"><span>Engineers</span><strong>${row.se}</strong></div>
          <div class="tooltip-row"><span>Foreman</span><strong>${row.foreman}</strong></div>
          <div class="tooltip-row"><span>Operator</span><strong>${row.op}</strong></div>
          <div class="tooltip-row"><span>Vibro Op.</span><strong>${row.vb}</strong></div>
          <div class="tooltip-row"><span>Riggers</span><strong>${row.rig}</strong></div>
          <div class="tooltip-row"><span>Welders</span><strong>${row.we}</strong></div>
          <div class="tooltip-row"><span>Mechanic</span><strong>${row.me}</strong></div>
          <div class="tooltip-row"><span>Helpers</span><strong>${row.hl}</strong></div>
          <hr style="border:0; border-top:1px solid rgba(255,255,255,0.1); margin:8px 0;">
          <div class="tooltip-row"><span>Total</span><strong>${row.total}</strong></div>
        `;
        tooltipEl.classList.add('visible');
        const x = Math.min(window.innerWidth - 260, evt.clientX + 14);
        const y = Math.min(window.innerHeight - 220, evt.clientY + 14);
        tooltipEl.style.left = `${Math.max(8, x)}px`;
        tooltipEl.style.top = `${Math.max(8, y)}px`;
      };

      const hideTooltip = () => {
        tooltipEl.classList.remove('visible');
      };

      for (let i = 0; i < 4; i += 1) {
        const y = top + (innerH / 3) * i;
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', String(left));
        line.setAttribute('x2', String(chartW - right));
        line.setAttribute('y1', String(y));
        line.setAttribute('y2', String(y));
        line.setAttribute('stroke', 'rgba(255,255,255,0.08)');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);
      }

      orderedRows.forEach((row, idx) => {
        const barX = isScrollable ? (left + stepX * idx) : (left + stepX * idx + (stepX - barW) / 2);
        const x = barX + barW / 2;
        const h = row.total * scaleY;
        const y = chartH - bottom - h;

        const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bar.setAttribute('x', String(barX));
        bar.setAttribute('y', String(y));
        bar.setAttribute('width', String(barW));
        bar.setAttribute('height', String(h));
        bar.setAttribute('rx', '4');
        bar.setAttribute('fill', 'rgba(142,240,191,0.86)');
        bar.setAttribute('stroke', 'rgba(255,255,255,0.2)');
        bar.setAttribute('stroke-width', '1');
        bar.addEventListener('mousemove', evt => showTooltip(evt, row));
        bar.addEventListener('mouseleave', hideTooltip);
        svg.appendChild(bar);

        const val = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        val.setAttribute('x', String(x));
        val.setAttribute('y', String(Math.max(y - 6, 12)));
        val.setAttribute('text-anchor', 'middle');
        val.setAttribute('fill', 'rgba(244,247,251,0.92)');
        val.setAttribute('font-size', '11');
        val.setAttribute('font-weight', '800');
        val.textContent = String(row.total);
        svg.appendChild(val);

        const dateLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        dateLabel.setAttribute('x', String(x));
        dateLabel.setAttribute('y', String(chartH - 18));
        dateLabel.setAttribute('text-anchor', 'middle');
        dateLabel.setAttribute('fill', 'rgba(244,247,251,0.72)');
        dateLabel.setAttribute('font-size', '11');
        dateLabel.setAttribute('font-weight', '700');
        dateLabel.textContent = formatShortDateLabel(row.date);
        svg.appendChild(dateLabel);
      });

      if (wrap && isScrollable) {
        requestAnimationFrame(() => {
          wrap.scrollLeft = Math.max(0, wrap.scrollWidth - wrap.clientWidth);
        });
        if (!wrap.dataset.manpowerWheelBound) {
          wrap.addEventListener('wheel', evt => {
            if (Math.abs(evt.deltaY) <= Math.abs(evt.deltaX)) return;
            evt.preventDefault();
            wrap.scrollLeft += evt.deltaY;
          }, { passive: false });
          wrap.dataset.manpowerWheelBound = 'true';
        }
      }

      svg.onmouseleave = hideTooltip;
    }

    function getProjectEquipmentDateRows(project) {
      const projectManpowerRows = getFilteredManpowerRows(project);
      const manpowerDateKeys = Array.from(new Set(
        projectManpowerRows
          .map(row => normalizeDateString(row?.date))
          .filter(Boolean)
      )).sort();
      if (!manpowerDateKeys.length) return [];

      const targetProjectToken = getCompanyProjectToken(project || selectedProject || DEFAULT_PROJECT);
      const normalizedSelectedPlot = normalizeText(selectedPlot);
      const equipmentRows = dailyReportEquipmentRows
        .map(sanitizeDailyReportEquipmentRow)
        .filter(item => manpowerDateKeys.includes(item.date))
        .filter(item => getCompanyProjectToken(item.projectRaw || item.project) === targetProjectToken)
        .filter(item => {
          if (isAllPlotsValue(normalizedSelectedPlot)) return true;
          const rowPlot = normalizeText(item.plot);
          return rowPlot === normalizedSelectedPlot || isAllPlotsValue(rowPlot);
        });

      const colorByCategory = {
        rig: '#8ef0bf',
        crane: '#f1d48b',
        other: '#f5a6b8'
      };

      return manpowerDateKeys.map(dateKey => {
        const itemsForDate = equipmentRows
          .filter(item => item.date === dateKey)
          .filter(item => {
            const typeKey = normalizeText(item.type).toLowerCase();
            return !!typeKey;
          })
          .reduce((acc, item) => {
            const typeKey = normalizeText(item.type).toLowerCase();
            const labelKey = normalizeText(item.label);
            const dedupeKey = `${typeKey}::${labelKey}`;
            if (acc.some(existing => existing._dedupeKey === dedupeKey)) return acc;
            const ownership = normalizeText(item.contractor).toLowerCase() === 'apfc' ? 'Owned' : 'Rented';
            const category = typeKey === 'rig' || typeKey === 'crane' ? typeKey : 'other';
            acc.push({
              _dedupeKey: dedupeKey,
              ownership,
              category,
              type: item.type,
              label: item.label || typeKey,
              color: colorByCategory[category] || colorByCategory.vibrator || '#9ca3af'
            });
            return acc;
          }, [])
          .sort((a, b) => {
            const categoryOrder = { rig: 0, crane: 1, other: 2 };
            const ownershipOrder = { owned: 0, rented: 1 };
            const aCategory = categoryOrder[a.category] ?? 99;
            const bCategory = categoryOrder[b.category] ?? 99;
            if (aCategory !== bCategory) return aCategory - bCategory;
            const aOwnership = ownershipOrder[normalizeText(a.ownership).toLowerCase()] ?? 99;
            const bOwnership = ownershipOrder[normalizeText(b.ownership).toLowerCase()] ?? 99;
            if (aOwnership !== bOwnership) return aOwnership - bOwnership;
            return normalizeText(a.label).localeCompare(normalizeText(b.label), undefined, { numeric: true });
          });

        const rigs = itemsForDate.filter(item => item.category === 'rig').length;
        const cranes = itemsForDate.filter(item => item.category === 'crane').length;
        const others = itemsForDate.filter(item => item.category !== 'rig' && item.category !== 'crane').length;

        return {
          date: dateKey,
          ownedRigs: rigs,
          ownedCranes: cranes,
          rentedEq: others,
          total: rigs + cranes + others,
          activeItems: itemsForDate.map(({ _dedupeKey, ...item }) => item)
        };
      });
    }

    function getCompanyProjectOrder() {
      const baseProjects = Array.from(new Set(rawRows.map(row => normalizeText(row?.project)).filter(Boolean)));
      const companyProjects = Array.from(new Set(companyManpowerRows.map(row => getCompanyProjectLabel(row.Project || row.project)).filter(Boolean)));
      const ordered = [];
      [...baseProjects, ...companyProjects].forEach(project => {
        if (!ordered.includes(project)) ordered.push(project);
      });
      return ordered;
    }

    function updateCompanyDesignationOptions() {
      if (!els.companyManpowerDesignationSelect) return;
      const designations = Array.from(new Set(
        companyManpowerRows
          .map(sanitizeCompanyEmployee)
          .map(employee => employee.designation)
          .filter(Boolean)
      )).sort((a, b) => a.localeCompare(b));

      const currentValue = companyManpowerDesignationFilter || 'all';
      els.companyManpowerDesignationSelect.innerHTML = [
        '<option value="all">All Designations</option>',
        ...designations.map(designation => `<option value="${escapeHtml(designation)}">${escapeHtml(designation)}</option>`)
      ].join('');

      els.companyManpowerDesignationSelect.value = designations.includes(currentValue) ? currentValue : 'all';
      companyManpowerDesignationFilter = els.companyManpowerDesignationSelect.value;
    }

    function updateCompanyAnalyticsDesignationOptions() {
      if (!els.companyAnalyticsDesignationSelect) return;
      const designations = Array.from(new Set(
        companyManpowerRows
          .map(sanitizeCompanyEmployee)
          .map(employee => employee.designation)
          .filter(Boolean)
      )).sort((a, b) => a.localeCompare(b));

      const currentValue = companyAnalyticsDesignationFilter || 'all';
      els.companyAnalyticsDesignationSelect.innerHTML = [
        '<option value="all">All Designations</option>',
        ...designations.map(designation => `<option value="${escapeHtml(designation)}">${escapeHtml(designation)}</option>`)
      ].join('');
      els.companyAnalyticsDesignationSelect.value = designations.includes(currentValue) ? currentValue : 'all';
      companyAnalyticsDesignationFilter = els.companyAnalyticsDesignationSelect.value;
    }

    function getCompanyColumnWidth(projectName) {
      return companyManpowerColumnWidths[projectName] || 320;
    }

    function ensureCompanyColumnWidths(projects) {
      projects.forEach(projectName => {
        if (!companyManpowerColumnWidths[projectName]) {
          companyManpowerColumnWidths[projectName] = 320;
        }
      });
    }

    function getFilteredCompanyEmployees(project = selectedProject) {
      const targetProjectToken = getCompanyProjectToken(project || selectedProject || DEFAULT_PROJECT);
      return companyManpowerRows
        .map(sanitizeCompanyEmployee)
        .filter(employee => employee.employeeName && employee.designation)
        .filter(employee => {
          if (companyManpowerScopeMode === 'all') return true;
          return getCompanyProjectToken(employee.projectRaw || employee.project) === targetProjectToken;
        })
        .filter(employee => companyManpowerDesignationFilter === 'all' || employee.designation === companyManpowerDesignationFilter);
    }

    function getAnalyticsCompanyEmployees(project = selectedProject) {
      const targetProjectToken = getCompanyProjectToken(project || selectedProject || DEFAULT_PROJECT);
      return companyManpowerRows
        .map(sanitizeCompanyEmployee)
        .filter(employee => employee.employeeName && employee.designation)
        .filter(employee => {
          if (companyAnalyticsScopeMode === 'all') return true;
          return getCompanyProjectToken(employee.projectRaw || employee.project) === targetProjectToken;
        })
        .filter(employee => companyAnalyticsDesignationFilter === 'all' || employee.designation === companyAnalyticsDesignationFilter);
    }

    function getCompanyProjectColumns(project = selectedProject) {
      const filteredEmployees = getFilteredCompanyEmployees(project);
      const projectOrder = getCompanyProjectOrder();
      const filteredProjects = Array.from(new Set(filteredEmployees.map(employee => employee.project)));
      filteredProjects.sort((a, b) => {
        const ai = projectOrder.indexOf(a);
        const bi = projectOrder.indexOf(b);
        if (ai === -1 && bi === -1) return a.localeCompare(b);
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
      });
      return filteredProjects;
    }

    function groupCompanyEmployeesForMatrix(project = selectedProject) {
      const employees = getFilteredCompanyEmployees(project);
      const projects = getCompanyProjectColumns(project);
      const designationMap = new Map();

      employees.forEach(employee => {
        if (!designationMap.has(employee.designation)) designationMap.set(employee.designation, new Map());
        const projectMap = designationMap.get(employee.designation);
        if (!projectMap.has(employee.project)) projectMap.set(employee.project, []);
        projectMap.get(employee.project).push(employee);
      });

      const designations = Array.from(designationMap.keys()).sort((a, b) => a.localeCompare(b));
      return {
        projects,
        designationGroups: designations.map(designation => {
          const projectMap = designationMap.get(designation);
          const counts = projects.map(projectName => (projectMap.get(projectName) || []).length);
          const rowCount = Math.max(...counts, 1);
          const total = counts.reduce((sum, value) => sum + value, 0);
          projects.forEach(projectName => {
            const list = projectMap.get(projectName) || [];
            list.sort((a, b) => a.employeeName.localeCompare(b.employeeName));
          });
          return { designation, projectMap, rowCount, total };
        }),
        totalEmployees: employees.length
      };
    }

    function updateCompanyExportProjectOptions() {
      if (!els.companyExportProjectSelect) return;
      const projects = getCompanyProjectOrder();
      els.companyExportProjectSelect.innerHTML = [
        '<option value="all">All Projects</option>',
        ...projects.map(project => `<option value="${escapeHtml(project)}">${escapeHtml(project)}</option>`)
      ].join('');
    }

    function toggleCompanyExportPanel(show) {
      if (!els.companyExportPanel) return;
      els.companyExportPanel.hidden = !show;
    }

    function escapeXml(value) {
      return String(value ?? '')
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;');
    }

    function columnNameFromIndex(index) {
      let name = '';
      let current = index + 1;
      while (current > 0) {
        const remainder = (current - 1) % 26;
        name = String.fromCharCode(65 + remainder) + name;
        current = Math.floor((current - 1) / 26);
      }
      return name;
    }

    function crc32(bytes) {
      const table = crc32.table || (crc32.table = (() => {
        const values = [];
        for (let i = 0; i < 256; i += 1) {
          let c = i;
          for (let j = 0; j < 8; j += 1) {
            c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
          }
          values[i] = c >>> 0;
        }
        return values;
      })());
      let crc = 0 ^ -1;
      for (let i = 0; i < bytes.length; i += 1) {
        crc = (crc >>> 8) ^ table[(crc ^ bytes[i]) & 0xff];
      }
      return (crc ^ -1) >>> 0;
    }

    function writeUint16(bytes, value) {
      bytes.push(value & 0xff, (value >>> 8) & 0xff);
    }

    function writeUint32(bytes, value) {
      bytes.push(value & 0xff, (value >>> 8) & 0xff, (value >>> 16) & 0xff, (value >>> 24) & 0xff);
    }

    function appendBytes(target, source) {
      for (let i = 0; i < source.length; i += 1) {
        target.push(source[i]);
      }
    }

    function createZip(files) {
      const encoder = new TextEncoder();
      const bytes = [];
      const centralDirectory = [];

      files.forEach(file => {
        const nameBytes = encoder.encode(file.name);
        const dataBytes = encoder.encode(file.content);
        const offset = bytes.length;
        const checksum = crc32(dataBytes);

        writeUint32(bytes, 0x04034b50);
        writeUint16(bytes, 20);
        writeUint16(bytes, 0);
        writeUint16(bytes, 0);
        writeUint16(bytes, 0);
        writeUint16(bytes, 0);
        writeUint32(bytes, checksum);
        writeUint32(bytes, dataBytes.length);
        writeUint32(bytes, dataBytes.length);
        writeUint16(bytes, nameBytes.length);
        writeUint16(bytes, 0);
        appendBytes(bytes, nameBytes);
        appendBytes(bytes, dataBytes);

        centralDirectory.push({ file, nameBytes, dataBytes, offset, checksum });
      });

      const centralOffset = bytes.length;
      centralDirectory.forEach(entry => {
        writeUint32(bytes, 0x02014b50);
        writeUint16(bytes, 20);
        writeUint16(bytes, 20);
        writeUint16(bytes, 0);
        writeUint16(bytes, 0);
        writeUint16(bytes, 0);
        writeUint16(bytes, 0);
        writeUint32(bytes, entry.checksum);
        writeUint32(bytes, entry.dataBytes.length);
        writeUint32(bytes, entry.dataBytes.length);
        writeUint16(bytes, entry.nameBytes.length);
        writeUint16(bytes, 0);
        writeUint16(bytes, 0);
        writeUint16(bytes, 0);
        writeUint16(bytes, 0);
        writeUint32(bytes, 0);
        writeUint32(bytes, entry.offset);
        appendBytes(bytes, entry.nameBytes);
      });

      const centralSize = bytes.length - centralOffset;
      writeUint32(bytes, 0x06054b50);
      writeUint16(bytes, 0);
      writeUint16(bytes, 0);
      writeUint16(bytes, files.length);
      writeUint16(bytes, files.length);
      writeUint32(bytes, centralSize);
      writeUint32(bytes, centralOffset);
      writeUint16(bytes, 0);

      return new Uint8Array(bytes);
    }

    function createXlsxWorkbook(sheetName, rows) {
      const safeSheetName = String(sheetName || 'Manpower').replace(/[\[\]:*?/\\]/g, ' ').slice(0, 31) || 'Manpower';
      const columnWidths = [20, 34, 30, 18, 14, 14, 14, 18, 34];
      const sheetRows = rows.map((row, rowIndex) => {
        const cells = row.map((value, colIndex) => {
          const cellRef = `${columnNameFromIndex(colIndex)}${rowIndex + 1}`;
          const styleIndex = rowIndex === 1 ? 1 : (rowIndex > 1 && colIndex === 0 ? 2 : 0);
          return `<c r="${cellRef}" t="inlineStr" s="${styleIndex}"><is><t>${escapeXml(value)}</t></is></c>`;
        }).join('');
        return `<row r="${rowIndex + 1}">${cells}</row>`;
      }).join('');

      const worksheetXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
          <cols>${columnWidths.map((width, idx) => `<col min="${idx + 1}" max="${idx + 1}" width="${width}" customWidth="1"/>`).join('')}</cols>
          <sheetData>${sheetRows}</sheetData>
        </worksheet>`;

      const workbookXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
          <sheets><sheet name="${escapeXml(safeSheetName)}" sheetId="1" r:id="rId1"/></sheets>
        </workbook>`;

      const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
        <styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
          <fonts count="2"><font><sz val="11"/><name val="Segoe UI"/></font><font><b/><color rgb="FFFFFFFF"/><sz val="11"/><name val="Segoe UI"/></font></fonts>
          <fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF0F1720"/><bgColor indexed="64"/></patternFill></fill></fills>
          <borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
          <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
          <cellXfs count="3">
            <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
            <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
            <xf numFmtId="49" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>
          </cellXfs>
          <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
        </styleSheet>`;

      return createZip([
        {
          name: '[Content_Types].xml',
          content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
            <Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
              <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
              <Default Extension="xml" ContentType="application/xml"/>
              <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
              <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
              <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
            </Types>`
        },
        {
          name: '_rels/.rels',
          content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
            <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
            </Relationships>`
        },
        {
          name: 'xl/workbook.xml',
          content: workbookXml
        },
        {
          name: 'xl/_rels/workbook.xml.rels',
          content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
            <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
              <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
              <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
            </Relationships>`
        },
        {
          name: 'xl/worksheets/sheet1.xml',
          content: worksheetXml
        },
        {
          name: 'xl/styles.xml',
          content: stylesXml
        }
      ]);
    }

    function formatExportDate(value) {
      const raw = normalizeText(value);
      if (!raw || raw === '-') return '-';
      const isoMatch = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (isoMatch) return `${isoMatch[3]}-${isoMatch[2]}-${isoMatch[1]}`;
      const d = new Date(raw);
      if (!Number.isNaN(d.getTime())) {
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
      }
      return raw;
    }

    function exportCompanyManpowerWorkbook(scopeProject) {
      const scopeText = normalizeText(scopeProject);
      const normalizedScope = scopeText.toLowerCase();
      const isAllScope = normalizedScope === 'all' || normalizedScope === 'all projects' || isAllProjectsValue(scopeText);
      const sanitizedRows = companyManpowerRows
        .map(sanitizeCompanyEmployee)
        .filter(employee => employee.employeeName && employee.designation);
      const rows = (isAllScope
        ? sanitizedRows
        : sanitizedRows.filter(employee => getCompanyProjectToken(employee.projectRaw || employee.project) === getCompanyProjectToken(scopeText))
      )
        .sort((a, b) => (
          a.project.localeCompare(b.project) ||
          a.designation.localeCompare(b.designation) ||
          a.employeeName.localeCompare(b.employeeName)
        ));

      const title = isAllScope ? 'APFC Company Manpower' : `${scopeText} Manpower`;
      const generatedAt = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dubai' });
      if (!rows.length) {
        alert('No manpower records found for the selected export scope.');
        return;
      }
      const worksheetRows = [
        [title, `Generated from APFC Project Dashboard on ${generatedAt}`, '', '', '', '', '', '', ''],
        ['Employee Number', 'Employee Name', 'Designation', 'Project', 'Shift', 'Camp Number', 'Room Number', 'Joining Date', 'Remarks'],
        ...rows.map(row => [
          row.employeeNumber || '-',
          row.employeeName || '-',
          row.subDesignation || row.designation || '-',
          row.project || '-',
          row.shift || '-',
          row.campNumber || '-',
          row.roomNumber || '-',
          formatExportDate(row.joiningDate),
          row.remarks || '-'
        ])
      ];

      const workbookBytes = createXlsxWorkbook('Manpower', worksheetRows);
      const blob = new Blob([workbookBytes], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const link = document.createElement('a');
      const slug = isAllScope ? 'all-projects' : scopeText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      link.href = URL.createObjectURL(blob);
      link.download = `apfc-manpower-${slug}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }

    function renderCompanyManpowerPage(project = selectedProject) {
      const layout = els.companyManpowerLayoutSelect?.value || 'project-matrix';
      const { projects, designationGroups, totalEmployees } = groupCompanyEmployeesForMatrix(project);

      if (els.companyManpowerSubtitle) {
        els.companyManpowerSubtitle.textContent = layout === 'project-matrix'
          ? 'Employee comparison by designation and project'
          : 'Employee comparison by designation and project';
      }

      if (els.companyManpowerDesignationSelect && els.companyManpowerDesignationSelect.value !== companyManpowerDesignationFilter) {
        els.companyManpowerDesignationSelect.value = companyManpowerDesignationFilter;
      }

      els.companyManpowerScopeButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.companyScope === companyManpowerScopeMode);
      });

      ensureCompanyColumnWidths(projects);

      if (els.companyManpowerColGroup) {
        els.companyManpowerColGroup.innerHTML = [
          '<col style="width:220px;">',
          ...projects.map(projectName => `<col style="width:${getCompanyColumnWidth(projectName)}px;">`)
        ].join('');
      }

      if (els.companyManpowerSummaryMeta) {
        const scopeText = companyManpowerScopeMode === 'all' ? 'All projects' : `Filtered by ${project}`;
        els.companyManpowerSummaryMeta.textContent = `${scopeText} | ${projects.length} project column${projects.length === 1 ? '' : 's'} | ${totalEmployees} employee${totalEmployees === 1 ? '' : 's'}`;
      }

      if (els.companyManpowerHeadRow) {
        els.companyManpowerHeadRow.innerHTML = [
          '<th>Designation</th>',
          ...projects.map(projectName => {
            const count = getFilteredCompanyEmployees(project).filter(employee => employee.project === projectName).length;
            return `<th class="company-project-th" data-company-col="${escapeHtml(projectName)}"><div class="company-project-head"><strong>${escapeHtml(projectName)}</strong><span>${count} Staff</span></div><span class="company-col-resizer" data-company-col="${escapeHtml(projectName)}" aria-hidden="true"></span></th>`;
          })
        ].join('');
      }

      if (!els.companyManpowerMatrixBody) return;

      if (!projects.length || !designationGroups.length) {
        els.companyManpowerMatrixBody.innerHTML = `<tr><td colspan="${Math.max(projects.length + 1, 2)}" class="manpower-empty">No company manpower records available for the current scope.</td></tr>`;
        return;
      }

      els.companyManpowerMatrixBody.innerHTML = designationGroups.map(group => {
        return Array.from({ length: group.rowCount }, (_, rowIndex) => {
          const cells = projects.map(projectName => {
            const employee = (group.projectMap.get(projectName) || [])[rowIndex];
            if (!employee) {
              return '<td data-company-col="' + escapeHtml(projectName) + '"><div class="company-empty-slot">-</div></td>';
            }
            return `
              <td data-company-col="${escapeHtml(projectName)}">
                <div class="company-employee-card">
                  <div class="company-employee-name">${escapeHtml(employee.employeeName)}</div>
                  <div class="company-employee-meta">${escapeHtml(employee.shift || '-')}</div>
                </div>
              </td>
            `;
          }).join('');

          return `
            <tr>
              ${rowIndex === 0 ? `<td rowspan="${group.rowCount}" class="company-designation-cell"><div class="company-designation-name">${escapeHtml(group.designation)}</div><div class="company-designation-meta">${group.total} Staff</div></td>` : ''}
              ${cells}
            </tr>
          `;
        }).join('');
      }).join('');

      bindCompanyManpowerHoverState();
      bindCompanyColumnResize();
    }

    function bindCompanyManpowerHoverState() {
      const table = document.getElementById('companyManpowerTable');
      const body = els.companyManpowerMatrixBody;
      const headRow = els.companyManpowerHeadRow;
      if (!table || !body || !headRow || table.dataset.hoverBound === 'true') return;

      const clearHover = () => {
        table.querySelectorAll('.company-hover-row, .company-hover-col, .company-hover-cell').forEach(el => {
          el.classList.remove('company-hover-row', 'company-hover-col', 'company-hover-cell');
        });
      };

      body.addEventListener('mouseover', evt => {
        const td = evt.target.closest('td[data-company-col]');
        if (!td) return;
        clearHover();
        const tr = td.parentElement;
        const colName = td.dataset.companyCol;
        tr?.querySelectorAll('td').forEach(cell => cell.classList.add('company-hover-row'));
        td.classList.add('company-hover-cell');
        headRow.querySelectorAll('th').forEach(th => {
          const strong = th.querySelector('strong');
          if (strong && strong.textContent === colName) th.classList.add('company-hover-col');
        });
        table.querySelectorAll(`td[data-company-col="${CSS.escape(colName)}"]`).forEach(cell => {
          cell.classList.add('company-hover-col');
        });
      });

      body.addEventListener('mouseleave', clearHover);
      table.dataset.hoverBound = 'true';
    }

    function bindCompanyColumnResize() {
      const table = document.getElementById('companyManpowerTable');
      const headRow = els.companyManpowerHeadRow;
      if (!table || !headRow || table.dataset.resizeBound === 'true') return;

      let dragState = null;

      const stopDrag = () => {
        if (!dragState) return;
        dragState.header.classList.remove('company-col-resizing');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        dragState = null;
      };

      const onMove = evt => {
        if (!dragState) return;
        const delta = evt.clientX - dragState.startX;
        const nextWidth = Math.max(220, dragState.startWidth + delta);
        companyManpowerColumnWidths[dragState.project] = nextWidth;
        const col = els.companyManpowerColGroup?.children[dragState.index + 1];
        if (col) col.style.width = `${nextWidth}px`;
      };

      headRow.addEventListener('mousedown', evt => {
        const handle = evt.target.closest('.company-col-resizer');
        if (!handle) return;
        const project = handle.dataset.companyCol;
        const header = handle.closest('th');
        const index = Array.from(headRow.children).indexOf(header) - 1;
        if (!project || !header || index < 0) return;
        evt.preventDefault();
        dragState = {
          project,
          header,
          index,
          startX: evt.clientX,
          startWidth: getCompanyColumnWidth(project)
        };
        header.classList.add('company-col-resizing');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
      });

      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', stopDrag);
      table.dataset.resizeBound = 'true';
    }

    function buildCountMap(items, getter) {
      const map = new Map();
      items.forEach(item => {
        const key = getter(item);
        if (!key) return;
        map.set(key, (map.get(key) || 0) + 1);
      });
      return map;
    }

    function renderRankBars(container, entries, formatter = value => String(value), emptyLabel = 'No data available') {
      if (!container) return;
      if (!entries.length) {
        container.innerHTML = `<div class="company-analytics-empty">${emptyLabel}</div>`;
        return;
      }
      const maxValue = Math.max(...entries.map(entry => entry.value), 1);
      container.innerHTML = entries.map(entry => {
        const width = Math.max(8, (entry.value / maxValue) * 100);
        return `
          <div class="company-rank-row">
            <div class="company-rank-meta">
              <span class="company-rank-label">${escapeHtml(entry.label)}</span>
              <strong class="company-rank-value">${escapeHtml(formatter(entry.value))}</strong>
            </div>
            <div class="company-rank-bar-shell">
              <div class="company-rank-bar" style="width:${width}%;"></div>
            </div>
          </div>
        `;
      }).join('');
    }

    function getCompanyAnalyticsTooltip() {
      let tooltip = document.getElementById('companyAnalyticsTooltip');
      if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'companyAnalyticsTooltip';
        tooltip.className = 'chart-tooltip company-analytics-tooltip';
        tooltip.style.position = 'fixed';
        document.body.appendChild(tooltip);
      }
      return tooltip;
    }

    function showCompanyAnalyticsTooltip(evt, title, rows) {
      const tooltip = getCompanyAnalyticsTooltip();
      tooltip.innerHTML = `
        <div class="tooltip-title">${escapeHtml(title)}</div>
        ${rows.map(row => `<div class="tooltip-row"><span>${escapeHtml(row.label)}</span><strong>${escapeHtml(row.value)}</strong></div>`).join('')}
      `;
      tooltip.classList.add('visible');
      const left = Math.min(window.innerWidth - 260, evt.clientX + 14);
      const top = Math.min(window.innerHeight - 180, evt.clientY + 14);
      tooltip.style.left = `${Math.max(8, left)}px`;
      tooltip.style.top = `${Math.max(8, top)}px`;
    }

    function hideCompanyAnalyticsTooltip() {
      const tooltip = document.getElementById('companyAnalyticsTooltip');
      if (tooltip) tooltip.classList.remove('visible');
    }

    function renderCompanyAnalyticsPie(container, entries, options = {}) {
      if (!container) return;
      if (!entries.length) {
        container.innerHTML = `<div class="company-analytics-empty">${escapeHtml(options.emptyLabel || 'No headcount data available.')}</div>`;
        return;
      }

      const colors = ['#8ef0bf', '#7ab8ff', '#f5c977', '#f4a5c3', '#d5d9ff', '#9ee6e2', '#ffb3bf', '#b8f1a3'];
      const total = entries.reduce((sum, entry) => sum + entry.value, 0);
      const cx = 150;
      const cy = 150;
      const outerR = 112;
      const innerR = 68;
      let angle = -Math.PI / 2;
      const slices = entries.map((entry, index) => {
        const slice = total > 0 ? (entry.value / total) * Math.PI * 2 : 0;
        const start = angle;
        const end = angle + slice;
        angle = end;
        return { entry, index, start, end, color: colors[index % colors.length] };
      });

      const pathForSlice = slice => {
        const largeArc = (slice.end - slice.start) > Math.PI ? 1 : 0;
        const x1 = cx + Math.cos(slice.start) * outerR;
        const y1 = cy + Math.sin(slice.start) * outerR;
        const x2 = cx + Math.cos(slice.end) * outerR;
        const y2 = cy + Math.sin(slice.end) * outerR;
        const ix1 = cx + Math.cos(slice.end) * innerR;
        const iy1 = cy + Math.sin(slice.end) * innerR;
        const ix2 = cx + Math.cos(slice.start) * innerR;
        const iy2 = cy + Math.sin(slice.start) * innerR;
        return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix2} ${iy2} Z`;
      };

      container.innerHTML = `
        <div class="company-pie-layout">
          <div class="company-pie-stage">
            <svg class="company-pie-svg" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
              ${slices.map(slice => `<path class="company-pie-slice" data-pie-index="${slice.index}" d="${pathForSlice(slice)}" fill="${slice.color}" stroke="rgba(9,13,18,0.92)" stroke-width="2"></path>`).join('')}
            </svg>
            <div class="company-pie-center">
              <strong>${total.toLocaleString()}</strong>
              <span>${escapeHtml(options.centerLabel || 'Staff')}</span>
            </div>
          </div>
          <div class="company-pie-legend">
            ${entries.map((entry, index) => {
              const pct = total > 0 ? (entry.value / total) * 100 : 0;
              return `
                <div class="company-pie-legend-item" data-pie-index="${index}">
                  <span class="company-pie-legend-swatch" style="background:${colors[index % colors.length]}"></span>
                  <span>${escapeHtml(entry.label)}</span>
                  <strong>${entry.value} (${pct.toFixed(0)}%)</strong>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;

      const showForIndex = (evt, index) => {
        const entry = entries[index];
        if (!entry) return;
        const pct = total > 0 ? (entry.value / total) * 100 : 0;
        showCompanyAnalyticsTooltip(evt, entry.label, [
          { label: 'Headcount', value: `${entry.value} staff` },
          { label: 'Share', value: `${pct.toFixed(1)}%` }
        ]);
      };

      container.querySelectorAll('[data-pie-index]').forEach(el => {
        const index = Number(el.getAttribute('data-pie-index'));
        el.addEventListener('mousemove', evt => showForIndex(evt, index));
        el.addEventListener('mouseleave', hideCompanyAnalyticsTooltip);
      });
    }

    function getPortfolioEquipmentDateRows(project = 'All Projects') {
      const rawProject = normalizeText(project || 'All Projects');
      const targetProjectToken = isAllProjectsValue(rawProject) ? '' : getCompanyProjectToken(rawProject);
      const normalizedProjectRows = dailyReportEquipmentRows
        .map(sanitizeDailyReportEquipmentRow)
        .filter(item => !targetProjectToken || getCompanyProjectToken(item.projectRaw || item.project) === targetProjectToken);

      const grouped = new Map();
      normalizedProjectRows.forEach(item => {
        if (!item.date) return;
        if (!grouped.has(item.date)) grouped.set(item.date, []);
        grouped.get(item.date).push(item);
      });

      return Array.from(grouped.entries()).sort((a, b) => a[0].localeCompare(b[0])).map(([dateKey, items]) => {
        const deduped = items.reduce((acc, item) => {
          const typeKey = normalizeText(item.type).toLowerCase();
          const labelKey = normalizeText(item.label);
          const dedupeKey = `${typeKey}::${labelKey}`;
          if (acc.some(existing => existing._dedupeKey === dedupeKey)) return acc;
          const ownership = normalizeText(item.contractor).toLowerCase() === 'apfc' ? 'Owned' : 'Rented';
          const category = typeKey === 'rig' || typeKey === 'crane' ? typeKey : 'other';
          acc.push({
            _dedupeKey: dedupeKey,
            ownership,
            category,
            type: item.type,
            label: item.label || typeKey
          });
          return acc;
        }, []);
        const rigs = deduped.filter(item => item.category === 'rig').length;
        const cranes = deduped.filter(item => item.category === 'crane').length;
        const others = deduped.filter(item => item.category === 'other').length;
        return {
          date: dateKey,
          rigs,
          cranes,
          others,
          total: rigs + cranes + others,
          activeItems: deduped.map(({ _dedupeKey, ...item }) => item)
        };
      });
    }

    function renderCompanyHeatmap(projectCountsByDesignation, projectOrder, subCountsByDesignation) {
      if (!els.companyHeatmapHead || !els.companyHeatmapBody) return;
      const selectedProjectToken = getCompanyProjectToken(selectedProject || DEFAULT_PROJECT);
      const getDesignationTotal = name => projectOrder.reduce((sum, project) => sum + (projectCountsByDesignation.get(name)?.get(project) || 0), 0);
      const getProjectTotal = project => Array.from(projectCountsByDesignation.keys()).reduce((sum, designation) => (
        sum + (projectCountsByDesignation.get(designation)?.get(project) || 0)
      ), 0);
      const getSubDesignationTotal = (name, subName) => projectOrder.reduce((sum, project) => (
        sum + (subCountsByDesignation.get(name)?.get(subName)?.get(project) || 0)
      ), 0);
      const designationNames = Array.from(projectCountsByDesignation.keys())
        .sort((a, b) => getDesignationTotal(b) - getDesignationTotal(a) || a.localeCompare(b));
      const maxValue = Math.max(1, ...designationNames.flatMap(name => projectOrder.map(project => projectCountsByDesignation.get(name)?.get(project) || 0)));
      const grandTotal = designationNames.reduce((sum, name) => (
        sum + projectOrder.reduce((rowSum, project) => rowSum + (projectCountsByDesignation.get(name)?.get(project) || 0), 0)
      ), 0);

      els.companyHeatmapHead.innerHTML = [
        `<th><span class="company-heatmap-designation-cell"><span>Designation</span><strong>${grandTotal}</strong></span></th>`,
        ...projectOrder.map(project => {
          const isSelectedProject = getCompanyProjectToken(project) === selectedProjectToken;
          return `
            <th class="${isSelectedProject ? 'company-heatmap-selected-project' : ''}">
              <span class="company-heatmap-project-head">
                <span>${escapeHtml(project)}</span>
                <strong>${getProjectTotal(project)} Staff</strong>
              </span>
            </th>
          `;
        })
      ].join('');

      if (!designationNames.length || !projectOrder.length) {
        els.companyHeatmapBody.innerHTML = '<tr><td colspan="2" class="manpower-empty">No manpower heatmap data available.</td></tr>';
        if (els.companyHeatmapExpandAllBtn) {
          els.companyHeatmapExpandAllBtn.hidden = true;
        }
        return;
      }

      const expandableDesignations = designationNames.filter(name => (subCountsByDesignation.get(name) || new Map()).size > 0);
      const allExpanded = expandableDesignations.length > 0 && expandableDesignations.every(name => companyHeatmapExpandedDesignations.has(name));
      if (els.companyHeatmapExpandAllBtn) {
        els.companyHeatmapExpandAllBtn.hidden = expandableDesignations.length === 0;
        els.companyHeatmapExpandAllBtn.textContent = allExpanded ? 'Collapse All' : 'Expand All';
      }

      els.companyHeatmapBody.innerHTML = designationNames.map(name => {
        const designationTotal = getDesignationTotal(name);
        const subMap = subCountsByDesignation.get(name) || new Map();
        const subNames = Array.from(subMap.keys())
          .sort((a, b) => getSubDesignationTotal(name, b) - getSubDesignationTotal(name, a) || a.localeCompare(b));
        const hasSubDesignations = subNames.length > 0;
        const isExpanded = companyHeatmapExpandedDesignations.has(name);
        const cells = projectOrder.map(project => {
          const value = projectCountsByDesignation.get(name)?.get(project) || 0;
          const alpha = value <= 0 ? 0.04 : (0.12 + (value / maxValue) * 0.62);
          const color = `rgba(142,240,191,${alpha.toFixed(3)})`;
          const isSelectedProject = getCompanyProjectToken(project) === selectedProjectToken;
          return `<td class="${isSelectedProject ? 'company-heatmap-selected-project' : ''}" style="background:${color};">${value > 0 ? value : '-'}</td>`;
        }).join('');
        const parentRow = `
          <tr class="company-heatmap-parent-row">
            <td>
              <span class="company-heatmap-designation-cell">
                <span class="company-heatmap-title-wrap">
                  ${hasSubDesignations ? `<button class="company-heatmap-expand" type="button" data-heatmap-designation="${escapeHtml(name)}" aria-label="${isExpanded ? 'Collapse' : 'Expand'} ${escapeHtml(name)}">${isExpanded ? '-' : '+'}</button>` : '<span class="company-heatmap-expand-placeholder"></span>'}
                  <span>${escapeHtml(name)}</span>
                </span>
                <strong>${designationTotal}</strong>
              </span>
            </td>
            ${cells}
          </tr>
        `;
        if (!isExpanded || !hasSubDesignations) return parentRow;
        const subRows = subNames.map(subName => {
          const subTotal = getSubDesignationTotal(name, subName);
          const subCells = projectOrder.map(project => {
            const value = subMap.get(subName)?.get(project) || 0;
            const alpha = value <= 0 ? 0.035 : (0.08 + (value / maxValue) * 0.38);
            const color = `rgba(122,184,255,${alpha.toFixed(3)})`;
            const isSelectedProject = getCompanyProjectToken(project) === selectedProjectToken;
            return `<td class="company-heatmap-sub-cell ${isSelectedProject ? 'company-heatmap-selected-project' : ''}" style="background:${color};">${value > 0 ? value : '-'}</td>`;
          }).join('');
          return `
            <tr class="company-heatmap-sub-row">
              <td><span class="company-heatmap-designation-cell company-heatmap-subdesignation-cell"><span>${escapeHtml(subName)}</span><strong>${subTotal}</strong></span></td>
              ${subCells}
            </tr>
          `;
        }).join('');
        return parentRow + subRows;
      }).join('');

      els.companyHeatmapBody.querySelectorAll('[data-heatmap-designation]').forEach(button => {
        button.addEventListener('click', () => {
          const designation = button.getAttribute('data-heatmap-designation') || '';
          if (companyHeatmapExpandedDesignations.has(designation)) {
            companyHeatmapExpandedDesignations.delete(designation);
          } else {
            companyHeatmapExpandedDesignations.add(designation);
          }
          renderCompanyHeatmap(projectCountsByDesignation, projectOrder, subCountsByDesignation);
        });
      });
    }

    function renderCompanyShiftDonut(shiftEntries, total) {
      const svg = els.companyShiftDonut;
      if (!svg || !els.companyShiftLegend || !els.companyShiftDonutTotal) return;
      while (svg.firstChild) svg.removeChild(svg.firstChild);
      els.companyShiftDonutTotal.textContent = total.toLocaleString();

      if (!shiftEntries.length || total <= 0) {
        els.companyShiftLegend.innerHTML = '<div class="company-analytics-empty">No shift mix available.</div>';
        return;
      }

      const colors = ['#8ef0bf', '#7ab8ff', '#f5c977', '#f4a5c3', '#d5d9ff'];
      let angle = -Math.PI / 2;
      const cx = 140;
      const cy = 140;
      const outerR = 104;
      const innerR = 68;

      shiftEntries.forEach((entry, index) => {
        const slice = (entry.value / total) * Math.PI * 2;
        const next = angle + slice;
        const x1 = cx + Math.cos(angle) * outerR;
        const y1 = cy + Math.sin(angle) * outerR;
        const x2 = cx + Math.cos(next) * outerR;
        const y2 = cy + Math.sin(next) * outerR;
        const ix1 = cx + Math.cos(next) * innerR;
        const iy1 = cy + Math.sin(next) * innerR;
        const ix2 = cx + Math.cos(angle) * innerR;
        const iy2 = cy + Math.sin(angle) * innerR;
        const largeArc = slice > Math.PI ? 1 : 0;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix2} ${iy2} Z`);
        path.setAttribute('fill', colors[index % colors.length]);
        path.setAttribute('stroke', 'rgba(9,13,18,0.92)');
        path.setAttribute('stroke-width', '2');
        svg.appendChild(path);
        angle = next;
      });

      els.companyShiftLegend.innerHTML = shiftEntries.map((entry, index) => `
        <div class="company-donut-legend-item">
          <span class="company-donut-legend-swatch" style="background:${colors[index % colors.length]}"></span>
          <span>${escapeHtml(entry.label)}</span>
          <strong>${entry.value}</strong>
        </div>
      `).join('');
    }

    function renderCompanyInsights(items, totalHeadcount, projectEntries, designationEntries, shiftEntries) {
      if (!els.companyInsightsList) return;
      const insights = [];
      if (projectEntries[0]) insights.push(`${projectEntries[0].label} carries the largest workforce with ${projectEntries[0].value} staff.`);
      if (designationEntries[0]) insights.push(`${designationEntries[0].label} is the largest designation at ${designationEntries[0].value} staff.`);
      if (shiftEntries[0]) insights.push(`${shiftEntries[0].label} shift represents ${Math.round((shiftEntries[0].value / Math.max(totalHeadcount, 1)) * 100)}% of the current manpower pool.`);
      const projectsWithoutLeadership = projectEntries
        .map(entry => entry.label)
        .filter(project => !items.some(item => item.project === project && /manager|engineer|foreman|supervisor/i.test(item.designation)));
      if (projectsWithoutLeadership.length) insights.push(`${projectsWithoutLeadership.slice(0, 3).join(', ')} show no visible leadership roles in the current filtered roster.`);

      els.companyInsightsList.innerHTML = insights.length
        ? insights.map(text => `<div class="company-insight-card">${escapeHtml(text)}</div>`).join('')
        : '<div class="company-analytics-empty">No notable workforce insights in the current scope.</div>';
    }

    function renderCompanyAnalyticsPage(project = selectedProject) {
      if (companyAnalyticsLayoutMode === 'heatmap') {
        companyAnalyticsScopeMode = 'all';
      }
      const items = getAnalyticsCompanyEmployees(project);
      const totalHeadcount = items.length;
      const projectCounts = buildCountMap(items, item => item.project);
      const designationCounts = buildCountMap(items, item => item.designation);
      const shiftCounts = buildCountMap(items, item => item.shift || 'Unspecified');
      const projectEntries = Array.from(projectCounts.entries()).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value);
      const designationEntries = Array.from(designationCounts.entries()).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
      const topDesignationEntry = Array.from(designationCounts.entries()).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value)[0];
      const shiftEntries = Array.from(shiftCounts.entries()).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value);
      const projectOrder = Array.from(projectCounts.keys()).sort((a, b) => projectEntries.findIndex(entry => entry.label === a) - projectEntries.findIndex(entry => entry.label === b));
      const projectCountsByDesignation = new Map();
      const subCountsByDesignation = new Map();

      items.forEach(item => {
        if (!projectCountsByDesignation.has(item.designation)) projectCountsByDesignation.set(item.designation, new Map());
        const designationMap = projectCountsByDesignation.get(item.designation);
        designationMap.set(item.project, (designationMap.get(item.project) || 0) + 1);

        const subDesignation = item.subDesignation || item.designation;
        if (!subCountsByDesignation.has(item.designation)) subCountsByDesignation.set(item.designation, new Map());
        const subMap = subCountsByDesignation.get(item.designation);
        if (!subMap.has(subDesignation)) subMap.set(subDesignation, new Map());
        const subProjectMap = subMap.get(subDesignation);
        subProjectMap.set(item.project, (subProjectMap.get(item.project) || 0) + 1);
      });

      if (els.companyAnalyticsDesignationSelect && els.companyAnalyticsDesignationSelect.value !== companyAnalyticsDesignationFilter) {
        els.companyAnalyticsDesignationSelect.value = companyAnalyticsDesignationFilter;
      }
      els.companyAnalyticsLayoutButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.companyAnalyticsLayout === companyAnalyticsLayoutMode));
      els.companyAnalyticsScopeButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.companyAnalyticsScope === companyAnalyticsScopeMode));
      els.companyAnalyticsScopeButtons.forEach(btn => {
        const isHeatmap = companyAnalyticsLayoutMode === 'heatmap';
        const isAllButton = btn.dataset.companyAnalyticsScope === 'all';
        btn.disabled = isHeatmap && !isAllButton;
        btn.hidden = isHeatmap && !isAllButton;
        btn.style.display = isHeatmap && !isAllButton ? 'none' : '';
        btn.classList.toggle('scope-disabled', isHeatmap && !isAllButton);
      });

      if (els.companyAnalyticsExecutiveView) {
        els.companyAnalyticsExecutiveView.hidden = companyAnalyticsLayoutMode !== 'overview';
        els.companyAnalyticsExecutiveView.style.display = companyAnalyticsLayoutMode === 'overview' ? 'grid' : 'none';
      }
      if (els.companyAnalyticsHeatmapView) {
        els.companyAnalyticsHeatmapView.hidden = companyAnalyticsLayoutMode !== 'heatmap';
        els.companyAnalyticsHeatmapView.style.display = companyAnalyticsLayoutMode === 'heatmap' ? 'grid' : 'none';
      }

      if (els.companyAnalyticsKpis) {
        const topProject = projectEntries[0];
        const topDesignation = topDesignationEntry;
        const dayShare = shiftCounts.get('Day') || shiftCounts.get('day') || 0;
        const midShare = shiftCounts.get('Mid') || shiftCounts.get('mid') || 0;
        const nightShare = shiftCounts.get('Night') || shiftCounts.get('night') || 0;
        const kpis = [
          { label: 'Total Headcount', value: totalHeadcount.toLocaleString(), meta: '' },
          { label: 'Shift Split', value: `${dayShare} / ${midShare} / ${nightShare}`, meta: 'Day / Mid / Night' },
          { label: 'Top Designation', value: topDesignation ? topDesignation.label : '-', meta: topDesignation ? `${topDesignation.value} staff` : 'No data' },
          { label: 'Largest Project', value: topProject ? topProject.label : '-', meta: topProject ? `${topProject.value} staff` : 'No data' }
        ];
        els.companyAnalyticsKpis.innerHTML = kpis.map(kpi => `
          <div class="company-analytics-kpi">
            <div class="company-analytics-kpi-label">${escapeHtml(kpi.label)}</div>
            <div class="company-analytics-kpi-value">${escapeHtml(kpi.value)}</div>
            ${kpi.meta ? `<div class="company-analytics-kpi-meta">${escapeHtml(kpi.meta)}</div>` : ''}
          </div>
        `).join('');
      }

      const primaryPieEntries = companyAnalyticsScopeMode === 'all' ? projectEntries : designationEntries;
      renderCompanyAnalyticsPie(els.companyProjectBars, primaryPieEntries, {
        centerLabel: 'TOTAL',
        emptyLabel: companyAnalyticsScopeMode === 'all' ? 'No project headcount available.' : 'No designation headcount available.'
      });
      renderRankBars(els.companyDesignationBars, designationEntries, value => `${value} staff`, 'No designation headcount available.');
      renderCompanyHeatmap(projectCountsByDesignation, projectOrder, subCountsByDesignation);
    }

    function renderEquipmentHistogram(rows) {
      const svg = els.equipmentHistSvg;
      if (!svg) return;
      while (svg.firstChild) svg.removeChild(svg.firstChild);

      const wrap = svg.parentElement;
      if (wrap) {
        let legend = wrap.parentElement.querySelector('.equipment-chart-legend');
        if (!legend) {
          legend = document.createElement('div');
          legend.className = 'equipment-chart-legend';
          legend.innerHTML = `
            <div class="equipment-chart-legend-item"><span class="equipment-chart-legend-swatch" style="background:#8ef0bf;"></span>Owned Rigs</div>
            <div class="equipment-chart-legend-item"><span class="equipment-chart-legend-swatch" style="background:#f1d48b;"></span>Owned Cranes</div>
            <div class="equipment-chart-legend-item"><span class="equipment-chart-legend-swatch" style="background:#f5a6b8;"></span>Others</div>
          `;
          wrap.parentElement.insertBefore(legend, wrap);
        }
      }

      if (!rows.length) {
        if (wrap) {
          wrap.style.overflowX = 'hidden';
          wrap.style.overflowY = 'hidden';
        }
        const empty = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        empty.setAttribute('x', '500');
        empty.setAttribute('y', '160');
        empty.setAttribute('text-anchor', 'middle');
        empty.setAttribute('fill', 'rgba(244,247,251,0.62)');
        empty.setAttribute('font-size', '14');
        empty.setAttribute('font-weight', '700');
        empty.textContent = 'No equipment timeline available';
        svg.appendChild(empty);
        return;
      }

      const maxVisibleBars = 14;
      const chartH = 320;
      const left = 52;
      const right = 18;
      const top = 16;
      const bottom = 62;
      const isScrollable = rows.length > maxVisibleBars;
      const overflowSlotW = 58;
      const overflowBarW = 28;
      const overflowChartW = left + right + ((rows.length - 1) * overflowSlotW) + overflowBarW;
      const chartW = isScrollable ? overflowChartW : 1000;
      const innerH = chartH - top - bottom;
      const stepX = isScrollable ? overflowSlotW : (chartW - left - right) / Math.max(rows.length, 1);
      const barW = isScrollable ? overflowBarW : Math.max(16, Math.min(40, stepX * 0.5));
      const maxVal = Math.max(...rows.map(r => r.total), 1);
      const scaleY = innerH / maxVal;
      svg.setAttribute('viewBox', `0 0 ${chartW} ${chartH}`);
      if (wrap) {
        wrap.classList.toggle('equipment-chart-wrap-scrollable', isScrollable);
        wrap.style.overflowX = isScrollable ? 'auto' : 'hidden';
        wrap.style.overflowY = 'hidden';
        wrap.style.webkitOverflowScrolling = 'touch';
        if (!isScrollable) wrap.scrollLeft = 0;
      }
      svg.style.width = isScrollable ? `${chartW}px` : '100%';
      svg.style.minWidth = isScrollable ? `${chartW}px` : '100%';
      svg.style.height = '100%';

      let tooltipEl = document.getElementById('equipmentTooltip');
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'equipmentTooltip';
        tooltipEl.className = 'chart-tooltip';
        tooltipEl.style.position = 'fixed';
        document.body.appendChild(tooltipEl);
      }

      const showTooltip = (evt, row) => {
        const formatEquipmentType = value => {
          if (value === 'rig') return 'Rig';
          if (value === 'crane') return 'Crane';
          if (value === 'vibrator') return 'Other';
          return value;
        };
        const fleetHtml = row.activeItems.length
          ? row.activeItems.map(item => `<div class="tooltip-row"><span>${formatEquipmentType(item.category)}</span><strong>${escapeHtml(item.label)} | ${item.ownership}</strong></div>`).join('')
          : '<div class="tooltip-row"><span>Fleet</span><strong>-</strong></div>';
        tooltipEl.innerHTML = `
          <div class="tooltip-title">${formatDateFullLabel(row.date)}</div>
          ${fleetHtml}
        `;
        tooltipEl.classList.add('visible');
        const x = Math.min(window.innerWidth - 280, evt.clientX + 14);
        const y = Math.min(window.innerHeight - 260, evt.clientY + 14);
        tooltipEl.style.left = `${Math.max(8, x)}px`;
        tooltipEl.style.top = `${Math.max(8, y)}px`;
      };

      const hideTooltip = () => tooltipEl.classList.remove('visible');

      for (let i = 0; i < 4; i += 1) {
        const y = top + (innerH / 3) * i;
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', String(left));
        line.setAttribute('x2', String(chartW - right));
        line.setAttribute('y1', String(y));
        line.setAttribute('y2', String(y));
        line.setAttribute('stroke', 'rgba(255,255,255,0.08)');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);
      }

      rows.forEach((row, idx) => {
        const barX = isScrollable ? (left + stepX * idx) : (left + stepX * idx + (stepX - barW) / 2);
        const x = barX + barW / 2;
        const segments = [
          { value: row.ownedRigs, color: '#8ef0bf' },
          { value: row.ownedCranes, color: '#f1d48b' },
          { value: row.rentedEq, color: '#f5a6b8' }
        ];

        let currentY = chartH - bottom;
        segments.forEach(segment => {
          if (!segment.value) return;
          const h = segment.value * scaleY;
          currentY -= h;
          const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          bar.setAttribute('x', String(barX));
          bar.setAttribute('y', String(currentY));
          bar.setAttribute('width', String(barW));
          bar.setAttribute('height', String(h));
          bar.setAttribute('rx', '4');
          bar.setAttribute('fill', segment.color);
          bar.setAttribute('fill-opacity', '0.92');
          bar.setAttribute('stroke', 'rgba(255,255,255,0.18)');
          bar.setAttribute('stroke-width', '1');
          bar.addEventListener('mousemove', evt => showTooltip(evt, row));
          bar.addEventListener('mouseleave', hideTooltip);
          svg.appendChild(bar);
        });

        const totalLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        totalLabel.setAttribute('x', String(x));
        totalLabel.setAttribute('y', String(Math.max(currentY - 6, 12)));
        totalLabel.setAttribute('text-anchor', 'middle');
        totalLabel.setAttribute('fill', 'rgba(244,247,251,0.94)');
        totalLabel.setAttribute('font-size', '11');
        totalLabel.setAttribute('font-weight', '800');
        totalLabel.textContent = String(row.total);
        svg.appendChild(totalLabel);

        const dateLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        dateLabel.setAttribute('x', String(x));
        dateLabel.setAttribute('y', String(chartH - 18));
        dateLabel.setAttribute('text-anchor', 'middle');
        dateLabel.setAttribute('fill', 'rgba(244,247,251,0.72)');
        dateLabel.setAttribute('font-size', '11');
        dateLabel.setAttribute('font-weight', '700');
        dateLabel.textContent = formatShortDateLabel(row.date);
        svg.appendChild(dateLabel);
      });

      if (wrap && isScrollable) {
        requestAnimationFrame(() => {
          wrap.scrollLeft = Math.max(0, wrap.scrollWidth - wrap.clientWidth);
        });
        if (!wrap.dataset.equipmentWheelBound) {
          wrap.addEventListener('wheel', evt => {
            if (Math.abs(evt.deltaY) <= Math.abs(evt.deltaX)) return;
            evt.preventDefault();
            wrap.scrollLeft += evt.deltaY;
          }, { passive: false });
          wrap.dataset.equipmentWheelBound = 'true';
        }
      }

      svg.onmouseleave = hideTooltip;
    }

    function getUtilizationRigColors(rigKeys) {
      const palette = [
        '#8ef0bf', '#7bb6ff', '#f0d58e', '#f5a6b8', '#c7b8ff', '#7fe7f0',
        '#ffb86c', '#a7f3d0', '#93c5fd', '#fca5a5', '#d9f99d', '#f0abfc',
        '#67e8f9', '#fde68a', '#c4b5fd', '#86efac', '#bfdbfe', '#fda4af'
      ];
      return rigKeys.reduce((acc, rig, idx) => {
        acc[rig] = palette[idx % palette.length];
        return acc;
      }, {});
    }

    function consolidateUtilizationRows(rows) {
      const grouped = new Map();
      rows.forEach(row => {
        const dateKey = normalizeDateString(row?.date);
        const rig = normalizeText(row?.rig);
        if (!dateKey || !rig) return;
        const key = `${dateKey}__${rig}`;
        if (!grouped.has(key)) {
          grouped.set(key, {
            date: dateKey,
            rig,
            drillingHours: 0,
            drilledLm: 0,
            shiftHours: 12
          });
        }
        const item = grouped.get(key);
        item.drillingHours += Number.isFinite(Number(row?.drillingHours)) ? Number(row.drillingHours) : 0;
        item.drilledLm += Number.isFinite(Number(row?.drilledLm)) ? Number(row.drilledLm) : 0;
        const candidateShiftHours = Number(row?.shiftHours);
        if (Number.isFinite(candidateShiftHours) && candidateShiftHours > 0) {
          item.shiftHours = Math.max(item.shiftHours, candidateShiftHours);
        }
      });
      return Array.from(grouped.values())
        .map(item => ({
          ...item,
          utilization: item.shiftHours > 0 ? (item.drillingHours / item.shiftHours) * 100 : 0
        }))
        .sort((a, b) => b.date.localeCompare(a.date) || a.rig.localeCompare(b.rig, undefined, { numeric: true }));
    }

    function getUtilizationRows(project) {
      const targetProjectToken = getCompanyProjectToken(project || selectedProject || DEFAULT_PROJECT);
      const normalizedSelectedPlot = normalizeText(selectedPlot);
      const filteredRows = rigProductionRows
        .map(sanitizeRigProductionRow)
        .filter(item => item.rig && item.date)
        .filter(item => getCompanyProjectToken(item.projectRaw || item.project) === targetProjectToken)
        .filter(item => {
          if (isAllPlotsValue(normalizedSelectedPlot)) return true;
          const rowPlot = normalizeText(item.plot);
          return rowPlot === normalizedSelectedPlot || isAllPlotsValue(rowPlot);
        })
        .map(row => ({
          date: row.date,
          rig: row.rig,
          drillingHours: row.durationHours,
          drilledLm: row.drilledLm,
          shiftHours: 12
        }));

      return consolidateUtilizationRows(filteredRows);
    }

    function buildUtilizationSeries(rows, mode = utilizationMode) {
      const normalizedRows = consolidateUtilizationRows(rows);
      if (!normalizedRows.length) return { dates: [], rigs: [], series: [], colors: {} };
      const dates = Array.from(new Set(normalizedRows.map(row => row.date))).sort();
      const rigs = Array.from(new Set(normalizedRows.map(row => row.rig))).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
      const colors = getUtilizationRigColors(rigs);

      const byRigDate = new Map();
      normalizedRows.forEach(row => {
        byRigDate.set(`${row.rig}__${row.date}`, row);
      });

      const series = rigs.map(rig => {
        let cumulativeHours = 0;
        let activeShiftDays = 0;
        let mobilized = false;
        const points = dates.map((dateKey) => {
          const row = byRigDate.get(`${rig}__${dateKey}`);
          const drillingHours = row ? row.drillingHours : 0;
          const drilledLm = row ? row.drilledLm : 0;
          const dailyUtilization = row ? row.utilization : 0;
          if (row) mobilized = true;
          if (mobilized) activeShiftDays += 1;
          cumulativeHours += drillingHours;
          const cumulativeUtilization = mobilized && activeShiftDays > 0
            ? (cumulativeHours / (activeShiftDays * 12)) * 100
            : null;
          return {
            date: dateKey,
            rig,
            drillingHours,
            cumulativeHours,
            drilledLm,
            utilization: dailyUtilization,
            cumulativeUtilization,
            cumulativeLm: drilledLm,
            mobilized
          };
        });
        let runningLm = 0;
        points.forEach(point => {
          runningLm += point.drilledLm;
          point.cumulativeLm = runningLm;
        });
        return {
          rig,
          color: colors[rig],
          points
        };
      });

      return { dates, rigs, series, colors };
    }

    function renderUtilizationLegend(series) {
      if (!els.utilizationLegend) return;
      if (!series.length) {
        els.utilizationLegend.innerHTML = '';
        return;
      }
      els.utilizationLegend.innerHTML = series.map(item => `
        <div class="utilization-legend-item">
          <span class="utilization-legend-swatch" style="background:${item.color};"></span>
          <span>${escapeHtml(item.rig)}</span>
        </div>
      `).join('');
    }

    function getUtilizationDayGroups(rows) {
      const normalizedRows = consolidateUtilizationRows(rows);
      const grouped = new Map();
      normalizedRows.forEach(row => {
        if (!grouped.has(row.date)) grouped.set(row.date, []);
        grouped.get(row.date).push(row);
      });
      return Array.from(grouped.entries())
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(([date, items]) => {
          const drillingHours = items.reduce((sum, item) => sum + item.drillingHours, 0);
          const shiftHours = items.reduce((sum, item) => sum + item.shiftHours, 0);
          return {
            date,
            items: items.slice().sort((a, b) => a.rig.localeCompare(b.rig, undefined, { numeric: true })),
            totalUtilization: shiftHours > 0 ? (drillingHours / shiftHours) * 100 : 0
          };
        });
    }

    function getUtilizationTimelineActivities(project) {
      const targetProjectToken = getCompanyProjectToken(project || selectedProject || DEFAULT_PROJECT);
      const normalizedSelectedPlot = normalizeText(selectedPlot);
      return rigProductionRows
        .map(sanitizeRigProductionRow)
        .filter(item => item.rig && item.from && item.to)
        .filter(item => getCompanyProjectToken(item.projectRaw || item.project) === targetProjectToken)
        .filter(item => {
          if (isAllPlotsValue(normalizedSelectedPlot)) return true;
          const rowPlot = normalizeText(item.plot);
          return rowPlot === normalizedSelectedPlot || isAllPlotsValue(rowPlot);
        })
        .map(item => {
          const start = new Date(item.from);
          const end = new Date(item.to);
          if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) return null;
          return {
            ...item,
            start,
            end,
            activityLabel: formatRigActivityLabel(item.activityType),
            activityKey: normalizeRigActivityKey(item.activityType)
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.start - b.start || a.rig.localeCompare(b.rig, undefined, { numeric: true }));
    }

    function normalizeRigActivityKey(value) {
      const normalized = normalizeText(value).toLowerCase();
      if (!normalized) return 'other';
      if (normalized.includes('punch')) return 'punching';
      if (normalized.includes('drill')) return 'drilling';
      if (normalized.includes('bore')) return 'drilling';
      if (normalized.includes('clean')) return 'cleaning';
      if (normalized.includes('ream')) return 'reaming';
      if (normalized.includes('casing')) return 'casing';
      if (normalized.includes('test')) return 'testing';
      return normalized.replace(/[^a-z0-9]+/g, '-');
    }

    function formatRigActivityLabel(value) {
      const normalized = normalizeText(value);
      if (!normalized) return 'Activity';
      return normalized
        .split(/[\s_-]+/)
        .filter(Boolean)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join(' ');
    }

    function getUtilizationTimelineActivityColor(activityKey) {
      const palette = {
        punching: '#8ef0bf',
        drilling: '#6ee7ff',
        cleaning: '#f5d97a',
        reaming: '#8fb7ff',
        casing: '#d7a6ff',
        testing: '#ffa970',
        other: '#9fb0c6'
      };
      return palette[activityKey] || palette.other;
    }

    function showUtilizationTimelineTooltip(evt, html) {
      const tooltip = els.utilizationTimelineTooltip;
      if (!tooltip) return;
      tooltip.innerHTML = html;
      tooltip.classList.add('visible');
      const rect = tooltip.getBoundingClientRect();
      let left = evt.clientX + 14;
      let top = evt.clientY + 14;
      if (left + rect.width > window.innerWidth - 10) left = evt.clientX - rect.width - 14;
      if (top + rect.height > window.innerHeight - 10) top = evt.clientY - rect.height - 14;
      tooltip.style.left = `${Math.max(8, left)}px`;
      tooltip.style.top = `${Math.max(8, top)}px`;
    }

    function hideUtilizationTimelineTooltip() {
      const tooltip = els.utilizationTimelineTooltip;
      if (!tooltip) return;
      tooltip.classList.remove('visible');
      tooltip.innerHTML = '';
      tooltip.style.left = '';
      tooltip.style.top = '';
    }

    function renderUtilizationTimeline(project) {
      const wrap = els.utilizationTimelineWrap;
      const svg = els.utilizationTimelineSvg;
      if (!wrap || !svg) return;

      const activities = getUtilizationTimelineActivities(project);
      clearSvgGroup(svg);
      hideUtilizationTimelineTooltip();

      if (els.utilizationTimelineSummary) {
        if (!activities.length) {
          els.utilizationTimelineSummary.innerHTML = `
            <div class="utilization-timeline-summary-card is-empty">
              <span class="utilization-timeline-summary-label">No timeline data available</span>
              <strong class="utilization-timeline-summary-value">0</strong>
              <span class="utilization-timeline-summary-meta">No drilling windows found for the current scope.</span>
            </div>
          `;
        }
      }

      if (els.utilizationTimelineLegend) {
        const legendEntries = Array.from(new Set(activities.map(item => item.activityKey))).map(key => ({
          key,
          label: activities.find(item => item.activityKey === key)?.activityLabel || formatRigActivityLabel(key),
          color: getUtilizationTimelineActivityColor(key)
        }));
        els.utilizationTimelineLegend.innerHTML = legendEntries.map(entry => `
          <span class="utilization-timeline-legend-item">
            <span class="utilization-timeline-legend-swatch" style="background:${entry.color};"></span>
            ${escapeHtml(entry.label)}
          </span>
        `).join('');
      }

      if (!activities.length) {
        if (els.utilizationTimelineTag) els.utilizationTimelineTag.textContent = 'No Data';
        if (els.utilizationTimelineFootnote) {
          els.utilizationTimelineFootnote.textContent = 'No drilling windows are available for the current project and plot scope.';
        }
        svg.setAttribute('viewBox', '0 0 1200 420');
        svg.setAttribute('width', '1200');
        svg.setAttribute('height', '420');
        svg.style.width = '100%';
        svg.style.height = '420px';
        const empty = svgEl('text', {
          x: '600',
          y: '210',
          'text-anchor': 'middle',
          fill: 'rgba(244,247,251,0.62)',
          'font-size': '16',
          'font-weight': '700'
        });
        empty.textContent = 'No drilling timeline data available';
        svg.appendChild(empty);
        return;
      }

      const rigs = Array.from(new Set(activities.map(item => item.rig))).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
      const rigMeta = new Map(rigs.map(rig => {
        const rigRows = activities.filter(item => item.rig === rig);
        const totalHours = rigRows.reduce((sum, item) => sum + item.durationHours, 0);
        const totalLm = rigRows.reduce((sum, item) => sum + item.drilledLm, 0);
        return [rig, {
          totalHours,
          totalLm,
          windowCount: rigRows.length,
          contractor: normalizeText(rigRows[0]?.contractor)
        }];
      }));

      const minStart = activities.reduce((min, item) => item.start < min ? item.start : min, activities[0].start);
      const maxEnd = activities.reduce((max, item) => item.end > max ? item.end : max, activities[0].end);
      const axisStart = new Date(minStart.getTime());
      axisStart.setHours(0, 0, 0, 0);
      const axisEnd = new Date(maxEnd.getTime());
      axisEnd.setHours(24, 0, 0, 0);
      const totalHours = Math.max(1, (axisEnd.getTime() - axisStart.getTime()) / 3600000);

      const laneLabelW = 220;
      const right = 28;
      const top = 78;
      const bottom = 44;
      const laneH = 54;
      const laneGap = 12;
      const minTimelineWidth = Math.max((wrap.clientWidth || 980) - 6, 960);
      const pxPerHour = totalHours <= 24 ? 34 : totalHours <= 72 ? 18 : totalHours <= 168 ? 10.5 : 7.2;
      const plotW = Math.max(minTimelineWidth - laneLabelW - right, totalHours * pxPerHour);
      const width = laneLabelW + plotW + right;
      const height = top + rigs.length * laneH + Math.max(0, rigs.length - 1) * laneGap + bottom;

      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      svg.setAttribute('width', String(width));
      svg.setAttribute('height', String(height));
      svg.style.width = `${width}px`;
      svg.style.height = `${height}px`;

      const plotStartX = laneLabelW;
      const plotEndX = width - right;
      const hoursToX = date => plotStartX + ((date.getTime() - axisStart.getTime()) / 3600000) * (plotW / totalHours);

      svg.appendChild(svgEl('rect', {
        x: '0',
        y: '0',
        width: String(laneLabelW - 18),
        height: String(height),
        fill: 'rgba(6,9,13,0.98)'
      }));

      const dayCount = Math.ceil(totalHours / 24);
      for (let i = 0; i <= dayCount; i += 1) {
        const dt = new Date(axisStart.getTime() + i * 24 * 3600000);
        const x = hoursToX(dt);
        svg.appendChild(svgEl('line', {
          x1: String(x),
          y1: String(top - 10),
          x2: String(x),
          y2: String(height - bottom + 4),
          stroke: 'rgba(255,255,255,0.16)',
          'stroke-width': '1'
        }));
        if (i < dayCount) {
          const dayLabel = svgEl('text', {
            x: String(x + 6),
            y: String(top - 20),
            class: 'utilization-timeline-axis-text'
          });
          dayLabel.textContent = formatTimelineHeaderDate(dt);
          svg.appendChild(dayLabel);
        }
      }

      const sixHourTicks = Math.floor(totalHours / 6);
      for (let i = 0; i <= sixHourTicks; i += 1) {
        const dt = new Date(axisStart.getTime() + i * 6 * 3600000);
        const x = hoursToX(dt);
        const minorTick = svgEl('line', {
          x1: String(x),
          y1: String(top - 2),
          x2: String(x),
          y2: String(top + rigs.length * laneH + Math.max(0, rigs.length - 1) * laneGap),
          stroke: 'rgba(255,255,255,0.03)',
          'stroke-width': '1'
        });
        svg.appendChild(minorTick);
      }

      rigs.forEach((rig, index) => {
        const laneY = top + index * (laneH + laneGap);
        const centerY = laneY + laneH / 2;
        const meta = rigMeta.get(rig);

        const laneBg = svgEl('rect', {
          x: String(plotStartX),
          y: String(laneY),
          width: String(plotW),
          height: String(laneH),
          rx: '16',
          fill: index % 2 === 0 ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.015)',
          stroke: 'rgba(255,255,255,0.05)',
          'stroke-width': '1'
        });
        svg.appendChild(laneBg);

        const rigLabel = svgEl('text', {
          x: '14',
          y: String(centerY - 4),
          class: 'utilization-timeline-rig-label'
        });
        rigLabel.textContent = rig;
        svg.appendChild(rigLabel);

        const rigMetaText = svgEl('text', {
          x: '14',
          y: String(centerY + 14),
          class: 'utilization-timeline-rig-meta'
        });
        rigMetaText.textContent = `${formatNumberOneDecimal(meta.totalHours)} hr • ${formatNumberOneDecimal(meta.totalLm)} m • ${meta.windowCount} window${meta.windowCount === 1 ? '' : 's'}`;
        svg.appendChild(rigMetaText);

        const laneItems = activities.filter(item => item.rig === rig);
        laneItems.forEach(item => {
          const x = hoursToX(item.start);
          const endX = hoursToX(item.end);
          const barW = Math.max(10, endX - x);
          const barY = laneY + 8;
          const barH = laneH - 16;
          const color = getUtilizationTimelineActivityColor(item.activityKey);

          const bar = svgEl('rect', {
            x: String(x),
            y: String(barY),
            width: String(barW),
            height: String(barH),
            rx: '9',
            fill: color,
            'fill-opacity': barW < 26 ? '0.92' : '0.88',
            stroke: 'rgba(255,255,255,0.18)',
            'stroke-width': '1'
          });
          svg.appendChild(bar);

          const innerGlow = svgEl('rect', {
            x: String(x + 1),
            y: String(barY + 1),
            width: String(Math.max(0, barW - 2)),
            height: String(Math.max(0, barH - 2)),
            rx: '8',
            fill: 'rgba(255,255,255,0.06)'
          });
          svg.appendChild(innerGlow);

          if (barW > 66) {
            const label = svgEl('text', {
              x: String(x + barW / 2),
              y: String(barY + barH / 2 + 4),
              class: 'utilization-timeline-bar-label'
            });
            label.textContent = item.pileId || item.activityLabel;
            svg.appendChild(label);
          }

          const hit = svgEl('rect', {
            x: String(x),
            y: String(barY),
            width: String(Math.max(12, barW)),
            height: String(barH),
            fill: 'transparent'
          });
          hit.style.cursor = 'pointer';
          const tooltipHtml = `
            <div class="tooltip-title">${escapeHtml(item.rig)}</div>
            <div class="tooltip-row"><span>Activity</span><strong>${escapeHtml(item.activityLabel)}</strong></div>
            <div class="tooltip-row"><span>Element</span><strong>${escapeHtml(item.pileId || '-')}</strong></div>
            <div class="tooltip-row"><span>From</span><strong>${formatDateTimeLabel(item.start)}</strong></div>
            <div class="tooltip-row"><span>To</span><strong>${formatDateTimeLabel(item.end)}</strong></div>
            <div class="tooltip-row"><span>Duration</span><strong>${formatNumberOneDecimal(item.durationHours)} hr</strong></div>
            <div class="tooltip-row"><span>Depth</span><strong>${item.drilledLm > 0 ? `${formatNumberOneDecimal(item.drilledLm)} m` : '-'}</strong></div>
            <div class="tooltip-row"><span>Contractor</span><strong>${escapeHtml(item.contractor || '-')}</strong></div>
          `;
          hit.addEventListener('pointerenter', evt => showUtilizationTimelineTooltip(evt, tooltipHtml));
          hit.addEventListener('pointermove', evt => showUtilizationTimelineTooltip(evt, tooltipHtml));
          hit.addEventListener('pointerleave', hideUtilizationTimelineTooltip);
          svg.appendChild(hit);
        });
      });

      if (els.utilizationTimelineSummary) {
        const totalHoursWorked = activities.reduce((sum, item) => sum + item.durationHours, 0);
        const totalLm = activities.reduce((sum, item) => sum + item.drilledLm, 0);
        const firstDay = formatDateFullLabel(normalizeDateString(minStart.toISOString()));
        const lastDay = formatDateFullLabel(normalizeDateString(maxEnd.toISOString()));
        els.utilizationTimelineSummary.innerHTML = `
          <div class="utilization-timeline-summary-card">
            <span class="utilization-timeline-summary-label">Active Rigs</span>
            <strong class="utilization-timeline-summary-value">${rigs.length}</strong>
            <span class="utilization-timeline-summary-meta">Machines with reported drilling windows in current scope</span>
          </div>
          <div class="utilization-timeline-summary-card">
            <span class="utilization-timeline-summary-label">Recorded Windows</span>
            <strong class="utilization-timeline-summary-value">${activities.length}</strong>
            <span class="utilization-timeline-summary-meta">${firstDay} to ${lastDay}</span>
          </div>
          <div class="utilization-timeline-summary-card">
            <span class="utilization-timeline-summary-label">Total Working Hours</span>
            <strong class="utilization-timeline-summary-value">${formatNumberOneDecimal(totalHoursWorked)} hr</strong>
            <span class="utilization-timeline-summary-meta">${formatNumberOneDecimal(totalLm)} drilled meters recorded</span>
          </div>
        `;
      }

      if (els.utilizationTimelineTag) {
        els.utilizationTimelineTag.textContent = `${rigs.length} Rig${rigs.length === 1 ? '' : 's'}`;
      }
      if (els.utilizationTimelineFootnote) {
        els.utilizationTimelineFootnote.textContent = 'Bars reflect the exact reported drilling windows per machine. Hover a bar for element, duration, depth, and contractor details.';
      }

      wrap.onpointerleave = hideUtilizationTimelineTooltip;
      wrap.onscroll = hideUtilizationTimelineTooltip;

      requestAnimationFrame(() => {
        if (wrap.scrollWidth > wrap.clientWidth + 4) {
          wrap.scrollLeft = Math.max(0, wrap.scrollWidth - wrap.clientWidth);
        } else {
          wrap.scrollLeft = 0;
        }
      });
    }

    function renderUtilizationTimelineBoard(project) {
      const wrap = els.utilizationTimelineWrap;
      const svg = els.utilizationTimelineSvg;
      if (!wrap || !svg) return;

      const activities = getUtilizationTimelineActivities(project);
      clearSvgGroup(svg);
      hideUtilizationTimelineTooltip();

      if (els.utilizationTimelineLegend) {
        const legendEntries = Array.from(new Set(activities.map(item => item.activityKey))).map(key => ({
          key,
          label: activities.find(item => item.activityKey === key)?.activityLabel || formatRigActivityLabel(key),
          color: getUtilizationTimelineActivityColor(key)
        }));
        els.utilizationTimelineLegend.innerHTML = legendEntries.map(entry => `
          <span class="utilization-timeline-legend-item">
            <span class="utilization-timeline-legend-swatch" style="background:${entry.color};"></span>
            ${escapeHtml(entry.label)}
          </span>
        `).join('');
      }

      if (!activities.length) {
        if (els.utilizationTimelineSummary) {
          els.utilizationTimelineSummary.innerHTML = '';
        }
        if (els.utilizationTimelineTag) els.utilizationTimelineTag.textContent = 'No Data';
        if (els.utilizationTimelineFootnote) {
          els.utilizationTimelineFootnote.textContent = 'No drilling windows are available for the current project and plot scope.';
        }
        svg.setAttribute('viewBox', '0 0 1200 420');
        svg.setAttribute('width', '1200');
        svg.setAttribute('height', '420');
        svg.style.width = '100%';
        svg.style.height = '420px';
        const empty = svgEl('text', {
          x: '600',
          y: '210',
          'text-anchor': 'middle',
          fill: 'rgba(244,247,251,0.62)',
          'font-size': '16',
          'font-weight': '700'
        });
        empty.textContent = 'No drilling timeline data available';
        svg.appendChild(empty);
        return;
      }

      const rigs = Array.from(new Set(activities.map(item => item.rig))).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
      const rigMeta = new Map(rigs.map(rig => {
        const rigRows = activities.filter(item => item.rig === rig);
        const drillingRows = rigRows.filter(item => item.activityKey === 'drilling' || item.activityKey === 'punching');
        const drillingHours = drillingRows.reduce((sum, item) => sum + item.durationHours, 0);
        const drilledLm = drillingRows.reduce((sum, item) => sum + item.drilledLm, 0);
        return [rig, {
          drillingHours,
          drilledLm,
          avgLmPerHour: drillingHours > 0 ? drilledLm / drillingHours : 0,
          windowCount: rigRows.length,
          hasPunching: rigRows.some(item => item.activityKey === 'punching'),
          hasNonPunching: rigRows.some(item => item.activityKey !== 'punching'),
          rows: rigRows
        }];
      }));

      const minStart = activities.reduce((min, item) => item.start < min ? item.start : min, activities[0].start);
      const maxEnd = activities.reduce((max, item) => item.end > max ? item.end : max, activities[0].end);
      const axisStart = new Date(minStart.getTime());
      axisStart.setHours(0, 0, 0, 0);
      const axisEnd = new Date(maxEnd.getTime());
      axisEnd.setHours(24, 0, 0, 0);
      const totalHours = Math.max(1, (axisEnd.getTime() - axisStart.getTime()) / 3600000);

      const laneLabelW = 196;
      const stickyPaneW = laneLabelW - 12;
      const subrowColW = 64;
      const subrowColX = stickyPaneW - subrowColW - 4;
      const right = 28;
      const top = 74;
      const bottom = 44;
      const singleLaneH = 54;
      const splitLaneH = 80;
      const laneGap = 12;
      const minTimelineWidth = Math.max((wrap.clientWidth || 980) - 6, 960);
      const pxPerHour = totalHours <= 24 ? 34 : totalHours <= 72 ? 18 : totalHours <= 168 ? 10.5 : 7.2;
      const plotW = Math.max(minTimelineWidth - laneLabelW - right, totalHours * pxPerHour);
      const width = laneLabelW + plotW + right;
      const laneTops = [];
      let laneCursor = top;
      rigs.forEach((rig, index) => {
        laneTops[index] = laneCursor;
        const meta = rigMeta.get(rig);
        laneCursor += (meta.hasPunching && meta.hasNonPunching ? splitLaneH : singleLaneH) + laneGap;
      });
      const height = laneCursor - laneGap + bottom;

      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      svg.setAttribute('width', String(width));
      svg.setAttribute('height', String(height));
      svg.style.width = `${width}px`;
      svg.style.height = `${height}px`;

      const plotStartX = laneLabelW;
      const plotEndX = width - right;
      const hoursToX = date => plotStartX + ((date.getTime() - axisStart.getTime()) / 3600000) * (plotW / totalHours);

      const dayCount = Math.ceil(totalHours / 24);
      for (let i = 0; i <= dayCount; i += 1) {
        const dt = new Date(axisStart.getTime() + i * 24 * 3600000);
        const x = hoursToX(dt);
        svg.appendChild(svgEl('line', {
          x1: String(x),
          y1: String(top - 10),
          x2: String(x),
          y2: String(height - bottom + 4),
          stroke: 'rgba(255,255,255,0.16)',
          'stroke-width': '1'
        }));
        if (i < dayCount) {
          const dayLabel = svgEl('text', {
            x: String(x + 6),
            y: String(top - 20),
            class: 'utilization-timeline-axis-text'
          });
          dayLabel.textContent = formatTimelineHeaderDate(dt);
          svg.appendChild(dayLabel);
        }
      }

      const sixHourTicks = Math.floor(totalHours / 6);
      for (let i = 0; i <= sixHourTicks; i += 1) {
        const dt = new Date(axisStart.getTime() + i * 6 * 3600000);
        const x = hoursToX(dt);
        svg.appendChild(svgEl('line', {
          x1: String(x),
          y1: String(top - 2),
          x2: String(x),
          y2: String(height - bottom + 4),
          stroke: 'rgba(255,255,255,0.03)',
          'stroke-width': '1'
        }));
      }

      rigs.forEach((rig, index) => {
        const laneY = laneTops[index];
        const meta = rigMeta.get(rig);
        const laneH = meta.hasPunching && meta.hasNonPunching ? splitLaneH : singleLaneH;

        svg.appendChild(svgEl('rect', {
          x: String(plotStartX),
          y: String(laneY),
          width: String(plotW),
          height: String(laneH),
          rx: '16',
          fill: index % 2 === 0 ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.015)',
          stroke: 'rgba(255,255,255,0.05)',
          'stroke-width': '1'
        }));


        if (meta.hasPunching && meta.hasNonPunching) {
          svg.appendChild(svgEl('line', {
            x1: String(plotStartX),
            y1: String(laneY + laneH / 2),
            x2: String(plotEndX),
            y2: String(laneY + laneH / 2),
            stroke: 'rgba(255,255,255,0.20)',
            'stroke-width': '1',
            'stroke-dasharray': '4 7'
          }));

        }

        meta.rows.forEach(item => {
          const x = hoursToX(item.start);
          const endX = hoursToX(item.end);
          const barW = Math.max(10, endX - x);
          const barH = meta.hasPunching && meta.hasNonPunching ? 24 : laneH - 16;
          const barY = meta.hasPunching && meta.hasNonPunching
            ? (item.activityKey === 'punching' ? laneY + 8 : laneY + laneH / 2 + 8)
            : laneY + 8;
          const color = getUtilizationTimelineActivityColor(item.activityKey);

          svg.appendChild(svgEl('rect', {
            x: String(x),
            y: String(barY),
            width: String(barW),
            height: String(barH),
            rx: '5',
            fill: color,
            'fill-opacity': barW < 26 ? '0.92' : '0.88',
            stroke: 'rgba(255,255,255,0.18)',
            'stroke-width': '1'
          }));

          svg.appendChild(svgEl('rect', {
            x: String(x + 1),
            y: String(barY + 1),
            width: String(Math.max(0, barW - 2)),
            height: String(Math.max(0, barH - 2)),
            rx: '4',
            fill: 'rgba(255,255,255,0.06)'
          }));

          if (barW > 66) {
            const label = svgEl('text', {
              x: String(x + barW / 2),
              y: String(barY + barH / 2 + 4),
              class: 'utilization-timeline-bar-label'
            });
            label.textContent = item.pileId || item.activityLabel;
            svg.appendChild(label);
          }

          const hit = svgEl('rect', {
            x: String(x),
            y: String(barY),
            width: String(Math.max(12, barW)),
            height: String(barH),
            fill: 'transparent'
          });
          hit.style.cursor = 'pointer';
          const tooltipHtml = `
            <div class="tooltip-title">${escapeHtml(item.rig)}</div>
            <div class="tooltip-row"><span>Activity</span><strong>${escapeHtml(item.activityLabel)}</strong></div>
            <div class="tooltip-row"><span>Element</span><strong>${escapeHtml(item.pileId || '-')}</strong></div>
            <div class="tooltip-row"><span>From</span><strong>${formatDateTimeLabel(item.start)}</strong></div>
            <div class="tooltip-row"><span>To</span><strong>${formatDateTimeLabel(item.end)}</strong></div>
            <div class="tooltip-row"><span>Duration</span><strong>${formatNumberOneDecimal(item.durationHours)} hr</strong></div>
            <div class="tooltip-row"><span>Depth</span><strong>${item.drilledLm > 0 ? `${formatNumberOneDecimal(item.drilledLm)} m` : '-'}</strong></div>
            <div class="tooltip-row"><span>Contractor</span><strong>${escapeHtml(item.contractor || '-')}</strong></div>
          `;
          hit.addEventListener('pointerenter', evt => showUtilizationTimelineTooltip(evt, tooltipHtml));
          hit.addEventListener('pointermove', evt => showUtilizationTimelineTooltip(evt, tooltipHtml));
          hit.addEventListener('pointerleave', hideUtilizationTimelineTooltip);
          svg.appendChild(hit);
        });
      });

      if (els.utilizationTimelineSummary) {
        els.utilizationTimelineSummary.innerHTML = '';
      }

      if (els.utilizationTimelineTag) {
        els.utilizationTimelineTag.textContent = `${rigs.length} Rig${rigs.length === 1 ? '' : 's'}`;
      }
      if (els.utilizationTimelineFootnote) {
        els.utilizationTimelineFootnote.textContent = 'Bars reflect the exact reported drilling windows per machine. Hover a bar for element, duration, depth, and contractor details.';
      }

      const stickyBg = svgEl('rect', {
        x: '0',
        y: '0',
        width: String(stickyPaneW),
        height: String(height),
        fill: 'rgba(6,8,11,0.985)',
        stroke: 'rgba(255,255,255,0.06)',
        'stroke-width': '1',
        'data-base-x': '0',
        'data-util-sticky-bg': '1'
      });
      svg.appendChild(stickyBg);

      const stickySubcolBg = svgEl('rect', {
        x: String(subrowColX),
        y: '0',
        width: String(subrowColW + 6),
        height: String(height),
        fill: 'rgba(255,255,255,0.038)',
        'data-base-x': String(subrowColX),
        'data-util-sticky-bg': '1'
      });
      svg.appendChild(stickySubcolBg);
      const subcolTitle = svgEl('text', {
        x: String(subrowColX + subrowColW / 2),
        y: String(top - 20),
        'text-anchor': 'middle',
        class: 'utilization-timeline-subcol-title',
        'data-base-x': String(subrowColX + subrowColW / 2),
        'data-util-sticky-label': '1'
      });
      subcolTitle.textContent = 'ACT.';
      svg.appendChild(subcolTitle);
      rigs.forEach((rig, index) => {

        const laneY = laneTops[index];
        const meta = rigMeta.get(rig);
        const laneH = meta.hasPunching && meta.hasNonPunching ? splitLaneH : singleLaneH;
        const centerY = laneY + laneH / 2;

        const rigLabel = svgEl('text', {
          x: '12',
          y: String(centerY - 8),
          'text-anchor': 'start',
          class: 'utilization-timeline-rig-label',
          'data-base-x': '12',
          'data-base-x': '14',
          'data-util-sticky-label': '1'
        });
        rigLabel.textContent = rig;
        svg.appendChild(rigLabel);

        const rigMetaText = svgEl('text', {
          x: '12',
          y: String(centerY + 12),
          'text-anchor': 'start',
          class: 'utilization-timeline-rig-meta',
          'data-base-x': '12',
          'data-base-x': '14',
          'data-util-sticky-label': '1'
        });
        rigMetaText.textContent = [
          `${formatNumberOneDecimal(meta.drillingHours)} hr`,
          `${formatNumberOneDecimal(meta.drilledLm)} m`,
          `${formatNumberOneDecimal(meta.avgLmPerHour)} lm/hr`
        ].join(' | ');
        svg.appendChild(rigMetaText);
        if (meta.hasPunching && meta.hasNonPunching) {
          const subrowBadgeW = 58;
          const subrowBadgeH = 16;
          const subrowBadgeX = subrowColX + ((subrowColW - subrowBadgeW) / 2);

          const punchStickyBg = svgEl('rect', {
            x: String(subrowBadgeX),
            y: String(laneY + 6),
            width: String(subrowBadgeW),
            height: String(subrowBadgeH),
            rx: '8',
            class: 'utilization-timeline-subrow-pill utilization-timeline-subrow-pill--punching',
            'data-base-x': String(subrowBadgeX),
            'data-util-sticky-label': '1'
          });
          svg.appendChild(punchStickyBg);

          const punchSticky = svgEl('text', {
            x: String(subrowBadgeX + subrowBadgeW / 2),
            y: String(laneY + 17),
            'text-anchor': 'middle',
            class: 'utilization-timeline-subrow-label',
            'data-base-x': String(subrowBadgeX + subrowBadgeW / 2),
            'data-util-sticky-label': '1'
          });
          punchSticky.textContent = 'Punching';
          svg.appendChild(punchSticky);

          const drillStickyBg = svgEl('rect', {
            x: String(subrowBadgeX),
            y: String(laneY + laneH - subrowBadgeH - 6),
            width: String(subrowBadgeW),
            height: String(subrowBadgeH),
            rx: '8',
            class: 'utilization-timeline-subrow-pill utilization-timeline-subrow-pill--drilling',
            'data-base-x': String(subrowBadgeX),
            'data-util-sticky-label': '1'
          });
          svg.appendChild(drillStickyBg);

          const drillSticky = svgEl('text', {
            x: String(subrowBadgeX + subrowBadgeW / 2),
            y: String(laneY + laneH - 11),
            'text-anchor': 'middle',
            class: 'utilization-timeline-subrow-label',
            'data-base-x': String(subrowBadgeX + subrowBadgeW / 2),
            'data-util-sticky-label': '1'
          });
          drillSticky.textContent = 'Drilling';
          svg.appendChild(drillSticky);
        }
      });



      const syncSticky = () => {
        const scrollLeft = wrap.scrollLeft || 0;
        svg.querySelectorAll('[data-util-sticky-label="1"]').forEach(label => {
          const baseX = Number(label.getAttribute('data-base-x') || (stickyPaneW - 12));
          label.setAttribute('x', String(baseX + scrollLeft));
        });
        svg.querySelectorAll('[data-util-sticky-bg="1"]').forEach(bg => {
          const baseX = Number(bg.getAttribute('data-base-x') || 0);
          bg.setAttribute('x', String(baseX + scrollLeft));
        });
        svg.querySelectorAll('[data-util-sticky-divider="1"]').forEach(divider => {
          const baseX = Number(divider.getAttribute('data-base-x') || stickyPaneW);
          divider.setAttribute('x1', String(baseX + scrollLeft));
          divider.setAttribute('x2', String(baseX + scrollLeft));
        });
      };

      wrap.onpointerleave = hideUtilizationTimelineTooltip;
      wrap.onscroll = () => {
        hideUtilizationTimelineTooltip();
        syncSticky();
      };
      wrap.onwheel = evt => {
        if (wrap.scrollWidth <= wrap.clientWidth + 4) return;
        if (Math.abs(evt.deltaY) <= Math.abs(evt.deltaX) && evt.deltaX === 0) return;
        evt.preventDefault();
        wrap.scrollLeft += evt.deltaY || evt.deltaX;
        syncSticky();
      };

      requestAnimationFrame(() => {
        if (wrap.scrollWidth > wrap.clientWidth + 4) {
          wrap.scrollLeft = Math.max(0, wrap.scrollWidth - wrap.clientWidth);
        } else {
          wrap.scrollLeft = 0;
        }
        syncSticky();
      });
    }

    function syncUtilizationView() {
      const isTimeline = utilizationView === 'timeline';
      els.utilizationViewButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.utilView === utilizationView));
      if (els.utilizationMatrixView) {
        els.utilizationMatrixView.classList.toggle('active', !isTimeline);
        els.utilizationMatrixView.hidden = isTimeline;
      }
      if (els.utilizationTimelineView) {
        els.utilizationTimelineView.classList.toggle('active', isTimeline);
        els.utilizationTimelineView.hidden = !isTimeline;
      }
    }

    function getUtilizationChartLayout(wrapEl, dates, rigCount, mode, chartH, options = {}) {
      const left = options.left ?? 78;
      const right = options.right ?? 24;
      const top = options.top ?? 18;
      const bottom = options.bottom ?? 72;
      const overflowThreshold = options.overflowThreshold ?? (mode === 'daily' ? 8 : 10);
      const minDaySpan = mode === 'daily'
        ? Math.max(options.minDailySpan ?? 58, rigCount * (options.dailyRigFactor ?? 16) + (rigCount - 1) * (options.dailyGapFactor ?? 4))
        : (options.cumulativeSpan ?? 72);
      const minWrapWidth = options.minWrapWidth ?? 760;
      const wrapWidth = Math.max((wrapEl?.clientWidth || 0) - 4, minWrapWidth);
      const requiredChartW = left + right + (dates.length * minDaySpan);
      const shouldOverflow = dates.length > overflowThreshold && requiredChartW > wrapWidth;
      const chartW = shouldOverflow ? Math.max(wrapWidth, requiredChartW) : wrapWidth;
      const innerW = chartW - left - right;
      const innerH = chartH - top - bottom;
      const plotSidePad = mode === 'daily'
        ? (options.dailyPlotSidePad ?? 26)
        : (options.cumulativePlotSidePad ?? 14);
      const effectiveW = Math.max(innerW - plotSidePad * 2, 1);
      const stepX = dates.length > 1 ? effectiveW / (dates.length - 1) : 0;
      return { chartW, chartH, left, right, top, bottom, innerW, innerH, plotSidePad, stepX, shouldOverflow };
    }

    function bindUtilizationChartScrolls() {
      const primary = els.utilizationChartWrap;
      const secondary = els.utilizationLmChartWrap;
      if (!primary || !secondary || primary.dataset.syncBound) return;

      let syncing = false;
      const syncScroll = (source, target) => {
        if (syncing) return;
        syncing = true;
        target.scrollLeft = source.scrollLeft;
        requestAnimationFrame(() => { syncing = false; });
      };

      primary.addEventListener('scroll', () => syncScroll(primary, secondary));
      secondary.addEventListener('scroll', () => syncScroll(secondary, primary));

      const wheelScroll = (evt) => {
        const canScrollX = primary.scrollWidth > primary.clientWidth + 4;
        if (!canScrollX) return;
        const delta = Math.abs(evt.deltaY) > Math.abs(evt.deltaX) ? evt.deltaY : evt.deltaX;
        if (!delta) return;
        evt.preventDefault();
        primary.scrollLeft += delta;
        secondary.scrollLeft = primary.scrollLeft;
      };

      primary.addEventListener('wheel', wheelScroll, { passive: false });
      secondary.addEventListener('wheel', wheelScroll, { passive: false });
      primary.dataset.syncBound = 'true';
    }

    function renderUtilizationChart(rows) {
      const svg = els.utilizationSvg;
      if (!svg) return;
      while (svg.firstChild) svg.removeChild(svg.firstChild);

      const { dates, series } = buildUtilizationSeries(rows, utilizationMode);
      renderUtilizationLegend(series);
      if (els.utilizationChartTag) {
        els.utilizationChartTag.textContent = utilizationMode === 'daily' ? 'Daily' : 'Cumulative';
      }

      if (!dates.length || !series.length) {
        const empty = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        empty.setAttribute('x', '500');
        empty.setAttribute('y', '160');
        empty.setAttribute('text-anchor', 'middle');
        empty.setAttribute('fill', 'rgba(244,247,251,0.62)');
        empty.setAttribute('font-size', '14');
        empty.setAttribute('font-weight', '700');
        empty.textContent = 'No rig utilization data available';
        svg.appendChild(empty);
        return;
      }

      const rigCount = Math.max(series.length, 1);
      const layout = getUtilizationChartLayout(els.utilizationChartWrap, dates, rigCount, utilizationMode, 330);
      const { chartW, chartH, left, right, top, bottom, innerW, innerH, plotSidePad, stepX } = layout;
      const maxVal = Math.max(100, ...series.flatMap(item => item.points
        .map(point => (utilizationMode === 'daily' ? point.utilization : point.cumulativeUtilization))
        .filter(value => Number.isFinite(value))));
      const yFor = value => top + innerH - (Math.max(0, value) / maxVal) * innerH;

      svg.setAttribute('viewBox', `0 0 ${chartW} ${chartH}`);
      svg.style.width = `${chartW}px`;
      svg.style.height = `${chartH}px`;

      let tooltipEl = document.getElementById('utilizationTooltip');
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'utilizationTooltip';
        tooltipEl.className = 'chart-tooltip';
        tooltipEl.style.position = 'fixed';
        document.body.appendChild(tooltipEl);
      }

      let hoverGuide = document.getElementById('utilizationHoverGuide');
      if (!hoverGuide) {
        hoverGuide = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        hoverGuide.id = 'utilizationHoverGuide';
      }
      hoverGuide.setAttribute('y1', String(top));
      hoverGuide.setAttribute('y2', String(chartH - bottom));
      hoverGuide.setAttribute('stroke', 'rgba(255,255,255,0.38)');
      hoverGuide.setAttribute('stroke-width', '1.5');
      hoverGuide.setAttribute('stroke-dasharray', '5 6');
      hoverGuide.setAttribute('opacity', utilizationMode === 'cumulative' ? '1' : '0');
      hoverGuide.style.display = 'none';
      svg.appendChild(hoverGuide);

      const showTooltip = (evt, dateKey, points, guideX) => {
        tooltipEl.innerHTML = `
          <div class="tooltip-title">${formatDateFullLabel(dateKey)}</div>
          ${points.map(point => `
            <div class="tooltip-row">
              <span>${escapeHtml(point.rig)}</span>
              <strong>${Number.isFinite(utilizationMode === 'daily' ? point.utilization : point.cumulativeUtilization) ? `${(utilizationMode === 'daily' ? point.utilization : point.cumulativeUtilization).toFixed(1)}%` : 'ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â'}</strong>
            </div>
            <div class="tooltip-row">
              <span>Drilling Hr</span>
              <strong>${point.drillingHours.toFixed(1)} hr</strong>
            </div>
          `).join('')}
        `;
        tooltipEl.classList.add('visible');
        const tooltipX = Math.min(window.innerWidth - 260, evt.clientX + 14);
        const tooltipY = Math.min(window.innerHeight - 220, evt.clientY + 14);
        tooltipEl.style.left = `${Math.max(8, tooltipX)}px`;
        tooltipEl.style.top = `${Math.max(8, tooltipY)}px`;
        if (utilizationMode === 'cumulative') {
          hoverGuide.setAttribute('x1', String(guideX));
          hoverGuide.setAttribute('x2', String(guideX));
          hoverGuide.style.display = 'block';
        }
      };

      const hideTooltip = () => {
        tooltipEl.classList.remove('visible');
        hoverGuide.style.display = 'none';
      };

      for (let i = 0; i <= 4; i += 1) {
        const value = (maxVal / 4) * i;
        const y = yFor(value);
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', String(left));
        line.setAttribute('x2', String(chartW - right));
        line.setAttribute('y1', String(y));
        line.setAttribute('y2', String(y));
        line.setAttribute('stroke', 'rgba(255,255,255,0.08)');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);

        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', String(left - 10));
        label.setAttribute('y', String(y + 4));
        label.setAttribute('text-anchor', 'end');
        label.setAttribute('fill', 'rgba(244,247,251,0.68)');
        label.setAttribute('font-size', '12');
        label.setAttribute('font-weight', '700');
        label.textContent = `${value.toFixed(0)}%`;
        svg.appendChild(label);
      }

      dates.forEach((dateKey, idx) => {
        const x = dates.length === 1 ? left + innerW / 2 : left + plotSidePad + stepX * idx;

        if (utilizationMode === 'daily') {
          const separator = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          separator.setAttribute('x1', String(x));
          separator.setAttribute('x2', String(x));
          separator.setAttribute('y1', String(top));
          separator.setAttribute('y2', String(chartH - bottom));
          separator.setAttribute('stroke', 'rgba(255,255,255,0.12)');
          separator.setAttribute('stroke-width', '1');
          separator.setAttribute('stroke-dasharray', '3 8');
          svg.appendChild(separator);
        }

        const dateLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        dateLabel.setAttribute('x', String(x));
        dateLabel.setAttribute('y', String(chartH - 18));
        dateLabel.setAttribute('text-anchor', 'middle');
        dateLabel.setAttribute('fill', 'rgba(244,247,251,0.72)');
        dateLabel.setAttribute('font-size', '12');
        dateLabel.setAttribute('font-weight', '700');
        dateLabel.textContent = formatShortDateLabel(dateKey);
        svg.appendChild(dateLabel);

        const hover = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hover.setAttribute('x', String(x - Math.max(stepX / 2, 24)));
        hover.setAttribute('y', String(top));
        hover.setAttribute('width', String(Math.max(stepX, 48)));
        hover.setAttribute('height', String(innerH));
        hover.setAttribute('fill', 'transparent');
        hover.style.cursor = 'pointer';
        hover.addEventListener('mousemove', evt => showTooltip(evt, dateKey, series.map(item => item.points[idx]), x));
        hover.addEventListener('mouseleave', hideTooltip);
        svg.appendChild(hover);
      });

      if (utilizationMode === 'daily') {
        const clusterWidth = Math.max(stepX * 0.72, rigCount * 18 + (rigCount - 1) * 4);
        const barGap = 4;
        const barW = Math.max(10, Math.min(18, (clusterWidth - barGap * (rigCount - 1)) / rigCount));

        series.forEach((item, rigIdx) => {
          item.points.forEach((point, idx) => {
            const value = point.utilization;
            if (!Number.isFinite(value)) return;
            const baseX = dates.length === 1 ? left + innerW / 2 : left + plotSidePad + stepX * idx;
            const clusterStart = baseX - ((barW * rigCount + barGap * (rigCount - 1)) / 2);
            const x = clusterStart + rigIdx * (barW + barGap);
            const y = yFor(value);
            const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            bar.setAttribute('x', String(x));
            bar.setAttribute('y', String(y));
            bar.setAttribute('width', String(barW));
            bar.setAttribute('height', String(Math.max(0, chartH - bottom - y)));
            bar.setAttribute('rx', '7');
            bar.setAttribute('fill', item.color);
            bar.setAttribute('fill-opacity', '0.86');
            bar.setAttribute('stroke', 'rgba(255,255,255,0.26)');
            bar.setAttribute('stroke-width', '1');
            bar.style.cursor = 'pointer';
            bar.addEventListener('mousemove', evt => showTooltip(evt, point.date, series.map(seriesItem => seriesItem.points[idx]), baseX));
            bar.addEventListener('mouseleave', hideTooltip);
            svg.appendChild(bar);

            const valueLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            valueLabel.setAttribute('x', String(x + barW / 2));
            valueLabel.setAttribute('y', String(Math.max(top + 14, y - 10)));
            valueLabel.setAttribute('text-anchor', 'middle');
            valueLabel.setAttribute('fill', 'rgba(244,247,251,0.92)');
            valueLabel.setAttribute('font-size', '11');
            valueLabel.setAttribute('font-weight', '800');
            valueLabel.textContent = `${value.toFixed(0)}%`;
            valueLabel.style.pointerEvents = 'none';
            svg.appendChild(valueLabel);
          });
        });
      } else {
        series.forEach(item => {
          const pathParts = [];
          let started = false;
          item.points.forEach((point, idx) => {
            const value = point.cumulativeUtilization;
            if (!Number.isFinite(value)) return;
            const x = dates.length === 1 ? left + innerW / 2 : left + plotSidePad + stepX * idx;
            const y = yFor(value);
            pathParts.push(`${started ? 'L' : 'M'} ${x} ${y}`);
            started = true;
          });
          if (!pathParts.length) return;
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', pathParts.join(' '));
          path.setAttribute('fill', 'none');
          path.setAttribute('stroke', item.color);
          path.setAttribute('stroke-width', '3');
          path.setAttribute('stroke-linecap', 'round');
          path.setAttribute('stroke-linejoin', 'round');
          path.setAttribute('opacity', '0.96');
          svg.appendChild(path);

          item.points.forEach((point, idx) => {
            const value = point.cumulativeUtilization;
            if (!Number.isFinite(value)) return;
            const x = dates.length === 1 ? left + innerW / 2 : left + plotSidePad + stepX * idx;
            const y = yFor(value);
            const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            dot.setAttribute('cx', String(x));
            dot.setAttribute('cy', String(y));
            dot.setAttribute('r', '4.8');
            dot.setAttribute('fill', item.color);
            dot.setAttribute('stroke', 'rgba(255,255,255,0.9)');
            dot.setAttribute('stroke-width', '1.6');
            dot.style.cursor = 'pointer';
            dot.addEventListener('mousemove', evt => showTooltip(evt, point.date, series.map(seriesItem => seriesItem.points[idx]), x));
            dot.addEventListener('mouseleave', hideTooltip);
            svg.appendChild(dot);

            const valueLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            valueLabel.setAttribute('x', String(x));
            valueLabel.setAttribute('y', String(Math.max(top + 14, y - 12)));
            valueLabel.setAttribute('text-anchor', 'middle');
            valueLabel.setAttribute('fill', 'rgba(244,247,251,0.92)');
            valueLabel.setAttribute('font-size', '11');
            valueLabel.setAttribute('font-weight', '800');
            valueLabel.textContent = `${value.toFixed(0)}%`;
            valueLabel.style.pointerEvents = 'none';
            svg.appendChild(valueLabel);
          });
        });
      }

      svg.onmouseleave = hideTooltip;

      if (els.utilizationChartWrap) {
        bindUtilizationChartScrolls();
        requestAnimationFrame(() => {
          const hasOverflow = els.utilizationChartWrap.scrollWidth > els.utilizationChartWrap.clientWidth + 4;
          els.utilizationChartWrap.scrollLeft = hasOverflow
            ? Math.max(0, els.utilizationChartWrap.scrollWidth - els.utilizationChartWrap.clientWidth)
            : 0;
          if (els.utilizationLmChartWrap) {
            els.utilizationLmChartWrap.scrollLeft = els.utilizationChartWrap.scrollLeft;
          }
        });
      }
    }

    function renderUtilizationLmChart(rows) {
      const svg = els.utilizationLmSvg;
      if (!svg) return;
      while (svg.firstChild) svg.removeChild(svg.firstChild);

      const { dates, series } = buildUtilizationSeries(rows, utilizationMode);
      if (els.utilizationLmChartTag) {
        els.utilizationLmChartTag.textContent = utilizationMode === 'daily' ? 'Daily' : 'Cumulative';
      }
      if (!dates.length || !series.length) {
        const empty = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        empty.setAttribute('x', '500');
        empty.setAttribute('y', '130');
        empty.setAttribute('text-anchor', 'middle');
        empty.setAttribute('fill', 'rgba(244,247,251,0.56)');
        empty.setAttribute('font-size', '12');
        empty.setAttribute('font-weight', '700');
        empty.textContent = 'No drilled Lm data available';
        svg.appendChild(empty);
        return;
      }

      const rigCount = Math.max(series.length, 1);
      const layout = getUtilizationChartLayout(els.utilizationLmChartWrap, dates, rigCount, utilizationMode, 250, {
        left: 62,
        right: 20,
        top: 16,
        bottom: 56,
        dailyPlotSidePad: 18,
        cumulativePlotSidePad: 12
      });
      const { chartW, chartH, left, right, top, bottom, innerW, innerH, plotSidePad, stepX } = layout;
      const maxVal = Math.max(1, ...series.flatMap(item => item.points.map(point => (
        utilizationMode === 'daily' ? point.drilledLm : point.cumulativeLm
      ))));
      const yFor = value => top + innerH - (Math.max(0, value) / maxVal) * innerH;

      svg.setAttribute('viewBox', `0 0 ${chartW} ${chartH}`);
      svg.style.width = `${chartW}px`;
      svg.style.height = `${chartH}px`;

      let tooltipEl = document.getElementById('utilizationLmTooltip');
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'utilizationLmTooltip';
        tooltipEl.className = 'chart-tooltip';
        tooltipEl.style.position = 'fixed';
        document.body.appendChild(tooltipEl);
      }

      let hoverGuide = document.getElementById('utilizationLmHoverGuide');
      if (!hoverGuide) {
        hoverGuide = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        hoverGuide.id = 'utilizationLmHoverGuide';
      }
      hoverGuide.setAttribute('y1', String(top));
      hoverGuide.setAttribute('y2', String(chartH - bottom));
      hoverGuide.setAttribute('stroke', 'rgba(255,255,255,0.28)');
      hoverGuide.setAttribute('stroke-width', '1.2');
      hoverGuide.setAttribute('stroke-dasharray', '5 6');
      hoverGuide.style.display = 'none';
      svg.appendChild(hoverGuide);

      const showTooltip = (evt, dateKey, points, guideX) => {
        tooltipEl.innerHTML = `
          <div class="tooltip-title">${formatDateFullLabel(dateKey)}</div>
          ${points.map(point => `
            <div class="tooltip-row">
              <span>${escapeHtml(point.rig)}</span>
              <strong>${(utilizationMode === 'daily' ? point.drilledLm : point.cumulativeLm).toFixed(1)} Lm</strong>
            </div>
          `).join('')}
        `;
        tooltipEl.classList.add('visible');
        const tooltipX = Math.min(window.innerWidth - 260, evt.clientX + 14);
        const tooltipY = Math.min(window.innerHeight - 220, evt.clientY + 14);
        tooltipEl.style.left = `${Math.max(8, tooltipX)}px`;
        tooltipEl.style.top = `${Math.max(8, tooltipY)}px`;
        hoverGuide.setAttribute('x1', String(guideX));
        hoverGuide.setAttribute('x2', String(guideX));
        hoverGuide.style.display = 'block';
      };

      const hideTooltip = () => {
        tooltipEl.classList.remove('visible');
        hoverGuide.style.display = 'none';
      };

      for (let i = 0; i <= 4; i += 1) {
        const value = (maxVal / 4) * i;
        const y = yFor(value);
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', String(left));
        line.setAttribute('x2', String(chartW - right));
        line.setAttribute('y1', String(y));
        line.setAttribute('y2', String(y));
        line.setAttribute('stroke', 'rgba(255,255,255,0.07)');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);

        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', String(left - 8));
        label.setAttribute('y', String(y + 4));
        label.setAttribute('text-anchor', 'end');
        label.setAttribute('fill', 'rgba(244,247,251,0.62)');
        label.setAttribute('font-size', '11');
        label.setAttribute('font-weight', '700');
        label.textContent = `${value.toFixed(0)}`;
        svg.appendChild(label);
      }

      dates.forEach((dateKey, idx) => {
        const x = dates.length === 1 ? left + innerW / 2 : left + plotSidePad + stepX * idx;
        const dateLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        dateLabel.setAttribute('x', String(x));
        dateLabel.setAttribute('y', String(chartH - 16));
        dateLabel.setAttribute('text-anchor', 'middle');
        dateLabel.setAttribute('fill', 'rgba(244,247,251,0.68)');
        dateLabel.setAttribute('font-size', '11');
        dateLabel.setAttribute('font-weight', '700');
        dateLabel.textContent = formatShortDateLabel(dateKey);
        svg.appendChild(dateLabel);

        const hover = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hover.setAttribute('x', String(x - Math.max(stepX / 2, 22)));
        hover.setAttribute('y', String(top));
        hover.setAttribute('width', String(Math.max(stepX, 44)));
        hover.setAttribute('height', String(innerH));
        hover.setAttribute('fill', 'transparent');
        hover.style.cursor = 'pointer';
        hover.addEventListener('mousemove', evt => showTooltip(evt, dateKey, series.map(item => item.points[idx]), x));
        hover.addEventListener('mouseleave', hideTooltip);
        svg.appendChild(hover);
      });

      if (utilizationMode === 'daily') {
        const clusterWidth = Math.max(stepX * 0.72, rigCount * 18 + (rigCount - 1) * 4);
        const barGap = 4;
        const barW = Math.max(10, Math.min(18, (clusterWidth - barGap * (rigCount - 1)) / rigCount));

        series.forEach((item, rigIdx) => {
          item.points.forEach((point, idx) => {
            const value = point.drilledLm;
            const baseX = dates.length === 1 ? left + innerW / 2 : left + plotSidePad + stepX * idx;
            const clusterStart = baseX - ((barW * rigCount + barGap * (rigCount - 1)) / 2);
            const x = clusterStart + rigIdx * (barW + barGap);
            const y = yFor(value);
            const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            bar.setAttribute('x', String(x));
            bar.setAttribute('y', String(y));
            bar.setAttribute('width', String(barW));
            bar.setAttribute('height', String(Math.max(0, chartH - bottom - y)));
            bar.setAttribute('rx', '7');
            bar.setAttribute('fill', item.color);
            bar.setAttribute('fill-opacity', '0.82');
            bar.setAttribute('stroke', 'rgba(255,255,255,0.2)');
            bar.setAttribute('stroke-width', '1');
            bar.style.cursor = 'pointer';
            bar.addEventListener('mousemove', evt => showTooltip(evt, point.date, series.map(seriesItem => seriesItem.points[idx]), baseX));
            bar.addEventListener('mouseleave', hideTooltip);
            svg.appendChild(bar);

            const valueLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            valueLabel.setAttribute('x', String(x + barW / 2));
            valueLabel.setAttribute('y', String(Math.max(top + 12, y - 8)));
            valueLabel.setAttribute('text-anchor', 'middle');
            valueLabel.setAttribute('fill', 'rgba(244,247,251,0.9)');
            valueLabel.setAttribute('font-size', '10');
            valueLabel.setAttribute('font-weight', '800');
            valueLabel.textContent = `${value.toFixed(1)}`;
            valueLabel.style.pointerEvents = 'none';
            svg.appendChild(valueLabel);
          });
        });
      } else {
        series.forEach(item => {
          const pathParts = [];
          item.points.forEach((point, idx) => {
            const value = point.cumulativeLm;
            const x = dates.length === 1 ? left + innerW / 2 : left + plotSidePad + stepX * idx;
            const y = yFor(value);
            pathParts.push(`${idx === 0 ? 'M' : 'L'} ${x} ${y}`);
          });
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', pathParts.join(' '));
          path.setAttribute('fill', 'none');
          path.setAttribute('stroke', item.color);
          path.setAttribute('stroke-width', '2.6');
          path.setAttribute('stroke-linecap', 'round');
          path.setAttribute('stroke-linejoin', 'round');
          path.setAttribute('opacity', '0.95');
          svg.appendChild(path);

          item.points.forEach((point, idx) => {
            const value = point.cumulativeLm;
            const x = dates.length === 1 ? left + innerW / 2 : left + plotSidePad + stepX * idx;
            const y = yFor(value);
            const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            dot.setAttribute('cx', String(x));
            dot.setAttribute('cy', String(y));
            dot.setAttribute('r', '4.2');
            dot.setAttribute('fill', item.color);
            dot.setAttribute('stroke', 'rgba(255,255,255,0.88)');
            dot.setAttribute('stroke-width', '1.4');
            dot.style.cursor = 'pointer';
            dot.addEventListener('mousemove', evt => showTooltip(evt, point.date, series.map(seriesItem => seriesItem.points[idx]), x));
            dot.addEventListener('mouseleave', hideTooltip);
            svg.appendChild(dot);
          });
        });
      }

      svg.onmouseleave = hideTooltip;

      if (els.utilizationLmChartWrap) {
        bindUtilizationChartScrolls();
        requestAnimationFrame(() => {
          els.utilizationLmChartWrap.scrollLeft = els.utilizationChartWrap?.scrollLeft || 0;
        });
      }
    }

    function bindUtilizationUnifiedScroll() {
      const wrap = els.utilizationChartWrap;
      if (!wrap || wrap.dataset.unifiedScrollBound) return;
      wrap.addEventListener('wheel', evt => {
        const canScrollX = wrap.scrollWidth > wrap.clientWidth + 4;
        if (!canScrollX) return;
        const delta = Math.abs(evt.deltaY) > Math.abs(evt.deltaX) ? evt.deltaY : evt.deltaX;
        if (!delta) return;
        evt.preventDefault();
        wrap.scrollLeft += delta;
      }, { passive: false });
      wrap.dataset.unifiedScrollBound = 'true';
    }

    function renderUtilizationCombinedChart(rows) {
      const svg = els.utilizationSvg;
      if (!svg) return;
      while (svg.firstChild) svg.removeChild(svg.firstChild);

      const { dates, series } = buildUtilizationSeries(rows, utilizationMode);
      renderUtilizationLegend(series);
      if (els.utilizationChartTag) {
        els.utilizationChartTag.textContent = utilizationMode === 'daily' ? 'Daily' : 'Cumulative';
      }

      if (!dates.length || !series.length) {
        const empty = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        empty.setAttribute('x', '500');
        empty.setAttribute('y', '250');
        empty.setAttribute('text-anchor', 'middle');
        empty.setAttribute('fill', 'rgba(244,247,251,0.62)');
        empty.setAttribute('font-size', '14');
        empty.setAttribute('font-weight', '700');
        empty.textContent = 'No rig performance data available';
        svg.appendChild(empty);
        return;
      }

      const rigCount = Math.max(series.length, 1);
      const layout = getUtilizationChartLayout(els.utilizationChartWrap, dates, rigCount, utilizationMode, 560, {
        left: 84,
        right: 20,
        top: 28,
        bottom: 72,
        minWrapWidth: 0,
        overflowThreshold: utilizationMode === 'daily' ? 8 : 10,
        minDailySpan: 50,
        dailyRigFactor: 13,
        dailyGapFactor: 3,
        dailyPlotSidePad: 28,
        cumulativeSpan: 60,
        cumulativePlotSidePad: 18
      });
      const { chartW, chartH, left, right, top, bottom, innerW, plotSidePad, stepX } = layout;
      const dividerY = 316;
      const topArea = { y1: top, y2: 280 };
      const bottomArea = { y1: dividerY + 30, y2: chartH - bottom };
      const topHeight = topArea.y2 - topArea.y1;
      const bottomHeight = bottomArea.y2 - bottomArea.y1;
      const utilMax = Math.max(100, ...series.flatMap(item => item.points.map(point => utilizationMode === 'daily' ? point.utilization : point.cumulativeUtilization).filter(Number.isFinite)));
      const lmMax = Math.max(1, ...series.flatMap(item => item.points.map(point => utilizationMode === 'daily' ? point.drilledLm : point.cumulativeLm).filter(Number.isFinite)));
      const yForUtil = value => topArea.y1 + topHeight - (Math.max(0, value) / utilMax) * topHeight;
      const yForLm = value => bottomArea.y1 + bottomHeight - (Math.max(0, value) / lmMax) * bottomHeight;
      if (els.utilizationUtilTicks) {
        els.utilizationUtilTicks.innerHTML = Array.from({ length: 5 }, (_, i) => {
          const value = (utilMax / 4) * (4 - i);
          const pct = (i / 4) * 100;
          return `<div class="utilization-axis-tick" style="top:${pct}%">${value.toFixed(0)}%</div>`;
        }).join('');
      }
      if (els.utilizationLmTicks) {
        els.utilizationLmTicks.innerHTML = Array.from({ length: 5 }, (_, i) => {
          const value = (lmMax / 4) * (4 - i);
          const pct = (i / 4) * 100;
          return `<div class="utilization-axis-tick" style="top:${pct}%">${value.toFixed(0)} m</div>`;
        }).join('');
      }

      svg.setAttribute('viewBox', `0 0 ${chartW} ${chartH}`);
      svg.style.width = `${chartW}px`;
      svg.style.height = `${chartH}px`;

      let tooltipEl = document.getElementById('utilizationTooltip');
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'utilizationTooltip';
        tooltipEl.className = 'chart-tooltip';
        tooltipEl.style.position = 'fixed';
        document.body.appendChild(tooltipEl);
      }

      let hoverGuide = document.getElementById('utilizationHoverGuide');
      if (!hoverGuide) {
        hoverGuide = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        hoverGuide.id = 'utilizationHoverGuide';
      }
      hoverGuide.setAttribute('y1', String(topArea.y1));
      hoverGuide.setAttribute('y2', String(bottomArea.y2));
      hoverGuide.setAttribute('stroke', 'rgba(255,255,255,0.32)');
      hoverGuide.setAttribute('stroke-width', '1.4');
      hoverGuide.setAttribute('stroke-dasharray', '5 6');
      hoverGuide.style.display = 'none';
      svg.appendChild(hoverGuide);

      const formatUtilValue = point => {
        const value = utilizationMode === 'daily' ? point.utilization : point.cumulativeUtilization;
        return Number.isFinite(value) && value > 0 ? `${value.toFixed(1)}%` : '-';
      };

      const formatLmValue = point => {
        const value = utilizationMode === 'daily' ? point.drilledLm : point.cumulativeLm;
        return Number.isFinite(value) && value > 0 ? `${value.toFixed(1)} m` : '-';
      };

      const formatHoursValue = point => {
        const value = utilizationMode === 'daily' ? point.drillingHours : point.cumulativeHours;
        return Number.isFinite(value) && value > 0 ? `${value.toFixed(1)} hr` : '-';
      };
      const pointsForIndex = idx => series.map(item => ({ ...item.points[idx], color: item.color }));

      const showTooltip = (evt, dateKey, points, guideX) => {
        tooltipEl.innerHTML = `
          <div class="tooltip-title">${formatDateFullLabel(dateKey)}</div>
          ${points.map(point => `
            <div class="tooltip-row"><span style="color:${point.color}; font-weight:800;">${escapeHtml(point.rig)}</span><strong style="color:${point.color};">${formatUtilValue(point)}</strong></div>
            <div class="tooltip-row"><span style="color:${point.color};">Drilled Lm</span><strong style="color:${point.color};">${formatLmValue(point)}</strong></div>
            <div class="tooltip-row"><span style="color:${point.color};">Drilling Hr</span><strong style="color:${point.color};">${formatHoursValue(point)}</strong></div>
          `).join('')}
        `;
        tooltipEl.classList.add('visible');
        const tooltipX = Math.min(window.innerWidth - 260, evt.clientX + 14);
        const tooltipY = Math.min(window.innerHeight - 220, evt.clientY + 14);
        tooltipEl.style.left = `${Math.max(8, tooltipX)}px`;
        tooltipEl.style.top = `${Math.max(8, tooltipY)}px`;
        hoverGuide.setAttribute('x1', String(guideX));
        hoverGuide.setAttribute('x2', String(guideX));
        hoverGuide.style.display = 'block';
      };

      const hideTooltip = () => {
        tooltipEl.classList.remove('visible');
        hoverGuide.style.display = 'none';
      };

      const addGrid = (maxValue, yFor, suffix, areaBottom, fontSize) => {
        for (let i = 0; i <= 4; i += 1) {
          const value = (maxValue / 4) * i;
          const y = yFor(value);
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', String(left));
          line.setAttribute('x2', String(chartW - right));
          line.setAttribute('y1', String(y));
          line.setAttribute('y2', String(y));
          line.setAttribute('stroke', 'rgba(255,255,255,0.08)');
          line.setAttribute('stroke-width', '1');
          svg.appendChild(line);

        }
      };

      addGrid(utilMax, yForUtil, '%', topArea.y2, 12);
      addGrid(lmMax, yForLm, '', bottomArea.y2, 11);

      const divider = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      divider.setAttribute('x1', String(left));
      divider.setAttribute('x2', String(chartW - right));
        divider.setAttribute('y1', String(dividerY));
        divider.setAttribute('y2', String(dividerY));
      divider.setAttribute('stroke', 'rgba(255,255,255,0.14)');
      divider.setAttribute('stroke-width', '1');
      divider.setAttribute('stroke-dasharray', '4 6');
      svg.appendChild(divider);

      dates.forEach((dateKey, idx) => {
        const x = dates.length === 1 ? left + innerW / 2 : left + plotSidePad + stepX * idx;

        if (utilizationMode === 'daily' && idx < dates.length - 1) {
          const separatorX = x + stepX / 2;
          const separator = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          separator.setAttribute('x1', String(separatorX));
          separator.setAttribute('x2', String(separatorX));
          separator.setAttribute('y1', String(topArea.y1));
          separator.setAttribute('y2', String(bottomArea.y2));
          separator.setAttribute('stroke', 'rgba(255,255,255,0.18)');
          separator.setAttribute('stroke-width', '1');
          separator.setAttribute('stroke-dasharray', '4 8');
          svg.appendChild(separator);
        }

        const dateLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        dateLabel.setAttribute('x', String(x));
        dateLabel.setAttribute('y', String(chartH - 18));
        dateLabel.setAttribute('text-anchor', 'middle');
        dateLabel.setAttribute('fill', 'rgba(244,247,251,0.72)');
        dateLabel.setAttribute('font-size', '9');
        dateLabel.setAttribute('font-weight', '700');
        dateLabel.textContent = formatShortDateLabel(dateKey);
        svg.appendChild(dateLabel);

        const hover = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hover.setAttribute('x', String(x - Math.max(stepX / 2, 24)));
        hover.setAttribute('y', String(topArea.y1));
        hover.setAttribute('width', String(Math.max(stepX, 48)));
        hover.setAttribute('height', String(bottomArea.y2 - topArea.y1));
        hover.setAttribute('fill', 'transparent');
        hover.style.cursor = 'pointer';
        hover.addEventListener('mousemove', evt => showTooltip(evt, dateKey, pointsForIndex(idx), x));
        hover.addEventListener('mouseleave', hideTooltip);
        svg.appendChild(hover);
      });

      if (utilizationMode === 'daily') {
        const clusterWidth = Math.max(stepX * 0.64, rigCount * 16 + (rigCount - 1) * 4);
        const barGap = 4;
        const barW = Math.max(8, Math.min(15, (clusterWidth - barGap * (rigCount - 1)) / rigCount));

        series.forEach((item, rigIdx) => {
          item.points.forEach((point, idx) => {
            const baseX = dates.length === 1 ? left + innerW / 2 : left + plotSidePad + stepX * idx;
            const clusterStart = baseX - ((barW * rigCount + barGap * (rigCount - 1)) / 2);
            const x = clusterStart + rigIdx * (barW + barGap);

            const utilValue = point.utilization;
            if (Number.isFinite(utilValue) && utilValue > 0) {
              const utilY = yForUtil(utilValue);
              const utilBar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
              utilBar.setAttribute('x', String(x));
              utilBar.setAttribute('y', String(utilY));
              utilBar.setAttribute('width', String(barW));
              utilBar.setAttribute('height', String(Math.max(0, topArea.y2 - utilY)));
              utilBar.setAttribute('rx', '5');
              utilBar.setAttribute('fill', item.color);
              utilBar.setAttribute('fill-opacity', '0.86');
              utilBar.setAttribute('stroke', 'rgba(255,255,255,0.22)');
              utilBar.setAttribute('stroke-width', '1');
              utilBar.style.cursor = 'pointer';
              utilBar.addEventListener('mousemove', evt => showTooltip(evt, point.date, pointsForIndex(idx), baseX));
              utilBar.addEventListener('mouseleave', hideTooltip);
              svg.appendChild(utilBar);

              const utilLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              utilLabel.setAttribute('x', String(x + barW / 2));
              utilLabel.setAttribute('y', String(Math.max(topArea.y1 + 14, utilY - 10)));
              utilLabel.setAttribute('text-anchor', 'middle');
              utilLabel.setAttribute('fill', 'rgba(244,247,251,0.92)');
              utilLabel.setAttribute('font-size', '9');
              utilLabel.setAttribute('font-weight', '800');
              utilLabel.textContent = `${utilValue.toFixed(0)}%`;
              utilLabel.style.pointerEvents = 'none';
              svg.appendChild(utilLabel);
            } else if (Number.isFinite(utilValue)) {
              const zeroMark = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
              zeroMark.setAttribute('x', String(x));
              zeroMark.setAttribute('y', String(topArea.y2 - 3));
              zeroMark.setAttribute('width', String(barW));
              zeroMark.setAttribute('height', '3');
              zeroMark.setAttribute('rx', '2');
              zeroMark.setAttribute('fill', item.color);
              zeroMark.setAttribute('fill-opacity', '0.38');
              zeroMark.style.cursor = 'pointer';
              zeroMark.addEventListener('mousemove', evt => showTooltip(evt, point.date, pointsForIndex(idx), baseX));
              zeroMark.addEventListener('mouseleave', hideTooltip);
              svg.appendChild(zeroMark);
            }

            const lmValue = point.drilledLm;
            if (Number.isFinite(lmValue) && lmValue > 0) {
              const lmY = yForLm(lmValue);
              const lmBar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
              lmBar.setAttribute('x', String(x));
              lmBar.setAttribute('y', String(lmY));
              lmBar.setAttribute('width', String(barW));
              lmBar.setAttribute('height', String(Math.max(0, bottomArea.y2 - lmY)));
              lmBar.setAttribute('rx', '5');
              lmBar.setAttribute('fill', item.color);
              lmBar.setAttribute('fill-opacity', '0.78');
              lmBar.setAttribute('stroke', 'rgba(255,255,255,0.18)');
              lmBar.setAttribute('stroke-width', '1');
              lmBar.style.cursor = 'pointer';
              lmBar.addEventListener('mousemove', evt => showTooltip(evt, point.date, pointsForIndex(idx), baseX));
              lmBar.addEventListener('mouseleave', hideTooltip);
              svg.appendChild(lmBar);

              const lmLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              lmLabel.setAttribute('x', String(x + barW / 2));
              lmLabel.setAttribute('y', String(Math.max(bottomArea.y1 + 12, lmY - 8)));
              lmLabel.setAttribute('text-anchor', 'middle');
              lmLabel.setAttribute('fill', 'rgba(244,247,251,0.88)');
              lmLabel.setAttribute('font-size', '8');
              lmLabel.setAttribute('font-weight', '800');
              lmLabel.textContent = `${Math.round(lmValue)}m`;
              lmLabel.style.pointerEvents = 'none';
              svg.appendChild(lmLabel);
            } else if (Number.isFinite(lmValue)) {
              const zeroLmMark = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
              zeroLmMark.setAttribute('x', String(x));
              zeroLmMark.setAttribute('y', String(bottomArea.y2 - 3));
              zeroLmMark.setAttribute('width', String(barW));
              zeroLmMark.setAttribute('height', '3');
              zeroLmMark.setAttribute('rx', '2');
              zeroLmMark.setAttribute('fill', item.color);
              zeroLmMark.setAttribute('fill-opacity', '0.28');
              zeroLmMark.style.cursor = 'pointer';
              zeroLmMark.addEventListener('mousemove', evt => showTooltip(evt, point.date, pointsForIndex(idx), baseX));
              zeroLmMark.addEventListener('mouseleave', hideTooltip);
              svg.appendChild(zeroLmMark);
            }
          });
        });
      } else {
        series.forEach(item => {
          const utilPathParts = [];
          const lmPathParts = [];
          let utilStarted = false;
          let lmStarted = false;

          item.points.forEach((point, idx) => {
            const x = dates.length === 1 ? left + innerW / 2 : left + plotSidePad + stepX * idx;
            const utilValue = point.cumulativeUtilization;
            if (Number.isFinite(utilValue) && utilValue > 0) {
              utilPathParts.push(`${utilStarted ? 'L' : 'M'} ${x} ${yForUtil(utilValue)}`);
              utilStarted = true;
            }
            lmPathParts.push(`${lmStarted ? 'L' : 'M'} ${x} ${yForLm(point.cumulativeLm)}`);
            lmStarted = true;
          });

          if (utilPathParts.length) {
            const utilPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            utilPath.setAttribute('d', utilPathParts.join(' '));
            utilPath.setAttribute('fill', 'none');
            utilPath.setAttribute('stroke', item.color);
            utilPath.setAttribute('stroke-width', '3');
            utilPath.setAttribute('stroke-linecap', 'round');
            utilPath.setAttribute('stroke-linejoin', 'round');
            utilPath.setAttribute('opacity', '0.96');
            svg.appendChild(utilPath);
          }

          const lmPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          lmPath.setAttribute('d', lmPathParts.join(' '));
          lmPath.setAttribute('fill', 'none');
          lmPath.setAttribute('stroke', item.color);
          lmPath.setAttribute('stroke-width', '2.6');
          lmPath.setAttribute('stroke-linecap', 'round');
          lmPath.setAttribute('stroke-linejoin', 'round');
          lmPath.setAttribute('opacity', '0.95');
          svg.appendChild(lmPath);

          item.points.forEach((point, idx) => {
            const x = dates.length === 1 ? left + innerW / 2 : left + plotSidePad + stepX * idx;
            const utilValue = point.cumulativeUtilization;
            if (Number.isFinite(utilValue) && utilValue > 0) {
              const utilY = yForUtil(utilValue);
              const utilDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
              utilDot.setAttribute('cx', String(x));
              utilDot.setAttribute('cy', String(utilY));
              utilDot.setAttribute('r', '4.8');
              utilDot.setAttribute('fill', item.color);
              utilDot.setAttribute('stroke', 'rgba(255,255,255,0.9)');
              utilDot.setAttribute('stroke-width', '1.6');
              utilDot.style.cursor = 'pointer';
              utilDot.addEventListener('mousemove', evt => showTooltip(evt, point.date, pointsForIndex(idx), x));
              utilDot.addEventListener('mouseleave', hideTooltip);
              svg.appendChild(utilDot);

              const utilLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              utilLabel.setAttribute('x', String(x));
              utilLabel.setAttribute('y', String(Math.max(topArea.y1 + 14, utilY - 12)));
              utilLabel.setAttribute('text-anchor', 'middle');
              utilLabel.setAttribute('fill', 'rgba(244,247,251,0.92)');
              utilLabel.setAttribute('font-size', '9');
              utilLabel.setAttribute('font-weight', '800');
              utilLabel.textContent = `${utilValue.toFixed(0)}%`;
              utilLabel.style.pointerEvents = 'none';
              svg.appendChild(utilLabel);
            }

            if (Number.isFinite(point.cumulativeLm) && point.cumulativeLm > 0) {
              const lmY = yForLm(point.cumulativeLm);
              const lmDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
              lmDot.setAttribute('cx', String(x));
              lmDot.setAttribute('cy', String(lmY));
              lmDot.setAttribute('r', '4.2');
              lmDot.setAttribute('fill', item.color);
              lmDot.setAttribute('stroke', 'rgba(255,255,255,0.88)');
              lmDot.setAttribute('stroke-width', '1.4');
              lmDot.style.cursor = 'pointer';
              lmDot.addEventListener('mousemove', evt => showTooltip(evt, point.date, pointsForIndex(idx), x));
              lmDot.addEventListener('mouseleave', hideTooltip);
              svg.appendChild(lmDot);

              const lmLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              lmLabel.setAttribute('x', String(x));
              lmLabel.setAttribute('y', String(Math.max(bottomArea.y1 + 12, lmY - 10)));
              lmLabel.setAttribute('text-anchor', 'middle');
              lmLabel.setAttribute('fill', 'rgba(244,247,251,0.88)');
              lmLabel.setAttribute('font-size', '8');
              lmLabel.setAttribute('font-weight', '800');
              lmLabel.textContent = `${Math.round(point.cumulativeLm)}m`;
              lmLabel.style.pointerEvents = 'none';
              svg.appendChild(lmLabel);
            }
          });
        });
      }

      svg.onmouseleave = hideTooltip;

      if (els.utilizationChartWrap) {
        bindUtilizationUnifiedScroll();
        requestAnimationFrame(() => {
          const hasOverflow = els.utilizationChartWrap.scrollWidth > els.utilizationChartWrap.clientWidth + 4;
          els.utilizationChartWrap.scrollLeft = hasOverflow
            ? Math.max(0, els.utilizationChartWrap.scrollWidth - els.utilizationChartWrap.clientWidth)
            : 0;
        });
      }
    }

    function renderUtilizationPage(project) {
      const rows = getUtilizationRows(project);
      const dayGroups = getUtilizationDayGroups(rows);
      const { colors } = buildUtilizationSeries(rows, utilizationMode);
      syncUtilizationView();

      if (els.utilizationTableBody) {
        if (!rows.length) {
          els.utilizationTableBody.innerHTML = '<tr><td colspan="7" class="utilization-empty">No utilization data available for current scope.</td></tr>';
        } else {
          els.utilizationTableBody.innerHTML = dayGroups.map(group => group.items.map((row, idx) => {
            const utilClass = row.utilization >= 75 ? 'utilization-high' : (row.utilization >= 45 ? 'utilization-mid' : 'utilization-low');
            const totalClass = group.totalUtilization >= 75 ? 'utilization-high' : (group.totalUtilization >= 45 ? 'utilization-mid' : 'utilization-low');
            const rigColor = colors[row.rig] || '#8ef0bf';
            const rowPositionClass = idx === 0
              ? 'utilization-row-first'
              : (idx === group.items.length - 1 ? 'utilization-row-last' : 'utilization-row-mid');
            return `
              <tr class="${idx === 0 ? 'utilization-group-start' : ''} ${rowPositionClass}">
                ${idx === 0 ? `<td rowspan="${group.items.length}" class="utilization-date-cell"><div class="utilization-date-block"><span class="utilization-date-label">Day</span><strong>${formatDateFullLabel(group.date)}</strong><span class="utilization-date-meta">${group.items.length} rig${group.items.length === 1 ? '' : 's'}</span></div></td>` : ''}
                <td>
                  <span class="utilization-rig-chip">
                    <span class="utilization-rig-dot" style="background:${rigColor};"></span>
                    ${escapeHtml(row.rig)}
                  </span>
                </td>
                <td class="num">${row.drillingHours.toFixed(1)}</td>
                <td class="num">${row.drilledLm.toFixed(1)}</td>
                <td class="num">${row.shiftHours.toFixed(1)}</td>
                <td class="num ${utilClass}">${row.utilization.toFixed(1)}%</td>
                ${idx === 0 ? `<td rowspan="${group.items.length}" class="num ${totalClass} utilization-total-cell"><div class="utilization-total-block"><span class="utilization-total-label">Day Total</span><strong>${group.totalUtilization.toFixed(1)}%</strong></div></td>` : ''}
              </tr>
            `;
          }).join('')).join('');
        }
      }

      renderUtilizationCombinedChart(rows);
      if (utilizationView === 'timeline') {
        renderUtilizationTimelineBoard(project);
      }
    }

    function renderManpowerPage(project) {
      const rows = getFilteredManpowerRows(project);
      const equipmentRows = getProjectEquipmentDateRows(project);

      if (els.manpowerTableBody) {
        if (!rows.length) {
          els.manpowerTableBody.innerHTML = '<tr><td colspan="11" class="manpower-empty">No manpower data available for current scope.</td></tr>';
        } else {
          els.manpowerTableBody.innerHTML = rows.map(row => `
            <tr>
              <td>${formatDateFullLabel(row.date)}</td>
              <td class="num">${row.pm}</td>
              <td class="num">${row.se}</td>
              <td class="num">${row.foreman}</td>
              <td class="num">${row.op}</td>
              <td class="num">${row.vb}</td>
              <td class="num">${row.rig}</td>
              <td class="num">${row.we}</td>
              <td class="num">${row.me}</td>
              <td class="num">${row.hl}</td>
              <td class="num total-col">${row.total}</td>
            </tr>
          `).join('');
        }
      }

      renderManpowerHistogram(rows);

      if (els.equipmentTableBody) {
        if (!equipmentRows.length) {
          els.equipmentTableBody.innerHTML = '<tr><td colspan="3" class="manpower-empty">No equipment timeline available for current scope.</td></tr>';
        } else {
          els.equipmentTableBody.innerHTML = equipmentRows.slice().reverse().map(row => {
            const fleetHtml = row.activeItems.length
              ? `<div class="equipment-fleet-list">${row.activeItems.map(item => `
                  <span class="equipment-chip">
                    <span class="equipment-chip-dot equipment-chip-dot-${normalizeText(item.ownership).toLowerCase()}"></span>
                    <span class="equipment-ownership equipment-ownership-${normalizeText(item.ownership).toLowerCase()}">${escapeHtml(item.ownership)}</span>
                    <span class="equipment-type">${escapeHtml(item.type || item.category || '')}</span>
                    <span class="equipment-name">${escapeHtml(item.label)}</span>
                  </span>
                `).join('')}</div>`
              : '-';
            const summaryHtml = `
              <div class="equipment-summary-stack">
                <div class="equipment-summary-line"><span>Rigs</span><strong>${row.ownedRigs}</strong></div>
                <div class="equipment-summary-line"><span>Cranes</span><strong>${row.ownedCranes}</strong></div>
                <div class="equipment-summary-line"><span>Others</span><strong>${row.rentedEq}</strong></div>
              </div>
            `;
            return `
              <tr>
                <td>${formatDateFullLabel(row.date)}</td>
                <td class="equipment-fleet-cell">${fleetHtml}</td>
                <td class="equipment-summary-cell">${summaryHtml}</td>
              </tr>
            `;
          }).join('');
        }
      }

      renderEquipmentHistogram(equipmentRows);
    }

    async function signInWithDirectory(loginValue, passwordValue) {
      const matchedUser = findUserRecord(loginValue);
      if (!matchedUser) {
        throw new Error('User not found in the APFC users source');
      }
      if (passwordValue !== matchedUser.password) {
        throw new Error('Incorrect password');
      }
      return matchedUser;
    }

    function resetDashboardSessionUi() {
      currentUser = null;
      selectedProject = DEFAULT_PROJECT;
      selectedPlot = '';
      companyManpowerScopeMode = 'filtered';
      companyManpowerDesignationFilter = 'all';
      companyAnalyticsScopeMode = 'filtered';
      companyAnalyticsLayoutMode = 'overview';
      companyAnalyticsDesignationFilter = 'all';
      updateUserContextUi();
      setAuthLocked(true);
      toggleRequestAccessPanel(false);
      setRequestAccessError('');
      if (els.authRequestNameInput) els.authRequestNameInput.value = '';
      if (els.authRequestEmailInput) els.authRequestEmailInput.value = '';
    }

    async function submitSignIn() {
      const loginValue = normalizeText(els.authLoginInput?.value);
      const passwordValue = els.authPasswordInput?.value || '';
      if (!loginValue) {
        setAuthLocked(true, 'Enter your username or email.');
        els.authLoginInput?.focus();
        return;
      }
      if (!passwordValue) {
        setAuthLocked(true, 'Enter the temporary password.');
        els.authPasswordInput?.focus();
        return;
      }

      if (els.authSubmitBtn) {
        els.authSubmitBtn.disabled = true;
        els.authSubmitBtn.textContent = 'Signing In...';
      }

      try {
        const user = await signInWithDirectory(loginValue, passwordValue);
        applyUserSession(user);
        await loadDashboardData();
        updateTimelinePileList(selectedProject);
        syncTimelinePresetButtons();
        renderTimelinePage(selectedProject);
      } catch (err) {
        console.error(err);
        setAuthLocked(true, err.message || 'Unable to sign in.');
      } finally {
        if (els.authSubmitBtn) {
          els.authSubmitBtn.disabled = false;
          els.authSubmitBtn.textContent = 'Sign In';
        }
      }
    }

    async function restoreExistingSession() {
      const stored = getStoredAuthSession();
      if (!stored) {
        resetDashboardSessionUi();
        return false;
      }

      const matchedUser = usersDirectory.find(user => (
        normalizeLogin(user.username) === normalizeLogin(stored.username) &&
        normalizeText(user.project) === normalizeText(stored.project) &&
        normalizeText(user.plot) === normalizeText(stored.plot)
      ));

      if (!matchedUser) {
        resetDashboardSessionUi();
        setAuthLocked(true, 'Your secure session is no longer valid. Please reopen the dashboard from the APFC portal.');
        return false;
      }

      applyUserSession(matchedUser);
      return true;
    }

    async function initDashboard() {
      try {
        setAppLoading(true, 'Starting dashboard', 'Preparing secure session and loading access context.');
        bindMapFrameSync();
        bindExternalAuthBridge();
        await loadUsersDirectory();
        const hasSession = await tryApplyPendingExternalAuth() || await restoreExistingSession();

        if (hasSession) {
          await loadDashboardData();
        }

        if (els.projectSelector) {
          els.projectSelector.addEventListener('change', e => {
            if (!canSelectProjects()) return;
            selectedProject = e.target.value;
            selectedPlot = '';
            timelineState.pile = 'all';
            syncOverviewActivityMode(selectedProject);
            persistScopedSession();
            updateTimelinePileList(selectedProject);
            syncTimelinePresetButtons();
            renderDashboard(selectedProject);
            if (activePage === 'production') renderProductionPage(selectedProject, true);
            if (activePage === 'utilization') renderUtilizationPage(selectedProject);
            if (activePage === 'manpower') renderManpowerPage(selectedProject);
            if (activePage === 'companymanpower') renderCompanyManpowerPage(selectedProject);
            if (activePage === 'companyanalytics') renderCompanyAnalyticsPage(selectedProject);
            if (activePage === 'timeline') renderTimelinePage(selectedProject, true);
            if (activePage === 'cost') renderCostPage(selectedProject, true);
            broadcastAuthContext();
          });
        }

        if (els.overviewActivityButtons?.length) {
          els.overviewActivityButtons.forEach(btn => btn.addEventListener('click', () => {
            overviewActivityMode = btn.dataset.activity || 'piles';
            syncOverviewActivityMode(selectedProject);
            syncOverviewMetricButtons();
            renderDashboard(selectedProject);
          }));
        }

        if (els.refreshDashboardBtn) {
          els.refreshDashboardBtn.addEventListener('click', refreshDashboardData);
        }
        if (els.printMapPdfBtn) {
          els.printMapPdfBtn.addEventListener('click', triggerMapPrintLayout);
        }

        els.authForm?.addEventListener('submit', evt => {
          evt.preventDefault();
          submitSignIn();
        });

        els.authRequestAccessBtn?.addEventListener('click', () => {
          const shouldOpen = !!els.authRequestPanel?.hidden;
          toggleRequestAccessPanel(shouldOpen);
          if (shouldOpen) setRequestAccessError('');
          if (!shouldOpen && els.authError) els.authError.textContent = '';
        });

        els.authRequestPanel?.addEventListener('click', evt => {
          if (evt.target === els.authRequestPanel) toggleRequestAccessPanel(false);
        });

        els.authRequestCancelBtn?.addEventListener('click', () => {
          toggleRequestAccessPanel(false);
          setRequestAccessError('');
          if (els.authError) els.authError.textContent = '';
        });

        els.authRequestSendBtn?.addEventListener('click', () => {
          submitAccessRequest();
        });

        els.signOutBtn?.addEventListener('click', () => {
          applyUserSession(null);
          setAuthLocked(true);
          broadcastAuthContext();
          if (els.authPasswordInput) els.authPasswordInput.value = '';
          if (els.authRequestNameInput) els.authRequestNameInput.value = '';
          if (els.authRequestEmailInput) els.authRequestEmailInput.value = '';
          setRequestAccessError('');
          toggleRequestAccessPanel(false);
          if (els.authLoginInput) {
            els.authLoginInput.value = '';
            els.authLoginInput.focus();
          }
        });

        els.overviewDateModeButtons.forEach(btn => btn.addEventListener('click', () => {
          overviewDateMode = btn.dataset.mode;
          els.overviewDateModeButtons.forEach(b => b.classList.toggle('active', b.dataset.mode === overviewDateMode));
          renderDashboard(selectedProject);
          if (activePage === 'production') renderProductionPage(selectedProject);
          if (activePage === 'utilization') renderUtilizationPage(selectedProject);
          broadcastAuthContext();
        }));

        syncTopbarPageActions(activePage);

        els.granularityToggleButtons.forEach(btn => btn.addEventListener('click', () => setGranularity(btn.dataset.granularity)));
        document.getElementById('modeToggle').addEventListener('click', toggleMode);
        syncModeToggleUI();
        els.metricToggleButtons.forEach(btn => btn.addEventListener('click', () => setMetric(btn.dataset.metric)));

        els.navButtons.forEach(btn => {
          if (!btn.dataset.page) return;
          btn.addEventListener('click', () => setActivePage(btn.dataset.page));
        });

        els.prodToolButtons.forEach(btn => btn.addEventListener('click', () => {
          const key = btn.dataset.prodKey;
          const group = btn.dataset.group;
          prodState[key] = group;
          els.prodToolButtons
            .filter(b => b.dataset.prodKey === key)
            .forEach(b => b.classList.toggle('active', b.dataset.group === group));
          renderProductionMetricChart(selectedProject, key, true);
        }));

        els.utilizationModeButtons.forEach(btn => btn.addEventListener('click', () => {
          utilizationMode = btn.dataset.utilMode;
          els.utilizationModeButtons.forEach(b => b.classList.toggle('active', b.dataset.utilMode === utilizationMode));
          renderUtilizationPage(selectedProject);
        }));

        els.utilizationViewButtons.forEach(btn => btn.addEventListener('click', () => {
          utilizationView = btn.dataset.utilView || 'matrix';
          syncUtilizationView();
          if (utilizationView === 'timeline') {
            renderUtilizationTimelineBoard(selectedProject);
          } else {
            renderUtilizationPage(selectedProject);
          }
        }));

        els.companyManpowerLayoutSelect?.addEventListener('change', () => {
          renderCompanyManpowerPage(selectedProject);
        });

        els.companyManpowerDesignationSelect?.addEventListener('change', () => {
          companyManpowerDesignationFilter = els.companyManpowerDesignationSelect.value || 'all';
          renderCompanyManpowerPage(selectedProject);
        });

        els.companyManpowerScopeButtons.forEach(btn => btn.addEventListener('click', () => {
          companyManpowerScopeMode = btn.dataset.companyScope || 'filtered';
          els.companyManpowerScopeButtons.forEach(button => button.classList.toggle('active', button === btn));
          renderCompanyManpowerPage(selectedProject);
        }));

        els.companyAnalyticsDesignationSelect?.addEventListener('change', () => {
          companyAnalyticsDesignationFilter = els.companyAnalyticsDesignationSelect.value || 'all';
          renderCompanyAnalyticsPage(selectedProject);
        });

        els.companyAnalyticsLayoutButtons.forEach(btn => btn.addEventListener('click', () => {
          companyAnalyticsLayoutMode = btn.dataset.companyAnalyticsLayout || 'overview';
          if (companyAnalyticsLayoutMode === 'heatmap') {
            companyAnalyticsScopeMode = 'all';
          }
          els.companyAnalyticsLayoutButtons.forEach(button => button.classList.toggle('active', button === btn));
          renderCompanyAnalyticsPage(selectedProject);
        }));

        els.companyAnalyticsScopeButtons.forEach(btn => btn.addEventListener('click', () => {
          if (companyAnalyticsLayoutMode === 'heatmap' && btn.dataset.companyAnalyticsScope !== 'all') return;
          companyAnalyticsScopeMode = btn.dataset.companyAnalyticsScope || 'filtered';
          els.companyAnalyticsScopeButtons.forEach(button => button.classList.toggle('active', button === btn));
          renderCompanyAnalyticsPage(selectedProject);
        }));

        els.companyHeatmapExpandAllBtn?.addEventListener('click', () => {
          const employees = getAnalyticsCompanyEmployees(selectedProject);
          const subMapByDesignation = new Map();
          employees.forEach(item => {
            if (!item.designation) return;
            if (!subMapByDesignation.has(item.designation)) subMapByDesignation.set(item.designation, new Set());
            subMapByDesignation.get(item.designation).add(item.subDesignation || item.designation);
          });
          const expandableDesignations = Array.from(subMapByDesignation.entries())
            .filter(([, subSet]) => subSet.size > 0)
            .map(([designation]) => designation);
          const allExpanded = expandableDesignations.length > 0 && expandableDesignations.every(name => companyHeatmapExpandedDesignations.has(name));
          if (allExpanded) {
            companyHeatmapExpandedDesignations.clear();
          } else {
            expandableDesignations.forEach(name => companyHeatmapExpandedDesignations.add(name));
          }
          renderCompanyAnalyticsPage(selectedProject);
        });

        els.companyManpowerExportBtn?.addEventListener('click', () => {
          updateCompanyExportProjectOptions();
          toggleCompanyExportPanel(true);
        });

        els.companyExportCancelBtn?.addEventListener('click', () => {
          toggleCompanyExportPanel(false);
        });

        els.companyExportPanel?.addEventListener('click', evt => {
          if (evt.target === els.companyExportPanel) toggleCompanyExportPanel(false);
        });

        els.companyExportConfirmBtn?.addEventListener('click', () => {
          exportCompanyManpowerWorkbook(els.companyExportProjectSelect?.value || 'all');
          toggleCompanyExportPanel(false);
        });

        if (hasSession) {
          updateTimelinePileList(selectedProject);
          syncTimelinePresetButtons();
        }

        els.timelineApplyBtn?.addEventListener('click', () => {
          timelineState.start = els.timelineStartDate.value || '';
          timelineState.end = els.timelineEndDate.value || '';
          updateTimelinePileList(selectedProject);
          syncTimelinePresetButtons();
          renderTimelinePage(selectedProject);
        });

        els.timelineClearBtn?.addEventListener('click', () => {
          timelineState.start = '';
          timelineState.end = '';
          els.timelineStartDate.value = '';
          els.timelineEndDate.value = '';
          updateTimelinePileList(selectedProject);
          syncTimelinePresetButtons();
          renderTimelinePage(selectedProject);
        });

        els.timelinePreset7Btn?.addEventListener('click', () => applyTimelinePreset(7));
        els.timelinePreset14Btn?.addEventListener('click', () => applyTimelinePreset(14));
        els.timelinePreset30Btn?.addEventListener('click', () => applyTimelinePreset(30));

        els.timelinePileSearch?.addEventListener('input', () => {
          timelineState.pileSearch = els.timelinePileSearch.value || '';
          updateTimelinePileList(selectedProject);
        });

        els.timelineZoomInBtn?.addEventListener('click', () => {
          timelineState.zoom = Math.min(4, (timelineState.zoom || 1) * 1.2);
          renderTimelinePage(selectedProject);
        });

        els.timelineZoomOutBtn?.addEventListener('click', () => {
          timelineState.zoom = Math.max(0.5, (timelineState.zoom || 1) / 1.2);
          renderTimelinePage(selectedProject);
        });

        els.timelineZoomResetBtn?.addEventListener('click', () => {
          timelineState.zoom = 1;
          renderTimelinePage(selectedProject);
        });

        document.addEventListener('pointerdown', hideChartTooltipsOnOutsideInteraction);
        document.addEventListener('scroll', hideTooltip, true);
        window.addEventListener('resize', () => {
          if (!currentUser) return;
          renderDashboard(selectedProject);
        });

        if (!hasSession) {
          if (isEmbeddedDashboard()) {
            setAuthLocked(false);
            setAppLoading(true, 'Waiting for secure sign-in', 'Checking for your Power Pages session and dashboard access.');
            await wait(EXTERNAL_AUTH_GRACE_MS);
          }

        if (!currentUser) {
          setAppLoading(false);
          setAuthLocked(true);
        }
      }
      } catch (err) {
        console.error(err);
        setAppLoading(false);
        setAuthLocked(true, err.message || 'Unable to initialize secure access.');
        els.dataSourceChip.textContent = 'Source Error';
      }
    }

    initDashboard();

/* ==========================================================================
   MOBILE UI ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â hamburger drawer + timeline filter toggle
   Self-contained; runs after the app initialises.
   ========================================================================== */
(function initMobileUI() {
  const menuBtn     = document.getElementById('mobileActionsBtn');
  const topActions  = document.querySelector('.top-actions');
  const filterBtn   = document.getElementById('timelineFilterToggle');
  const tlSidebar   = document.querySelector('.timeline-sidebar');
  let drawerOverlay = document.querySelector('.mobile-drawer-overlay');

  if (!drawerOverlay) {
    drawerOverlay = document.createElement('button');
    drawerOverlay.type = 'button';
    drawerOverlay.className = 'mobile-drawer-overlay';
    drawerOverlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(drawerOverlay);
  }

  function closeMobileActionsMenu() {
    if (!topActions || !menuBtn) return;
    topActions.classList.remove('mobile-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-controls-open');
    drawerOverlay.classList.remove('visible');
  }

  /* -- Hamburger drawer --------------------------------------------------- */
  if (menuBtn && topActions) {
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = topActions.classList.toggle('mobile-open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('mobile-controls-open', isOpen);
      drawerOverlay.classList.toggle('visible', isOpen);
    });

    drawerOverlay.addEventListener('click', closeMobileActionsMenu);

    /* Close only when tapping completely outside the topbar area */
    document.addEventListener('click', function (e) {
      if (!e.target.closest('header.topbar') && !e.target.closest('.mobile-drawer-overlay')) {
        closeMobileActionsMenu();
      }
    });

    /* Close after a button action ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â but NOT for select/toggle elements
       so the project selector and mode toggle remain fully usable        */
    topActions.addEventListener('click', function (e) {
      const tag = e.target.tagName;
      const isInteractive = tag === 'SELECT' || tag === 'INPUT' ||
                            e.target.closest('.mode-toggle') ||
                            e.target.closest('.mode-switch');
      if (!isInteractive) {
        closeMobileActionsMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMobileActionsMenu();
    });
  }

  /* -- Timeline filter toggle --------------------------------------------- */
  if (filterBtn && tlSidebar) {
    filterBtn.addEventListener('click', function () {
      const isOpen = tlSidebar.classList.toggle('mobile-open');
      filterBtn.textContent = isOpen ? 'Hide Filters' : 'Show Filters';
      filterBtn.classList.toggle('is-open', isOpen);
    });
  }
})();








