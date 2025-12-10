export const courseContent = [
    {
        id: 'level-1',
        title: 'المستوى الأول: البداية والأساسيات',
        modules: [
            {
                id: 'intro',
                title: '1. مقدمة عامة',
                lessons: [
                    {
                        id: 'what-is-programming',
                        title: 'ما هي البرمجة ولماذا C++؟',
                        content: `
              <div dir="rtl">
                <h2>ما هي البرمجة؟ (بشكل عميق)</h2>
                <p>تخيل أن لديك "خادماً" قوياً جداً (الحاسوب) لكنه لا يفهم لغة البشر، ولا يملك أي ذكاء ذاتي. هو فقط ينفذ الأوامر بسرعة الضوء. البرمجة هي عملية كتابة "كتالوج" أو "وصفة" دقيقة جداً لهذا الخادم ليقوم بمهمة معينة.</p>
                <p>إذا قلت له "اصنع شاي"، لن يفهم. يجب أن تقول:</p>
                <ol>
                  <li>تحرك 5 خطوات للأمام.</li>
                  <li>مد يدك اليمنى 30 سم.</li>
                  <li>أمسك المقبض... وهكذا.</li>
                </ol>
                <p>هذه التفاصيل الدقيقة هي <strong>الخوارزمية (Algorithm)</strong>، وتحويلها لكلمات يفهمها الحاسوب هو <strong>البرمجة (Coding)</strong>.</p>
                
                <h3>لماذا C++ هي "الوحش"؟</h3>
                <p>لغة C++ ليست مجرد لغة، هي أداة بناء اللغات الأخرى! (Java, Python, JS مكتوبة جزئياً بـ C/C++).</p>
                <ul>
                  <li><strong>الوصول المباشر للذاكرة:</strong> في لغات مثل Python، الذاكرة تدار تلقائياً. في C++، أنت تملك مفاتيح الذاكرة (RAM). يمكنك تحديد البايت (Byte) الذي تريد الكتابة فيه. هذا يعطيك قوة هائلة، ومسؤولية كبيرة.</li>
                  <li><strong>Zero Overhead Abstraction:</strong> يمكنك كتابة كود معقد ومجرد (Abstract) دون أن تدفع ضريبة في الأداء. المترجم ذكي جداً ويحول كودك لأسرع لغة آلة ممكنة.</li>
                </ul>
              </div>
              <hr style="margin: 2rem 0; border-color: #ddd;" />
              <div dir="ltr" style="text-align: left;">
                <h2>What is Programming? (Deep Dive)</h2>
                <p>Imagine you have a very powerful "servant" (the computer), but it doesn't understand human language and has no self-intelligence. It only executes commands at the speed of light. Programming is the process of writing a very precise "catalog" or "recipe" for this servant to perform a specific task.</p>
                <p>If you tell it "Make tea", it won't understand. You must say:</p>
                <ol>
                  <li>Move 5 steps forward.</li>
                  <li>Extend your right hand 30 cm.</li>
                  <li>Grasp the handle... and so on.</li>
                </ol>
                <p>These precise details are the <strong>Algorithm</strong>, and translating them into words the computer understands is <strong>Coding</strong>.</p>

                <h3>Why is C++ the "Beast"?</h3>
                <p>C++ is not just a language; it's a tool for building other languages! (Java, Python, JS are partially written in C/C++).</p>
                <ul>
                  <li><strong>Direct Memory Access:</strong> In languages like Python, memory is managed automatically. In C++, you hold the keys to the memory (RAM). You can specify the exact Byte you want to write to. This gives you immense power, and great responsibility.</li>
                  <li><strong>Zero Overhead Abstraction:</strong> You can write complex, abstract code without paying a performance tax. The compiler is very smart and converts your code into the fastest possible machine code.</li>
                </ul>
              </div>
            `
                    },
                    {
                        id: 'setup',
                        title: 'كيف يعمل الكود؟ (Compiler & Linker)',
                        content: `
              <div dir="rtl">
                <h2>رحلة الكود: من النص إلى البرنامج</h2>
                <p>عندما تضغط "Run"، تحدث عملية معقدة في الكواليس:</p>
                <ol>
                  <li><strong>Preprocessing (المعالجة الأولية):</strong> أي سطر يبدأ بـ <code>#</code> (مثل <code>#include</code>) يتم تنفيذه. يتم نسخ محتوى المكتبات ولصقه في ملفك.</li>
                  <li><strong>Compiling (الترجمة):</strong> يتم تحويل كود C++ إلى لغة تجميع (Assembly) ثم إلى لغة آلة (Object Code - ملفات .o أو .obj). هنا يكتشف المترجم الأخطاء اللغوية (Syntax Errors).</li>
                  <li><strong>Linking (الربط):</strong> يقوم الـ Linker بجمع كل ملفات الـ Object ومكتبات النظام وربطها معاً لصنع ملف تنفيذي واحد (.exe).</li>
                </ol>
                <p>فهم هذه العملية يجعلك مبرمجاً محترفاً يعرف كيف يحل مشاكل الـ "Linking Error" المزعجة.</p>
              </div>
              <hr style="margin: 2rem 0; border-color: #ddd;" />
              <div dir="ltr" style="text-align: left;">
                <h2>The Code Journey: From Text to Program</h2>
                <p>When you press "Run", a complex process happens behind the scenes:</p>
                <ol>
                  <li><strong>Preprocessing:</strong> Any line starting with <code>#</code> (like <code>#include</code>) is executed. Library content is copied and pasted into your file.</li>
                  <li><strong>Compiling:</strong> C++ code is converted into Assembly language and then into Machine Code (Object Code - .o or .obj files). This is where the compiler detects Syntax Errors.</li>
                  <li><strong>Linking:</strong> The Linker combines all Object files and system libraries together to create a single executable file (.exe).</li>
                </ol>
                <p>Understanding this process makes you a professional programmer who knows how to solve annoying "Linking Errors".</p>
              </div>
            `
                    }
                ]
            },
            {
                id: 'basics',
                title: '2. أساسيات اللغة',
                lessons: [
                    {
                        id: 'variables',
                        title: 'المتغيرات والذاكرة (Deep Dive)',
                        content: `
              <div dir="rtl">
                <h2>كيف يخزن المتغير في الذاكرة؟</h2>
                <p>الذاكرة (RAM) عبارة عن صف طويل جداً من الصناديق الصغيرة (Bytes). كل صندوق له عنوان (Address).</p>
                <p>عندما تكتب <code>int x = 10;</code> يحدث ما يلي:</p>
                <ol>
                  <li>نظام التشغيل يبحث عن مكان فارغ في الذاكرة حجمه 4 بايت (لأن int يحتاج 4 بايت).</li>
                  <li>يحجز هذا المكان ويسميه "x" (في جدول الرموز الخاص به).</li>
                  <li>يضع الرقم 10 داخل هذه الـ 4 بايت (بصيغة Binary: 0000...1010).</li>
                </ol>

                <h3>أنواع البيانات وأحجامها</h3>
                <ul>
                  <li><code>char</code>: 1 Byte (يخزن الحرف كرقم ASCII. مثلاً 'A' تخزن كـ 65).</li>
                  <li><code>int</code>: 4 Bytes (يخزن حوالي 2 مليار موجب و 2 مليار سالب).</li>
                  <li><code>double</code>: 8 Bytes (يستخدم معيار IEEE 754 لتخزين الفاصلة العائمة).</li>
                </ul>
              </div>
              <hr style="margin: 2rem 0; border-color: #ddd;" />
              <div dir="ltr" style="text-align: left;">
                <h2>How is a Variable Stored in Memory?</h2>
                <p>Memory (RAM) is a very long row of small boxes (Bytes). Each box has an address.</p>
                <p>When you write <code>int x = 10;</code>, the following happens:</p>
                <ol>
                  <li>The OS looks for an empty space in memory of size 4 bytes (because int needs 4 bytes).</li>
                  <li>It reserves this space and names it "x" (in its symbol table).</li>
                  <li>It places the number 10 inside these 4 bytes (in Binary format: 0000...1010).</li>
                </ol>

                <h3>Data Types and Sizes</h3>
                <ul>
                  <li><code>char</code>: 1 Byte (Stores the character as an ASCII number. E.g., 'A' is stored as 65).</li>
                  <li><code>int</code>: 4 Bytes (Stores about 2 billion positive and 2 billion negative).</li>
                  <li><code>double</code>: 8 Bytes (Uses IEEE 754 standard for floating-point storage).</li>
                </ul>
              </div>
            `
                    },
                    {
                        id: 'operators',
                        title: 'أولويات العمليات (Operator Precedence)',
                        content: `
              <div dir="rtl">
                <h2>لماذا 5 + 3 * 2 = 11 وليس 16؟</h2>
                <p>الرياضيات والبرمجة تتفقان: <strong>الضرب أقوى من الجمع</strong>.</p>
                
                <h3>الهرم الكامل للأولويات (من الأقوى للأضعف)</h3>
                <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
                  <tr style="background:#ddd;"><th>الأولوية</th><th>العملية</th><th>الوصف</th></tr>
                  <tr><td>1</td><td><code>()</code></td><td>الأقواس</td></tr>
                  <tr><td>2</td><td><code>++</code> <code>--</code></td><td>الزيادة والنقصان</td></tr>
                  <tr><td>3</td><td><code>*</code> <code>/</code> <code>%</code></td><td>الضرب والقسمة</td></tr>
                  <tr><td>4</td><td><code>+</code> <code>-</code></td><td>الجمع والطرح</td></tr>
                  <tr><td>5</td><td><code>=</code></td><td>الإسناد</td></tr>
                </table>
              </div>
              <hr style="margin: 2rem 0; border-color: #ddd;" />
              <div dir="ltr" style="text-align: left;">
                <h2>Why is 5 + 3 * 2 = 11 and not 16?</h2>
                <p>Math and Programming agree: <strong>Multiplication is stronger than Addition</strong>.</p>
                
                <h3>Operator Precedence Hierarchy (Strongest to Weakest)</h3>
                <table border="1" style="width:100%; border-collapse:collapse; text-align:center;">
                  <tr style="background:#ddd;"><th>Priority</th><th>Operator</th><th>Description</th></tr>
                  <tr><td>1</td><td><code>()</code></td><td>Parentheses</td></tr>
                  <tr><td>2</td><td><code>++</code> <code>--</code></td><td>Increment & Decrement</td></tr>
                  <tr><td>3</td><td><code>*</code> <code>/</code> <code>%</code></td><td>Multiplication & Division</td></tr>
                  <tr><td>4</td><td><code>+</code> <code>-</code></td><td>Addition & Subtraction</td></tr>
                  <tr><td>5</td><td><code>=</code></td><td>Assignment</td></tr>
                </table>
              </div>
            `
                    }
                ]
            }
        ]
    },
    {
        id: 'level-2',
        title: 'المستوى الثاني: التحكم والدوال',
        modules: [
            {
                id: 'control',
                title: '3. منطق التحكم (Logic)',
                lessons: [
                    {
                        id: 'loops-deep',
                        title: 'فلسفة الحلقات (Loops)',
                        content: `
              <div dir="rtl">
                <h2>كيف يفكر الحاسوب في الحلقة؟</h2>
                <p>الحلقة ليست سحراً، هي مجرد جملة <code>GOTO</code> (اذهب إلى) مخفية.</p>
                <p>عندما تكتب:</p>
                <pre><code class="language-cpp">while (x < 5) {
    cout << x;
    x++;
}</code></pre>
                <p>الحاسوب يترجمها داخلياً إلى شيء يشبه:</p>
                <pre><code class="language-cpp">LABEL_START:
if (x >= 5) goto LABEL_END; // إذا الشرط خطأ، اخرج
cout << x;
x++;
goto LABEL_START; // عد للبداية
LABEL_END:</code></pre>
              </div>
              <hr style="margin: 2rem 0; border-color: #ddd;" />
              <div dir="ltr" style="text-align: left;">
                <h2>How does the computer think about Loops?</h2>
                <p>A loop isn't magic; it's just a hidden <code>GOTO</code> statement.</p>
                <p>When you write a while loop, the computer internally translates it into something like:</p>
                <pre><code class="language-cpp">LABEL_START:
if (x >= 5) goto LABEL_END; // If condition is false, exit
cout << x;
x++;
goto LABEL_START; // Go back to start
LABEL_END:</code></pre>
                <p>Understanding this helps you realize the danger of an <strong>Infinite Loop</strong>. If you forget <code>x++</code>, it will keep jumping to LABEL_START forever!</p>
              </div>
            `
                    }
                ]
            },
            {
                id: 'functions',
                title: '4. الدوال (Functions) والـ Stack',
                lessons: [
                    {
                        id: 'stack-frame',
                        title: 'ماذا يحدث عند استدعاء دالة؟ (Stack Frame)',
                        content: `
              <div dir="rtl">
                <h2>ذاكرة الـ Stack</h2>
                <p>عندما تستدعي دالة، يقوم البرنامج بإنشاء "صندوق" خاص بها في الذاكرة يسمى <strong>Stack Frame</strong>.</p>
                <ul>
                  <li>يحتوي هذا الصندوق على: متغيرات الدالة المحلية، المعاملات (Parameters)، وعنوان العودة.</li>
                  <li>عندما تنتهي الدالة، يتم <strong>تدمير</strong> هذا الصندوق بالكامل.</li>
                </ul>
              </div>
              <hr style="margin: 2rem 0; border-color: #ddd;" />
              <div dir="ltr" style="text-align: left;">
                <h2>The Stack Memory</h2>
                <p>When you call a function, the program creates a special "box" for it in memory called a <strong>Stack Frame</strong>.</p>
                <ul>
                  <li>This box contains: Local variables, Parameters, and the Return Address.</li>
                  <li>When the function finishes, this box is completely <strong>destroyed</strong>.</li>
                </ul>
                <p><strong>That's why:</strong> Local variables don't "live" outside the function. Because their home (Stack Frame) has been demolished!</p>
              </div>
            `
                    }
                ]
            }
        ]
    },
    {
        id: 'level-3',
        title: 'المستوى الثالث: الذاكرة والمصفوفات',
        modules: [
            {
                id: 'arrays',
                title: '5. المصفوفات (Arrays) وعلاقتها بالذاكرة',
                lessons: [
                    {
                        id: 'arrays-memory',
                        title: 'المصفوفة في الذاكرة',
                        content: `
              <div dir="rtl">
                <h2>المصفوفة = عنوان ثابت + إزاحة</h2>
                <p>عندما تقول <code>int arr[5]</code>، يحجز النظام 20 بايت متتالية (5 عناصر × 4 بايت).</p>
                <p>اسم المصفوفة <code>arr</code> هو في الحقيقة <strong>مؤشر (Pointer)</strong> يشير لأول صندوق.</p>
                
                <h3>كيف يصل الحاسوب للعنصر arr[3]؟</h3>
                <p>يقوم بعملية حسابية بسيطة:</p>
                <p><code>العنوان = عنوان_البداية + (3 × حجم_العنصر)</code></p>
              </div>
              <hr style="margin: 2rem 0; border-color: #ddd;" />
              <div dir="ltr" style="text-align: left;">
                <h2>Array = Base Address + Offset</h2>
                <p>When you say <code>int arr[5]</code>, the system reserves 20 contiguous bytes (5 elements × 4 bytes).</p>
                <p>The array name <code>arr</code> is actually a <strong>Pointer</strong> pointing to the first box.</p>
                
                <h3>How does the computer access arr[3]?</h3>
                <p>It performs a simple calculation:</p>
                <p><code>Address = Base_Address + (3 × Element_Size)</code></p>
                <p>This is why arrays are very fast (O(1) Access Time). The computer jumps directly to the required spot without searching.</p>
              </div>
            `
                    }
                ]
            },
            {
                id: 'pointers',
                title: '6. المؤشرات (Pointers) - قلب C++',
                lessons: [
                    {
                        id: 'pointers-visual',
                        title: 'تخيل المؤشرات (Visualization)',
                        content: `
              <div dir="rtl">
                <h2>المؤشر هو "إصبع" يشير</h2>
                <p>تخيل أن المتغير هو "منزل".</p>
                <ul>
                  <li><code>int x = 10;</code> (منزل اسمه x، بداخله الرقم 10).</li>
                  <li><code>int* p = &x;</code> (p هو ورقة مكتوب عليها عنوان منزل x).</li>
                </ul>
                
                <h3>ماذا يحدث هنا؟</h3>
                <pre><code class="language-cpp">*p = 20;</code></pre>
                <ol>
                  <li>اذهب للعنوان المكتوب في الورقة p.</li>
                  <li>ستجد نفسك أمام منزل x.</li>
                  <li>افتح الباب وغير القيمة التي بداخله لتصبح 20.</li>
                </ol>
              </div>
              <hr style="margin: 2rem 0; border-color: #ddd;" />
              <div dir="ltr" style="text-align: left;">
                <h2>The Pointer is a "Finger" Pointing</h2>
                <p>Imagine the variable is a "House".</p>
                <ul>
                  <li><code>int x = 10;</code> (A house named x, containing the number 10).</li>
                  <li><code>int* p = &x;</code> (p is a paper with the address of house x written on it).</li>
                </ul>
                
                <h3>What happens here?</h3>
                <pre><code class="language-cpp">*p = 20;</code></pre>
                <ol>
                  <li>Go to the address written on paper p.</li>
                  <li>You will find yourself in front of house x.</li>
                  <li>Open the door and change the value inside to 20.</li>
                </ol>
                <p>Now, if the owner of house x looks inside, they will find 20!</p>
              </div>
            `
                    }
                ]
            }
        ]
    },
    {
        id: 'level-4',
        title: 'المستوى الرابع: OOP المتقدم',
        modules: [
            {
                id: 'oop',
                title: '7. البرمجة الكائنية (OOP)',
                lessons: [
                    {
                        id: 'oop-philosophy',
                        title: 'فلسفة الكائنات',
                        content: `
              <div dir="rtl">
                <h2>لماذا اخترعوا OOP؟</h2>
                <p>البرمجة القديمة (Procedural) كانت تركز على "الأفعال" (الدوال). لكن العالم الحقيقي مكون من "أشياء" (Objects).</p>
                <p>في OOP، نحن نجمع <strong>البيانات</strong> (الخصائص) و <strong>الأفعال</strong> (الدوال) التي تخص شيئاً معيناً في مكان واحد يسمى <strong>Class</strong>.</p>
                
                <h3>الكبسلة (Encapsulation): مبدأ "ليس من شأنك"</h3>
                <p>لماذا نجعل المتغيرات <code>private</code>؟</p>
                <p>تخيل أنك تصنع جهاز راديو. هل تريد للمستخدم أن يعبث بالأسلاك الداخلية؟ لا! أنت تعطيه أزراراً خارجية (Public Methods) ليغير الصوت.</p>
              </div>
              <hr style="margin: 2rem 0; border-color: #ddd;" />
              <div dir="ltr" style="text-align: left;">
                <h2>Why was OOP invented?</h2>
                <p>Old programming (Procedural) focused on "Actions" (Functions). But the real world is made of "Things" (Objects).</p>
                <p>In OOP, we group <strong>Data</strong> (Attributes) and <strong>Actions</strong> (Methods) related to a specific thing in one place called a <strong>Class</strong>.</p>
                
                <h3>Encapsulation: The "None of Your Business" Principle</h3>
                <p>Why do we make variables <code>private</code>?</p>
                <p>Imagine you are making a radio. Do you want the user to mess with the internal wires? No! You give them external buttons (Public Methods) to change the volume.</p>
                <p>The internal wires are <code>private</code>, and the buttons are <code>public</code>. This protects the device from damage.</p>
              </div>
            `
                    }
                ]
            }
        ]
    },
    {
        id: 'level-5',
        title: 'المستوى الخامس: الاحتراف',
        modules: [
            {
                id: 'advanced',
                title: '8. إدارة الذاكرة والـ STL',
                lessons: [
                    {
                        id: 'memory-leak',
                        title: 'كابوس الـ Memory Leak',
                        content: `
              <div dir="rtl">
                <h2>ما هو تسرب الذاكرة؟</h2>
                <p>في C++، إذا حجزت ذاكرة بـ <code>new</code>، فهي ملكك للأبد حتى تقول <code>delete</code>.</p>
                <p>تخيل أنك تستأجر غرفاً في فندق ولا تسلم المفتاح أبداً عند المغادرة. بعد فترة، سيمتلئ الفندق ولن يجد أحد مكاناً!</p>
                <pre><code class="language-cpp">void badFunction() {
    int* p = new int[1000]; // حجزنا 4000 بايت
    // نسينا delete [] p;
} // انتهت الدالة، وضاع المؤشر p، لكن الذاكرة ما زالت محجوزة!</code></pre>
              </div>
              <hr style="margin: 2rem 0; border-color: #ddd;" />
              <div dir="ltr" style="text-align: left;">
                <h2>What is a Memory Leak?</h2>
                <p>In C++, if you reserve memory with <code>new</code>, it is yours forever until you say <code>delete</code>.</p>
                <p>Imagine you rent rooms in a hotel and never return the key when leaving. After a while, the hotel will be full and no one will find a place!</p>
                <pre><code class="language-cpp">void badFunction() {
    int* p = new int[1000]; // Reserved 4000 bytes
    // Forgot delete [] p;
} // Function ended, pointer p is lost, but memory is still reserved!</code></pre>
                <p>If you call this function a million times, RAM will run out and the device will crash.</p>
              </div>
            `
                    }
                ]
            }
        ]
    }
];
