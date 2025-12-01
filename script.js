// Translation data
const translations = {
    ja: {
        nav: {
            resume: '履歴書'
        },
        hero: {
            utokyo: '東京大学 松尾研 GCI講座修了',
            mba: '立教大学 MBA 在学中',
            years: 'years',
            languages: 'languages',
            viewProjects: 'プロジェクトを見る',
            about: 'About'
        },
        skills: {
            title: '技術スタック'
        },
        projects: {
            title: 'プロジェクト',
            ds: {
                title: 'AI & Data Science',
                utokyo: {
                    title: '東京大学 松尾研 機械学習プロジェクト群',
                    desc: 'データサイエンスGCI講座にて3つの実戦プロジェクトを完遂。タイタニック号生存予測でKaggle Top 3%達成。NFL Draft予測、従業員離職分析からHR戦略提案まで実施。',
                    result1: 'Kaggle Top 3%達成',
                    result2: '完全なMLパイプライン構築',
                    result3: 'ビジネス戦略への応用'
                },
                rag: {
                    title: '医療RAGシステム PoC',
                    desc: 'AWS Bedrock (Claude API) とOpenSearchを活用した医療カルテの知的検索システム。保険金額の自動計算機能を実装し、RAGアーキテクチャの実用性を検証。',
                    result1: '医療文書の知的検索実現',
                    result2: '保険計算プロセス自動化',
                    result3: '生成AI医療分野への応用'
                }
            },
            backend: {
                title: 'Backend Engineering',
                marathon: {
                    title: 'マイクロサービス動画処理システム',
                    desc: '上海国際マラソン向けに2万人の参加者動画を生成する大規模システムを開発。Molecular.jsによるマイクロサービス設計、Kubernetesによる負荷分散、Redisキューによる最適化を実装。',
                    result1: '2万人動画生成ゼロ障害',
                    result2: 'タスク1/1000圧縮アルゴリズム',
                    result3: 'マイクロサービス高可用性'
                },
                kyc: {
                    title: 'KYC デジタル化システム',
                    desc: '外国為替事業者向けCRMシステムのKYCプロセスを完全デジタル化。書類提出から審査までの自動記録化、PDF自動生成機能を実装し、顧客企業の新規ユーザー獲得率を大幅改善。',
                    result1: '月間新規ユーザー 2-3倍増',
                    result2: '審査プロセス90%自動化',
                    result3: 'マルチテナント対応'
                },
                medical: {
                    title: '医療系システム認証 & 最適化',
                    desc: '公衆衛生システムにTOTP二段階認証を導入し、セキュリティを強化。ファイル共有管理モジュールの開発、SQL最適化によりデータ処理速度を30%向上。',
                    result1: '二段階認証実装',
                    result2: '処理速度30%向上',
                    result3: 'セキュリティ強化'
                },
                sns: {
                    title: 'SNS チャットルーム & AWS最適化',
                    desc: '株式トレーダー向けSNSプラットフォームのチャットルームモジュールを開発。AWS Lambdaを活用したDirty Wordフィルタリングで処理速度を50%改善。',
                    result1: '処理時間50%削減',
                    result2: '高負荷時の安定性向上',
                    result3: 'Serverless最適化'
                }
            }
        },
        experience: {
            title: '職務経歴',
            r102: {
                location: '東京',
                role: 'ソフトウェアエンジニア (アルバイト)',
                achievement1: '医療RAGシステムPoC開発',
                achievement2: 'TOTP二段階認証実装',
                achievement3: 'データ処理速度30%向上'
            },
            kangaroo: {
                location: '上海、中国',
                role: 'バックエンドエンジニア',
                achievement1: '外国為替CRMシステム開発',
                achievement2: 'KYCプロセス完全デジタル化',
                achievement3: '月間新規ユーザー2-3倍増加'
            },
            anystreaming: {
                location: '上海、中国',
                role: 'バックエンドエンジニア',
                achievement1: 'メディア向け動画処理システム開発',
                achievement2: '上海国際マラソン 2万人動画生成',
                achievement3: 'マイクロサービス設計実装'
            },
            nirvana: {
                location: '上海、中国',
                role: 'バックエンドエンジニア',
                achievement1: 'SNSプラットフォーム開発',
                achievement2: 'AWS Lambda性能最適化',
                achievement3: '処理速度50%向上'
            }
        },
        about: {
            title: 'About',
            positioning: {
                title: 'ポジショニング',
                text: 'Backend Engineer × Data Scientist × MBA<br>技術実装力 + データ分析力 + ビジネス視点'
            },
            education: {
                title: '学歴',
                rikkyo: '立教大学 ビジネスデザイン研究科 (MBA)',
                utokyo: '東京大学 松尾研究室 データサイエンスGCI講座修了',
                xiamen: '厦門大学 コンピュータサイエンス (工学学士)'
            },
            strengths: {
                title: 'コア競争力',
                backend: '6年のバックエンド開発経験 (金融/メディア/医療)',
                ai: 'AI & データサイエンス (東大松尾研修了)',
                architecture: 'マイクロサービス設計 & 高並行処理',
                business: 'MBA ビジネス思考 (立教大学)'
            },
            languages: {
                title: '言語能力',
                japanese: '日本語',
                english: '英語',
                chinese: '中国語',
                native: '母語'
            },
            achievements: {
                title: '主な実績',
                kyc: 'KYC ユーザー増加',
                marathon: '動画生成ゼロ障害',
                performance: '性能向上'
            },
            advantages: {
                title: '差別化優位性',
                triple: {
                    title: 'トリプルスキル',
                    desc: 'Backend開発 + データサイエンス + MBA'
                },
                utokyo: {
                    title: '東大松尾研修了',
                    desc: '日本トップレベルのAI教育'
                },
                experience: {
                    title: '実戦経験豊富',
                    desc: '6年エンジニアリング + 実際のAIシステム開発'
                },
                multicultural: {
                    title: '多言語・多文化',
                    desc: '日本語N1, TOEIC 825, 母語中国語 / 上海+東京勤務'
                }
            }
        },
        footer: {
            location: 'Location:',
            tokyo: '東京、日本'
        }
    },
    en: {
        nav: {
            resume: 'Resume'
        },
        hero: {
            utokyo: 'U-Tokyo Matsuo Lab GCI Program Graduate',
            mba: 'MBA Student at Rikkyo University',
            years: 'years',
            languages: 'languages',
            viewProjects: 'View Projects',
            about: 'About'
        },
        skills: {
            title: 'Tech Stack'
        },
        projects: {
            title: 'Projects',
            ds: {
                title: 'AI & Data Science',
                utokyo: {
                    title: 'U-Tokyo Matsuo Lab Machine Learning Projects',
                    desc: 'Completed 3 practical projects in Data Science GCI program. Achieved Kaggle Top 3% in Titanic survival prediction, NFL Draft prediction, and employee turnover analysis with strategic HR recommendations.',
                    result1: 'Kaggle Top 3% Achievement',
                    result2: 'Complete ML Pipeline',
                    result3: 'Business Strategy Application'
                },
                rag: {
                    title: 'Medical RAG System PoC',
                    desc: 'Intelligent medical record search system using AWS Bedrock (Claude API) and OpenSearch. Implemented automatic insurance calculation and validated RAG architecture for practical use.',
                    result1: 'Intelligent Medical Document Search',
                    result2: 'Automated Insurance Calculation',
                    result3: 'Generative AI in Healthcare'
                }
            },
            backend: {
                title: 'Backend Engineering',
                marathon: {
                    title: 'Microservices Video Processing System',
                    desc: 'Developed large-scale system generating videos for 20,000 participants at Shanghai International Marathon. Implemented microservices design with Molecular.js, Kubernetes load balancing, and Redis queue optimization.',
                    result1: '20K Videos Zero Downtime',
                    result2: 'Task Compression 1/1000',
                    result3: 'Microservices High Availability'
                },
                kyc: {
                    title: 'KYC Digitalization System',
                    desc: 'Fully digitalized KYC process for FX CRM system. Implemented automatic recording from document submission to review, PDF auto-generation, significantly improving client onboarding rates.',
                    result1: 'Monthly Users 2-3x Growth',
                    result2: '90% Automation of Review Process',
                    result3: 'Multi-tenant Support'
                },
                medical: {
                    title: 'Medical System Auth & Optimization',
                    desc: 'Implemented TOTP two-factor authentication for public health system, enhancing security. Developed file sharing management module and improved data processing speed by 30% through SQL optimization.',
                    result1: 'Two-Factor Auth Implementation',
                    result2: '30% Processing Speed Improvement',
                    result3: 'Security Enhancement'
                },
                sns: {
                    title: 'SNS Chat & AWS Optimization',
                    desc: 'Developed chat module for stock trader SNS platform. Improved processing speed by 50% using AWS Lambda for dirty word filtering.',
                    result1: '50% Processing Time Reduction',
                    result2: 'Stability Under High Load',
                    result3: 'Serverless Optimization'
                }
            }
        },
        experience: {
            title: 'Work Experience',
            r102: {
                location: 'Tokyo',
                role: 'Software Engineer (Part-time)',
                achievement1: 'Medical RAG System PoC Development',
                achievement2: 'TOTP Two-Factor Auth Implementation',
                achievement3: '30% Data Processing Speed Improvement'
            },
            kangaroo: {
                location: 'Shanghai, China',
                role: 'Backend Engineer',
                achievement1: 'FX CRM System Development',
                achievement2: 'Complete KYC Process Digitalization',
                achievement3: '2-3x Monthly New User Growth'
            },
            anystreaming: {
                location: 'Shanghai, China',
                role: 'Backend Engineer',
                achievement1: 'Media Video Processing System',
                achievement2: 'Shanghai Marathon 20K Videos',
                achievement3: 'Microservices Architecture'
            },
            nirvana: {
                location: 'Shanghai, China',
                role: 'Backend Engineer',
                achievement1: 'SNS Platform Development',
                achievement2: 'AWS Lambda Performance Optimization',
                achievement3: '50% Processing Speed Improvement'
            }
        },
        about: {
            title: 'About',
            positioning: {
                title: 'Positioning',
                text: 'Backend Engineer × Data Scientist × MBA<br>Technical Implementation + Data Analysis + Business Perspective'
            },
            education: {
                title: 'Education',
                rikkyo: 'Rikkyo University, Business Design (MBA)',
                utokyo: 'University of Tokyo, Matsuo Lab Data Science GCI Program',
                xiamen: 'Xiamen University, Computer Science (B.Eng.)'
            },
            strengths: {
                title: 'Core Competencies',
                backend: '6 years backend development (Finance/Media/Healthcare)',
                ai: 'AI & Data Science (U-Tokyo Matsuo Lab Graduate)',
                architecture: 'Microservices Design & High Concurrency',
                business: 'MBA Business Thinking (Rikkyo University)'
            },
            languages: {
                title: 'Languages',
                japanese: 'Japanese',
                english: 'English',
                chinese: 'Chinese',
                native: 'Native'
            },
            achievements: {
                title: 'Key Achievements',
                kyc: 'KYC User Growth',
                marathon: 'Video Generation Zero Downtime',
                performance: 'Performance Improvement'
            },
            advantages: {
                title: 'Competitive Advantages',
                triple: {
                    title: 'Triple Skills',
                    desc: 'Backend Dev + Data Science + MBA'
                },
                utokyo: {
                    title: 'U-Tokyo Matsuo Lab Graduate',
                    desc: 'Top-tier AI education in Japan'
                },
                experience: {
                    title: 'Rich Practical Experience',
                    desc: '6 years engineering + Real AI system development'
                },
                multicultural: {
                    title: 'Multilingual & Multicultural',
                    desc: 'JLPT N1, TOEIC 825, Native Chinese / Shanghai + Tokyo'
                }
            }
        },
        footer: {
            location: 'Location:',
            tokyo: 'Tokyo, Japan'
        }
    },
    zh: {
        nav: {
            resume: '简历'
        },
        hero: {
            utokyo: '东京大学 松尾研 GCI讲座结业',
            mba: '立教大学 MBA 在读',
            years: '年',
            languages: '种语言',
            viewProjects: '查看项目',
            about: '关于'
        },
        skills: {
            title: '技术栈'
        },
        projects: {
            title: '项目经历',
            ds: {
                title: 'AI & 数据科学',
                utokyo: {
                    title: '东京大学 松尾研 机器学习项目群',
                    desc: '在数据科学GCI讲座完成3个实战项目。泰坦尼克号生存预测达到Kaggle Top 3%。完成NFL选秀预测、员工离职分析及HR战略提案。',
                    result1: 'Kaggle Top 3%',
                    result2: '完整ML流程构建',
                    result3: '商业战略应用'
                },
                rag: {
                    title: '医疗RAG系统 PoC',
                    desc: '使用AWS Bedrock (Claude API) 和OpenSearch构建医疗病历智能检索系统。实现保险金额自动计算功能，验证RAG架构的实用性。',
                    result1: '医疗文档智能检索',
                    result2: '保险计算流程自动化',
                    result3: '生成式AI医疗应用'
                }
            },
            backend: {
                title: '后端工程',
                marathon: {
                    title: '微服务视频处理系统',
                    desc: '为上海国际马拉松开发大规模系统，生成2万名参赛者视频。采用Molecular.js微服务设计、Kubernetes负载均衡、Redis队列优化。',
                    result1: '2万人视频生成零故障',
                    result2: '任务压缩1/1000算法',
                    result3: '微服务高可用性'
                },
                kyc: {
                    title: 'KYC 数字化系统',
                    desc: '为外汇CRM系统完全数字化KYC流程。实现文件提交到审核的自动记录、PDF自动生成功能，大幅提升客户企业新用户获取率。',
                    result1: '月新增用户 2-3倍增长',
                    result2: '审核流程90%自动化',
                    result3: '多租户支持'
                },
                medical: {
                    title: '医疗系统认证 & 优化',
                    desc: '为公共卫生系统引入TOTP双因素认证，增强安全性。开发文件共享管理模块，通过SQL优化提升数据处理速度30%。',
                    result1: '双因素认证实现',
                    result2: '处理速度提升30%',
                    result3: '安全性增强'
                },
                sns: {
                    title: 'SNS 聊天室 & AWS优化',
                    desc: '为股票交易者SNS平台开发聊天室模块。使用AWS Lambda进行Dirty Word过滤，处理速度提升50%。',
                    result1: '处理时间减少50%',
                    result2: '高负载稳定性提升',
                    result3: 'Serverless优化'
                }
            }
        },
        experience: {
            title: '工作经历',
            r102: {
                location: '东京',
                role: '软件工程师 (兼职)',
                achievement1: '医疗RAG系统PoC开发',
                achievement2: 'TOTP双因素认证实现',
                achievement3: '数据处理速度提升30%'
            },
            kangaroo: {
                location: '上海, 中国',
                role: '后端工程师',
                achievement1: '外汇CRM系统开发',
                achievement2: 'KYC流程完全数字化',
                achievement3: '月新增用户2-3倍增长'
            },
            anystreaming: {
                location: '上海, 中国',
                role: '后端工程师',
                achievement1: '媒体视频处理系统开发',
                achievement2: '上海国际马拉松 2万人视频生成',
                achievement3: '微服务架构设计实现'
            },
            nirvana: {
                location: '上海, 中国',
                role: '后端工程师',
                achievement1: 'SNS平台开发',
                achievement2: 'AWS Lambda性能优化',
                achievement3: '处理速度提升50%'
            }
        },
        about: {
            title: '关于',
            positioning: {
                title: '定位',
                text: '后端工程师 × 数据科学家 × MBA<br>技术实现力 + 数据分析力 + 商业视角'
            },
            education: {
                title: '教育背景',
                rikkyo: '立教大学 商业设计研究科 (MBA)',
                utokyo: '东京大学 松尾研究室 数据科学GCI讲座结业',
                xiamen: '厦门大学 计算机科学 (工学学士)'
            },
            strengths: {
                title: '核心竞争力',
                backend: '6年后端开发经验 (金融/媒体/医疗)',
                ai: 'AI & 数据科学 (东大松尾研结业)',
                architecture: '微服务设计 & 高并发处理',
                business: 'MBA商业思维 (立教大学)'
            },
            languages: {
                title: '语言能力',
                japanese: '日语',
                english: '英语',
                chinese: '中文',
                native: '母语'
            },
            achievements: {
                title: '主要成果',
                kyc: 'KYC用户增长',
                marathon: '视频生成零故障',
                performance: '性能提升'
            },
            advantages: {
                title: '差异化优势',
                triple: {
                    title: '三重技能',
                    desc: '后端开发 + 数据科学 + MBA'
                },
                utokyo: {
                    title: '东大松尾研结业',
                    desc: '日本顶级AI教育'
                },
                experience: {
                    title: '丰富实战经验',
                    desc: '6年工程经验 + 实际AI系统开发'
                },
                multicultural: {
                    title: '多语言·多文化',
                    desc: '日语N1, TOEIC 825, 母语中文 / 上海+东京工作'
                }
            }
        },
        footer: {
            location: '地点:',
            tokyo: '东京, 日本'
        }
    }
};

// Current language
let currentLang = 'ja';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initResumeDownload();
    initSmoothScroll();
});

// Language switcher
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                switchLanguage(lang);
                
                // Update active button
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    const data = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = getNestedValue(data, key);
        
        if (value) {
            if (element.innerHTML.includes('<br>')) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Resume download
function initResumeDownload() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Map of resume files for each language
        const resumeFiles = {
            'ja': '汎用履歴書.pdf',
            'en': '汎用履歴書.pdf', // If you have English version, change this
            'zh': '汎用履歴書.pdf'  // If you have Chinese version, change this
        };
        
        // Create temporary link and trigger download
        const link = document.createElement('a');
        link.href = `/mnt/user-data/uploads/${resumeFiles[currentLang]}`;
        link.download = `Shao_Yulu_Resume_${currentLang}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Add scroll effect to nav
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
    } else {
        nav.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    }
    
    lastScroll = currentScroll;
});
