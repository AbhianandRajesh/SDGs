export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  points: number; // 4 points each -> 20 points total for 5 questions
}

export interface Lesson {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  readTime: string;
  level: string;
  themeColor: string;
  badge: string;
  summary: string;
  sections: {
    title: string;
    content: string;
    keyPoints: string[];
    callout?: string;
  }[];
  interactiveGame: {
    type: 'thermostat' | 'drag-source' | 'hotspot-matcher' | 'clean-grid' | 'circular-economy';
    title: string;
    instructions: string;
  };
  quiz: QuizQuestion[];
}

export interface RewardCoupon {
  id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  minPoints: number;
  discountValue: string;
  validThrough: string;
  partner: string;
}

export const REWARD_COUPONS: RewardCoupon[] = [
  {
    id: 'eco-gear-25',
    code: 'CLIMATE-HERO-25',
    title: '25% Off Sustainable Living & Solar Kit',
    description: 'Redeemable on certified eco-friendly home energy kits, solar chargers, and zero-waste daily gear.',
    category: 'Eco Merchandise & Gear',
    minPoints: 50,
    discountValue: '25% OFF',
    validThrough: 'December 2027',
    partner: 'EcoAction Global Store'
  },
  {
    id: 'tree-cert-75',
    code: 'PLANT-TREE-EARTH',
    title: 'Plant 5 Native Trees in Your Name',
    description: 'An official reforestation certificate with GPS coordinates planted by global conservation partners.',
    category: 'Conservation Direct Action',
    minPoints: 75,
    discountValue: '5 TREES PLANTED',
    validThrough: 'Permanent Carbon Offset',
    partner: 'Green Earth Reforestation Alliance'
  },
  {
    id: 'pro-cert-90',
    code: 'VERDANT-PRO-100',
    title: '100% Free Verified Climate Literacy Certificate',
    description: 'Official digital credential verified by climate education mentors, suitable for LinkedIn and academic resumes.',
    category: 'Academic Credential',
    minPoints: 90,
    discountValue: '100% FREE ($120 Value)',
    validThrough: 'Lifetime Access',
    partner: 'Global Climate Science Institute'
  },
  {
    id: 'bonus-scholarship',
    code: 'EARTH-MASTER-50',
    title: '$50 Educational Scholarship & Climate Grant',
    description: 'Special high-achiever voucher for accredited environmental science courses and student workshops.',
    category: 'Mastery Honor Reward',
    minPoints: 105, // Attained with 80%+ bonus points!
    discountValue: '$50 CREDIT',
    validThrough: 'Valid for 18 Months',
    partner: 'Sustainable Future Endowment'
  }
];

export const LESSONS_DATA: Lesson[] = [
  // 1. Lesson 1: Spike in Global Temperature
  {
    id: 1,
    slug: 'spike-in-global-temperature',
    title: 'Lesson 1: Spike in Global Temperature',
    shortTitle: 'Global Temperature Spike',
    subtitle: 'Tracking thermal anomalies, pre-industrial baselines, and planetary energy imbalance.',
    readTime: '8 min read',
    level: 'Foundational',
    themeColor: '#087FCE',
    badge: 'Lesson 01',
    summary: 'The Earth is warming at an unprecedented rate in human history. Global mean surface temperatures have surged by +1.2°C to +1.3°C above pre-industrial levels, driven by the atmospheric buildup of heat-trapping greenhouse gases.',
    sections: [
      {
        title: '1. The Unprecedented Thermal Acceleration',
        content: 'Since the onset of the First Industrial Revolution (~1850), human industrial, energy, and transportation activities have steadily altered the chemical composition of the atmosphere. According to NASA GISS, NOAA, and the Copernicus Climate Change Service, the last decade has been the warmest on geological record. Nine of the top ten warmest years ever measured have occurred since 2014.',
        keyPoints: [
          'Global average temperatures have exceeded +1.2°C above the 1850–1900 baseline.',
          'Ocean heat content (OHC) in the upper 2,000 meters has shattered previous records consecutively.',
          'Arctic warming rate is approximately 3 to 4 times faster than the global planetary average (Arctic Amplification).'
        ],
        callout: 'Did you know? Even a fractional 0.5°C global increase represents an immense amount of stored energy—equivalent to billions of Hiroshima-sized atomic detonations absorbed into the oceans and atmosphere.'
      },
      {
        title: '2. Planetary Energy Imbalance (PEI)',
        content: 'The Earth remains in a state of positive radiative imbalance. Our planet is currently absorbing roughly 0.8 to 1.0 Watts per square meter more solar energy than it radiates back out into cold space. Over 90% of this surplus thermodynamic energy is absorbed directly into the world’s oceans, elevating sea surface temperatures and driving marine heatwaves.',
        keyPoints: [
          'Positive radiative forcing traps heat within the troposphere.',
          'The upper ocean acts as a massive thermal battery, postponing immediate terrestrial heating but causing long-term thermal inertia.',
          'Coral reef bleaching, thermal water expansion, and ice shelf melting are direct thermodynamic consequences.'
        ]
      }
    ],
    interactiveGame: {
      type: 'thermostat',
      title: 'Earth Energy Imbalance Thermostat Game',
      instructions: 'Adjust the global atmospheric greenhouse gas concentration slider to see how solar radiation retention and temperature anomaly escalate.'
    },
    quiz: [
      {
        id: 1,
        question: 'By approximately how much has the Earth’s average surface temperature increased compared to pre-industrial (1850–1900) levels?',
        options: [
          'A) Exactly 0.2°C',
          'B) Between +1.2°C and +1.3°C',
          'C) Over 5.5°C',
          'D) No measurable change has been recorded'
        ],
        correctAnswer: 1,
        explanation: 'Global surface temperature has risen by approximately +1.2°C to +1.3°C above pre-industrial averages, verified by NASA, NOAA, and the IPCC.',
        points: 4
      },
      {
        id: 2,
        question: 'Where is more than 90% of Earth’s surplus heat energy currently being absorbed?',
        options: [
          'A) In the world’s oceans',
          'B) In outer desert sands only',
          'C) In the stratosphere',
          'D) Directly in urban concrete buildings'
        ],
        correctAnswer: 0,
        explanation: 'The world’s oceans absorb more than 90% of the planetary excess heat energy, preventing immediate catastrophic atmospheric spikes but causing marine heatwaves and sea level rise.',
        points: 4
      },
      {
        id: 3,
        question: 'What is the phenomenon called where the Polar Arctic warms at triple or quadruple the global rate?',
        options: [
          'A) Polar Stagnation',
          'B) Arctic Amplification',
          'C) Equatorial Convergence',
          'D) Permafrost Freezing'
        ],
        correctAnswer: 1,
        explanation: 'Arctic Amplification occurs because reflective white sea ice melts, exposing dark seawater that absorbs more sunlight, creating a rapid feedback loop.',
        points: 4
      },
      {
        id: 4,
        question: 'Which international scientific consensus target aims to limit long-term global warming to prevent runaway tipping points?',
        options: [
          'A) 5.0°C Celsius limit',
          'B) 1.5°C (with a ceiling of 2.0°C) above pre-industrial levels',
          'C) Zero degrees Celsius total',
          'D) 10.0°C limit'
        ],
        correctAnswer: 1,
        explanation: 'The 2015 Paris Agreement established the international goal of keeping warming well below 2.0°C while pursuing strict efforts to limit it to 1.5°C.',
        points: 4
      },
      {
        id: 5,
        question: 'What happens to the global energy balance when Earth absorbs more solar energy than it radiates back into space?',
        options: [
          'A) Negative radiative forcing (cooling)',
          'B) Positive planetary energy imbalance (net warming)',
          'C) Total cessation of weather patterns',
          'D) Spontaneous cooling of the equator'
        ],
        correctAnswer: 1,
        explanation: 'A positive energy imbalance means incoming solar radiation exceeds outgoing infrared radiation, causing thermal accumulation and progressive global heating.',
        points: 4
      }
    ]
  },

  // 2. Lesson 1 Part 2 (Lesson 2): Causes and Factors Contributing to Temperature Spike
  {
    id: 2,
    slug: 'causes-and-factors-contributing-to-temperature-spike',
    title: 'Lesson 1, Part 2: Causes & Contributing Factors',
    shortTitle: 'Causes of Temperature Spike',
    subtitle: 'Analyzing greenhouse gas chemistry, industrial emissions, deforestation, and feedback mechanisms.',
    readTime: '9 min read',
    level: 'Core Science',
    themeColor: '#16A34A',
    badge: 'Lesson 02',
    summary: 'The primary drivers of the recent temperature spike stem from anthropogenic fossil fuel extraction and burning, industrial processes, agricultural livestock methane, and catastrophic destruction of natural carbon sinks.',
    sections: [
      {
        title: '1. The Major Greenhouse Gas Culprits',
        content: 'Different greenhouse gases possess different radiative efficiencies and atmospheric residence times. Carbon dioxide (CO2) remains in the air for centuries, while Methane (CH4) traps over 80 times more heat than CO2 over a 20-year horizon.',
        keyPoints: [
          'Carbon Dioxide (CO2): Accounts for ~76% of all greenhouse gas emissions, originating from coal, oil, and gas combustion.',
          'Methane (CH4): Responsible for ~16% of emissions, emitted from oil/gas leakage, coal mining, cattle ruminants, and decomposing organic waste.',
          'Nitrous Oxide (N2O): Originates from synthetic nitrogen fertilizers and industrial chemical processing.',
          'Fluorinated Gases (HFCs, PFCs): Ultra-potent synthetic coolants with global warming potentials thousands of times higher than CO2.'
        ]
      },
      {
        title: '2. Land-Use Changes, Deforestation & Albedo Reduction',
        content: 'Forests and tropical rainforests like the Amazon act as Earth’s primary terrestrial lungs, sequestering billions of tons of carbon. When forests are slashed, burned, or cleared for cattle ranching and soy plantations, the stored carbon is instantaneously vented into the sky while destroying future photosynthetic uptake capacity.',
        keyPoints: [
          'Deforestation contributes roughly 10% to 15% of net global emissions.',
          'Loss of vegetation increases local terrestrial surface temperatures and disrupts moisture recycling.',
          'Urban Heat Islands (UHI): Asphalt, tarmac, and concrete absorb solar thermal energy during the day and re-radiate it at night.'
        ]
      }
    ],
    interactiveGame: {
      type: 'drag-source',
      title: 'Emissions Source & Sector Sorting Game',
      instructions: 'Categorize emission activities (power generation, agriculture, transportation, deforestation) into their dominant greenhouse gas drivers.'
    },
    quiz: [
      {
        id: 1,
        question: 'Which gas accounts for the largest overall share (~76%) of global anthropogenic greenhouse gas emissions?',
        options: [
          'A) Carbon Dioxide (CO2)',
          'B) Argon (Ar)',
          'C) Pure Oxygen (O2)',
          'D) Helium (He)'
        ],
        correctAnswer: 0,
        explanation: 'Carbon dioxide (CO2) from fossil fuel combustion and industrial processes represents over three-quarters of all human-induced greenhouse emissions.',
        points: 4
      },
      {
        id: 2,
        question: 'Over a 20-year timeframe, how does Methane (CH4) compare to Carbon Dioxide in its heat-trapping potency?',
        options: [
          'A) It is 50% weaker than CO2',
          'B) It traps over 80 times more heat per molecule than CO2',
          'C) It has identical warming properties',
          'D) It actually cools the atmosphere'
        ],
        correctAnswer: 1,
        explanation: 'Methane is a short-lived but extremely potent climate pollutant, trapping over 80 times more heat than CO2 over a 20-year timescale.',
        points: 4
      },
      {
        id: 3,
        question: 'What is the primary way that large-scale deforestation accelerates global temperature rise?',
        options: [
          'A) It increases oxygen levels in the upper stratosphere',
          'B) It releases stored plant carbon and removes natural carbon-absorbing sinks',
          'C) It blocks sunlight from reaching the ground',
          'D) It lowers sea level rise'
        ],
        correctAnswer: 1,
        explanation: 'Trees store immense carbon stocks in their biomass and root soils. Felling and burning trees releases this carbon and eliminates future photosynthesis.',
        points: 4
      },
      {
        id: 4,
        question: 'Which sector is the single largest consumer of fossil fuels and emitter of greenhouse gases worldwide?',
        options: [
          'A) Residential cooking appliances',
          'B) Electricity and heat generation from coal, oil, and gas',
          'C) Bicycles and non-motorized transport',
          'D) High school laboratories'
        ],
        correctAnswer: 1,
        explanation: 'Electricity generation, heating, and heavy industrial power systems collectively burn the highest volume of coal, oil, and natural gas.',
        points: 4
      },
      {
        id: 5,
        question: 'What is the "Urban Heat Island" effect?',
        options: [
          'A) When city parks create tropical waterfalls',
          'B) When urban concrete, asphalt, and buildings absorb and retain heat, making cities significantly hotter than surrounding rural areas',
          'C) When cities drift closer to the equator',
          'D) A seasonal hurricane in downtown areas'
        ],
        correctAnswer: 1,
        explanation: 'Dense urban surfaces (asphalt roads, dark roofs, concrete) absorb solar radiation during daylight and slowly radiate heat at night, elevating urban temperatures by 2°C to 5°C.',
        points: 4
      }
    ]
  },

  // 3. Lesson 3: Affected Areas, Localities, and Frontline Vulnerabilities
  {
    id: 3,
    slug: 'affected-areas-localities-and-frontlines',
    title: 'Lesson 3: Affected Areas, Localities & Frontlines',
    shortTitle: 'Affected Areas & Hotspots',
    subtitle: 'Examining low-lying coastal zones, arid agricultural breadbaskets, equatorial mega-cities, and tipping points.',
    readTime: '9 min read',
    level: 'Geographic Analysis',
    themeColor: '#075985',
    badge: 'Lesson 03',
    summary: 'Climate disruption is not distributed evenly. Polar permafrost zones, Small Island Developing States (SIDS), sub-Saharan pastoral belts, and equatorial metropolitan centers face existential and compounding risks.',
    sections: [
      {
        title: '1. Small Island Developing States & Coastal Megacities',
        content: 'Low-lying archipelagos like Tuvalu, Kiribati, the Maldives, and the Marshall Islands sit barely 1.5 to 2 meters above sea level. Rising seas contaminate freshwater aquifers with saltwater intrusion, erode protective coastlines, and exacerbate tidal flooding.',
        keyPoints: [
          'Global sea levels are climbing at an accelerating rate of ~3.4 mm/year.',
          'Coastal megacities (e.g. Jakarta, Mumbai, Alexandria, Miami, Ho Chi Minh City) face massive flood defense retrofitting costs.',
          'Salinization renders coastal rice paddies and agricultural deltas infertile.'
        ]
      },
      {
        title: '2. The Sahel, Mediterranean, and Agricultural Breadbaskets',
        content: 'The African Sahel and the Mediterranean Basin have become terrestrial climate hotspots. Unprecedented heat domes exceed 45°C, desiccating soils, intensifying wildfires in Greece and California, and triggering severe water rationing.',
        keyPoints: [
          'The Mediterranean region is warming 20% faster than the global mean average.',
          'Sub-Saharan Africa experiences compounding droughts and flash flooding, displacing rural farming families.',
          'Wet-bulb temperatures above 35°C in South Asia threaten human physiological heat tolerance without mechanical cooling.'
        ]
      }
    ],
    interactiveGame: {
      type: 'hotspot-matcher',
      title: 'Global Vulnerability Matcher Game',
      instructions: 'Match each affected geographic region with its primary ecological threat: coastal inundation, permafrost collapse, or extreme wet-bulb heat.'
    },
    quiz: [
      {
        id: 1,
        question: 'Why are Small Island Developing States (SIDS) like the Maldives and Tuvalu considered on the frontline of climate risk?',
        options: [
          'A) They have too many mountains causing landslides',
          'B) They have very low elevation (1 to 2 meters above sea level) and face existential coastal erosion and salinization',
          'C) They are located inside active volcanoes',
          'D) They do not receive any solar energy'
        ],
        correctAnswer: 1,
        explanation: 'Low-lying islands sit just above sea level, making them extremely susceptible to rising sea levels, storm surges, and saltwater contamination of drinking water.',
        points: 4
      },
      {
        id: 2,
        question: 'What is dangerous about a "Wet-Bulb Temperature" exceeding 35°C (95°F at 100% humidity)?',
        options: [
          'A) It freezes water pipes instantly',
          'B) The human body can no longer cool itself through sweating, leading to fatal heat stroke within hours',
          'C) It only harms car engines',
          'D) It stops internet signals from traveling'
        ],
        correctAnswer: 1,
        explanation: 'At high wet-bulb temperatures, air is so warm and saturated with moisture that human sweat cannot evaporate, preventing internal temperature regulation and threatening survival.',
        points: 4
      },
      {
        id: 3,
        question: 'Which factor causes sea levels to rise globally as planetary temperatures increase?',
        options: [
          'A) Thermal expansion of warming ocean water AND melting land ice sheets and glaciers',
          'B) More boats sailing in the oceans',
          'C) Rain falling only into the ocean and never on land',
          'D) Underwater coral reefs growing too tall'
        ],
        correctAnswer: 0,
        explanation: 'Thermal expansion (warm water takes up more physical volume) combined with runoff from melting glaciers and the Greenland/Antarctic ice sheets drives sea level rise.',
        points: 4
      },
      {
        id: 4,
        question: 'How is the Mediterranean Basin warming relative to the worldwide global average?',
        options: [
          'A) It is actually cooling rapidly',
          'B) It is warming roughly 20% faster than the global average, driving chronic heatwaves and wildfire risks',
          'C) Exactly identical to Antarctica',
          'D) It experiences zero temperature shifts'
        ],
        correctAnswer: 1,
        explanation: 'The Mediterranean Basin is an recognized climate hotspot warming 20% faster than global averages, resulting in intense droughts and forest fires.',
        points: 4
      },
      {
        id: 5,
        question: 'What ecological disaster occurs when prolonged marine heatwaves strike tropical coral reefs?',
        options: [
          'A) Corals grow 10 times faster',
          'B) Mass coral bleaching, where corals expel their vital symbiotic algae and starve',
          'C) Coral reefs turn into freshwater lakes',
          'D) Corals produce excessive fresh fruit'
        ],
        correctAnswer: 1,
        explanation: 'Under thermal stress, corals expel their symbiotic zooxanthellae algae, turning white and frequently dying, destroying nurseries for 25% of all marine species.',
        points: 4
      }
    ]
  },

  // 4. Lesson 4: Measures Needed to Be Taken Against It
  {
    id: 4,
    slug: 'measures-needed-to-be-taken-against-it',
    title: 'Lesson 4: Measures Needed to Be Taken Against It',
    shortTitle: 'Essential Action Measures',
    subtitle: 'Strategic blueprints: Rapid grid decarbonization, energy efficiency, circular infrastructure, and nature-based solutions.',
    readTime: '10 min read',
    level: 'Strategic Frameworks',
    themeColor: '#16A34A',
    badge: 'Lesson 04',
    summary: 'Overcoming the climate crisis requires an immediate and coordinated transition: tripling global renewable energy capacity, electrifying transportation, deploying battery storage, and regenerating natural forests and wetlands.',
    sections: [
      {
        title: '1. The Decarbonization Roadmap: Tripling Clean Power by 2030',
        content: 'At COP28, over 130 nations agreed to triple global renewable capacity by 2030 and double the annual rate of energy efficiency improvements. Solar photovoltaic and onshore wind have achieved grid parity, making them cheaper than building new coal or gas infrastructure in nearly all major economies.',
        keyPoints: [
          'Solar and wind power costs have plummeted by 85% and 60% respectively over the past decade.',
          'Grid-scale Battery Energy Storage Systems (BESS) smooth intermittent solar and wind dispatch.',
          'Electrification of passenger vehicles, buses, and light rail replaces fossil fuel combustion.'
        ]
      },
      {
        title: '2. Nature-Based Solutions (NbS) & Carbon Removal',
        content: 'Technology alone cannot solve ecological degradation. Nature-based solutions (mangrove restoration, peatland re-wetting, regenerative agroforestry) absorb and lock away billions of tons of CO2 while providing natural buffers against cyclones and coastal flooding.',
        keyPoints: [
          'Coastal mangroves sequester up to 4 times more carbon per hectare than terrestrial tropical rainforests.',
          'Protecting intact peatlands prevents massive stored subterranean carbon releases.',
          'Permeable urban pavements and green rooftops mitigate urban heat island severity.'
        ]
      }
    ],
    interactiveGame: {
      type: 'clean-grid',
      title: 'Decarbonized City Grid Simulator',
      instructions: 'Balance solar, wind, and battery storage to power a metropolitan city with 100% clean, zero-fossil electricity 24 hours a day.'
    },
    quiz: [
      {
        id: 1,
        question: 'Which energy sources have seen cost reductions of 60% to 85% over the past decade, making them cheaper than fossil fuels in most regions?',
        options: [
          'A) Coal mining and bunker oil',
          'B) Solar photovoltaic (PV) and utility-scale wind power',
          'C) Kerosene lamps',
          'D) Peat burning'
        ],
        correctAnswer: 1,
        explanation: 'Technological innovations and manufacturing economies of scale have caused solar PV and wind power costs to plummet by 85% and 60% respectively.',
        points: 4
      },
      {
        id: 2,
        question: 'Why are coastal mangrove forests considered high-value "Nature-Based Solutions"?',
        options: [
          'A) They emit large amounts of methane gas',
          'B) They sequester up to 4 times more carbon per hectare than tropical rainforests and buffer coastlines against storm surges',
          'C) They absorb all tidal water permanently',
          'D) They prevent fish from swimming'
        ],
        correctAnswer: 1,
        explanation: 'Mangroves store vast amounts of blue carbon in their deep soils and their complex root systems attenuate destructive storm waves.',
        points: 4
      },
      {
        id: 3,
        question: 'What is the role of Battery Energy Storage Systems (BESS) in modern clean electrical grids?',
        options: [
          'A) They burn diesel fuel during windy nights',
          'B) They store surplus renewable energy generated during sunny or windy hours and dispatch it when demand peaks',
          'C) They create solar radiation from darkness',
          'D) They only power pocket flashlights'
        ],
        correctAnswer: 1,
        explanation: 'Utility battery systems absorb excess clean power during sunny or windy periods and inject it back into the grid on calm evenings, stabilizing supply.',
        points: 4
      },
      {
        id: 4,
        question: 'What is the international target set at COP28 regarding clean renewable electricity by 2030?',
        options: [
          'A) Reduce clean energy by 50%',
          'B) Triple global renewable energy capacity by 2030',
          'C) Stop all solar installations',
          'D) Maintain the status quo without change'
        ],
        correctAnswer: 1,
        explanation: 'The COP28 consensus established a benchmark to triple renewable energy capacity worldwide by 2030 to keep the 1.5°C threshold achievable.',
        points: 4
      },
      {
        id: 5,
        question: 'How do green rooftops and permeable urban infrastructure help reduce city heat spikes?',
        options: [
          'A) By reflecting heat, providing plant evapotranspiration cooling, and letting rainwater absorb naturally into the soil',
          'B) By blocking wind from entering cities',
          'C) By trapping steam in office basements',
          'D) By painting every street black'
        ],
        correctAnswer: 0,
        explanation: 'Vegetated roofs and permeable pavements cool metropolitan centers through plant moisture evapotranspiration and reduce radiant solar absorption.',
        points: 4
      }
    ]
  },

  // 5. Lesson 5: Material, Economic and Sustainable Measures
  {
    id: 5,
    slug: 'material-economic-and-sustainable-measures',
    title: 'Lesson 5: Material, Economic & Sustainable Measures',
    shortTitle: 'Economic & Material Solutions',
    subtitle: 'Circular supply chains, low-carbon concrete, green bonds, carbon border adjustments, and civic contributions.',
    readTime: '11 min read',
    level: 'Advanced Systems',
    themeColor: '#087FCE',
    badge: 'Lesson 05',
    summary: 'True climate stability requires overhauling economic models and material manufacturing: replacing high-emission Portland cement and steel, adopting circular product lifecycles, and enacting transparent carbon pricing mechanisms.',
    sections: [
      {
        title: '1. Material Innovation: Steel, Cement, and Embodied Carbon',
        content: 'Cement and steel production alone generate roughly 14% to 16% of total global carbon emissions. Decarbonizing heavy industry demands green hydrogen direct reduction for steelmaking and novel calcined-clay limestone cements that eliminate up to 80% of process emissions.',
        keyPoints: [
          'Green Hydrogen (produced via renewable water electrolysis) replaces metallurgical coking coal in steel furnaces.',
          'Bio-composite building materials and mass timber sequester carbon inside long-lived architectural structures.',
          'Embodied carbon auditing ensures new infrastructure is engineered with net-zero lifecycle principles.'
        ]
      },
      {
        title: '2. Economic Instruments, Carbon Pricing & Individual Stewardship',
        content: 'Economic frameworks are shifting from linear "take-make-waste" extraction to regenerative circular economies. Carbon taxes, emissions trading systems (ETS), and green bond markets ensure that environmental externalities are quantified and paid for by polluters.',
        keyPoints: [
          'Carbon Border Adjustment Mechanisms (CBAM) prevent carbon leakage to unregulated jurisdictions.',
          'Corporate ESG disclosure regulations penalize misleading greenwashing and mandate supply chain transparency.',
          'Individual and community power: dietary shifts towards plant-rich meals, energy conservation, civic advocacy, and conscious consumerism.'
        ]
      }
    ],
    interactiveGame: {
      type: 'circular-economy',
      title: 'Circular Economy Material Loop Challenge',
      instructions: 'Reroute industrial raw materials and post-consumer waste into continuous circular recycling loops instead of landfill dumps.'
    },
    quiz: [
      {
        id: 1,
        question: 'Together, cement and steel production account for approximately what fraction of worldwide carbon emissions?',
        options: [
          'A) Less than 0.1%',
          'B) Roughly 14% to 16% of total global emissions',
          'C) 95% of everything',
          'D) Exactly zero emissions'
        ],
        correctAnswer: 1,
        explanation: 'Heavy industry materials—especially conventional steel and Portland cement—are responsible for roughly 14% to 16% of annual global greenhouse gas emissions.',
        points: 4
      },
      {
        id: 2,
        question: 'What is a "Circular Economy"?',
        options: [
          'A) An economy where everything travels in round trucks',
          'B) An economic model designed to eliminate waste and pollution by keeping products and materials in continuous high-value use',
          'C) Buying single-use plastic goods on repeat',
          'D) Dumping all electronics in rivers'
        ],
        correctAnswer: 1,
        explanation: 'A circular economy decouples economic activity from the consumption of finite resources, designing out waste, sharing, repairing, and recycling indefinitely.',
        points: 4
      },
      {
        id: 3,
        question: 'How can "Green Hydrogen" eliminate emissions from primary steel manufacturing?',
        options: [
          'A) It acts as a chemical reducing agent instead of coal, with water vapor as the only byproduct',
          'B) It paints the finished steel green',
          'C) It turns steel into plastic',
          'D) It dissolves iron ore completely'
        ],
        correctAnswer: 0,
        explanation: 'Using green hydrogen produced via renewable electrolysis to reduce iron ore completely replaces fossil coking coal, emitting pure water vapor rather than carbon dioxide.',
        points: 4
      },
      {
        id: 4,
        question: 'What does a Carbon Border Adjustment Mechanism (CBAM) do?',
        options: [
          'A) It bans all international trade between countries',
          'B) It levies a carbon fee on imported goods from countries with lax climate standards to prevent "carbon leakage"',
          'C) It requires passports to be made of charcoal',
          'D) It builds physical walls across continents'
        ],
        correctAnswer: 1,
        explanation: 'CBAM levels the economic playing field by applying a carbon price to carbon-intensive imports, encouraging exporting countries to decarbonize their industries.',
        points: 4
      },
      {
        id: 5,
        question: 'Which of the following represents an impactful individual and community contribution to climate action?',
        options: [
          'A) Leaving all home heaters and lights on constantly',
          'B) Adopting energy efficiency, reducing food waste, utilizing public transit, and advocating for municipal renewable policies',
          'C) Burning garden leaves and plastics in backyard barrels',
          'D) Buying non-repairable single-use electronics every month'
        ],
        correctAnswer: 1,
        explanation: 'Collective lifestyle modifications—reducing household energy, prioritizing plant-rich diets, reducing food waste, and demanding civic renewable transition—create immense cumulative change.',
        points: 4
      }
    ]
  },

  // 6. Lesson 6: Bibliography, Research Citations & Certificate
  {
    id: 6,
    slug: 'bibliography-and-academic-citations',
    title: 'Lesson 6: Bibliography & Research Citations',
    shortTitle: 'Bibliography & Rewards',
    subtitle: 'Peer-reviewed climate references, international repositories, open datasets, and reward redemption.',
    readTime: '6 min read',
    level: 'Reference & Certification',
    themeColor: '#075985',
    badge: 'Lesson 06',
    summary: 'All telemetry, temperature anomalies, and sustainability data throughout this course are synthesized from verified peer-reviewed scientific institutions, including the IPCC, NASA, NOAA, WMO, and UNEP.',
    sections: [
      {
        title: '1. Peer-Reviewed Academic & Institutional Citations',
        content: 'This curriculum is grounded in primary scientific research and real-time planetary observations.',
        keyPoints: [
          'IPCC (2023): Sixth Assessment Report (AR6) - Climate Change 2023: Synthesis Report. Cambridge University Press.',
          'NASA Goddard Institute for Space Studies (GISS): Global Surface Temperature Analysis (GISTEMP v4). Data repository.',
          'NOAA National Centers for Environmental Information: State of the Climate: Global Climate Report.',
          'World Meteorological Organization (WMO): State of the Global Climate Annual Reports.',
          'UNEP (2023): The Emissions Gap Report 2023: Broken Record – Temperatures hit new highs, yet world fails to cut emissions.',
          'International Energy Agency (IEA): World Energy Outlook & Net Zero Roadmap by 2050 (2023 Update).'
        ]
      },
      {
        title: '2. Open Earth Data Telemetry & Satellite Sensor Repositories',
        content: 'Learners can inspect real-time raw satellite telemetry using these open tools:',
        keyPoints: [
          'Copernicus Climate Data Store (CDS) - ERA5 global atmospheric reanalysis.',
          'NASA Earthdata & Giovanni - Remote sensing geophysical parameter visualization.',
          'Global Carbon Project (GCP) - Global Carbon Budget annual datasets.',
          'Our World in Data - CO2 and Greenhouse Gas Emissions interactive database.'
        ]
      }
    ],
    interactiveGame: {
      type: 'thermostat',
      title: 'Congratulations on Completing the Course Curriculum!',
      instructions: 'You have verified all scientific research citations. Proceed below to redeem your coupons and claim your Certificate of Climate Literacy!'
    },
    quiz: [] // Lesson 6 is the conclusion / certificate & reward redemption hub!
  }
];
