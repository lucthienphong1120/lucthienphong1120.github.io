function showtopic(title,message) {
    var main = document.getElementById('topic');
    var topic = document.createElement('div');
    
    topic.onclick = function (event) {
        if (event.target.closest('#back-topic')) {
            main.removeChild(topic);
        }
    };
    topic.classList.add('topic-main', 'mt-5');
    //add code
    topic.innerHTML = `
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10">
                                    <h1 style="font-size: 45px;">${title}</h1>
                                    <p style="font-size: 18px;">
                                        by <a href="#">LTP</a>
                                    </p>
                                    <hr>
                                    <div class="content">
                                        ${message}
                                    </div>
                                    <hr>
                                    <a href="#topic-blog" id="back-topic" class="btn" style="margin: 10px;">Back</a>
                                </div>
                            </div>
                        </div>
                    `;
    main.appendChild(topic);    //add child
}
// Topics
function showtopic1() {
    showtopic(
        title = `How did i build this blog ?`,
        message = `
        <h2>Hôm nay mình sẽ hướng dẫn các bạn cách làm một blog</h2>
        <p>Khi mới xuất hiện, Blog nhanh chóng trở thành một từ phổ biến và có một điều chắc chắn: Internet giống như một bục diễn thuyết và hàng triệu người sẵn sàng xây dựng tiếng nói của mình qua blog – một từ rút gọn của "web log".</p>
        <p>Xây dựng một trang self-hosted blog (hay còn gọi là stand alone blog). Đây là loại blog tự host, khái niệm này được phân biệt với hosted blog là các dịch vụ blog miễn phí trên mạng. Điều này có nghĩa là mua một địa chỉ web (hay còn gọi là domain name), mua tên miền, trả phí để lưu trữ trên web và sau đó là tự mình xây dựng trang blog riêng.</p>
        <h2>Trước khi bắt đầu</h2>
        <p>Có 2 điều cần phải thực hiện trước khi xây dựng self-hosted blog. Đầu tiên là đăng ký domain name và thứ 2 là sắp xếp host: hiệu quả nhất là sử dụng không gian lưu trữ trên một server, server này sẽ kết nối với web để trang blog luôn truy cập được.</p>
        <p>Mặc dù không phải là bắt buộc nhưng sẽ tốt hơn là mua cả 2 yêu cầu trên từ cùng một công ty. Bên cạnh đó, có rất nhiều hãng host web bao gồm web domain trong gói host. Hiện nay, có rất nhiều công ty cung cấp dịch vụ host và đăng ký domain name nhưng không có cách nào để phân biệt giữa các nhà cung cấp. Mặc dù vậy, có một vài điều bạn nên xem qua trước khi ký hợp đồng với họ.</p>
        <p>Bên cạnh đó, hãy tìm lựa chọn ẩn địa chỉ portal (địa chỉ bưu chính) khỏi bị lộ khi đăng kí. Ngoài ra, hãy nhớ đánh dấu vào lịch để không quên thời gian hết hạn. Công ty bạn đăng ký miền với họ (hay còn gọi là registrar) sẽ gửi một thông báo nhắc nhở. Dẫu vậy, quên ngày hết hạn có thể gây ra nhiều phức tạp, thậm chí còn khiến bạn mất mãi mãi tên miền của mình.</p>
        <p>Website hosting – thuê không gian lưu trữ trên một server internet sẽ lưu trữ trang blog của bạn – là nơi phức tạp hơn đôi chút. Điều này là do có rất nhiều lựa chọn khác nhau.</p>
        <h2>Lựa chọn host</h2>
        <p>Khi nói về việc chọn một host cho trang WordPress blog, thực chất chỉ có 2 yêu cầu – hỗ trợ cho PHP 5.2.4 và MySQL and 5.0.15.</p>
        <p>Người dùng không cần phải nghĩ xem nó là cái gì mà chỉ cần biết rằng nó sẽ cho phép các bài viết của bạn được đăng tải bằng cách sử dụng đường link thân thiện hơn, ví dụ là www.yourwebdomain.co.uk/events thay vì www.yourwebdomain.co.uk/?p=69.</p>
        <h2>Blog dễ dàng hơn</h2>
        <p>Cũng là một lựa chọn phổ biến (ở trang www.wordpress.com chứ không phải www.wordpress.org). Google cũng góp mặt trong “cuộc chơi” này với Blogger (sắp đổi tên thành Google Blogs): nếu có tài khoản Google (bao gồm cả Gmail), bạn có thể sử dụng trang blog này ngay lập tức</p>
        <h2>Nhận phần mềm</h2>
        <p>Trước tiên, bạn sẽ cần một cách nào đó để đăng tải các file lên server. Điều này có thể thực hiện bằng cách sử dụng một số công cụ như File Transfer Protocol, hoặc FTP. Một số hỗ trợ FTP cơ bản đã được tích hợp sẵn trong Windows nhưng chúng tôi vẫn khuyến cáo người dùng download một trong những công cụ FTP riêng miễn phí đang có trên thị trường. Nó sẽ giúp công việc này dễ dàng hơn nhiều. Công cụ được yêu thích khá nhiều là Filezilla.</p>
        <p>Windows cũng có Notepad, là công cụ chỉnh sửa văn bản cơ bản, nhưng chúng tôi khuyến cáo người dùng cài đặt Notepad++. Đây là công cụ miễn phí, sử dụng màu để giúp việc chỉnh sửa dễ dàng hơn. Tất nhiên, điều chắc chắn bạn cần WordPress.</p>
        <p>Khi hoàn thành, phải chuột vào file mới download và chọn Extract hoặc Extract All để chạy wizard giải nén. Kích Next → Browse → Desktop → OK → Next. Kích vào để loại bỏ dấu tích ở hộp thoại “Show extracted files” rồi kích Finish.</p>
        <h2>Tạo một cơ sở dữ liệu</h2>
        <p>Để thực hiện, chạy Notepad++ và kích vào File → Open. Điều hướng tới folder WordPress trên Windows Desktop và kích đúp vào file có tên “wp-config-sample.php”. Notepad++ sẽ hiển thị số dòng ở bên tay trái của cửa sổ. Nếu chúng không hiển thị, kích vào Settings → Preferences. Chọn thẻ Editing và đặt dấu tích vào hộp thoại “Display line number”. Sau đó, kích Close. Tiếp đến, cuộn chuột xuống wp-config-sample.php để tìm cài đặt MySQL – nó sẽ nằm ở dòng 19.</p>
        <p>Bạn sẽ thấy nơi điền chữ cho tên cơ sở dữ liệu, tên người dùng (dòng 22) và mật khẩu (dòng 25, lần lượt là “database_name_here”, “username_here” và “password_here”. Người dùng chỉ việc thay thế chúng bằng thông tin chi tiết cá nhân, nhưng nhớ giữ dấu ngoặc kép.</p>
        <p>Chú ý rằng entry MySQL hostname (dòng 28) thường được để là “localhost” – nhưng hãy nhớ kiểm tra lại web host xem có gì khác biệt hay không.</p>
        <p>Còn một mục khác cũng cần phải thay đổi, giữa dòng 45 và 52. Mục này được sử dụng để giúp bảo vệ WordPress khỏi hacker và yêu cầu nhập chuỗi code 8 ký tự độc đáo. Thực tế, chúng được tạo tự động bởi WordPress và nếu nhìn vào dòng 40 trong file wp-config-sample.php, bạn sẽ thấy một đường link để tạo code.</p>
        <p>Code được tạo tự động mỗi lần địa chỉ được ghé thăm, vậy nên hãy nhớ rằng bạn đã đặt chúng thật độc đáo và an toàn khi sử dụng. Copy và paste văn bản từ trang web vào Notepad++ để thay thế những dòng này.</p>
        <p>Sau khi đã thực hiện các thay đổi trên, kích vào menu File và chọn Save As. Chỉnh sửa tên file thành “wp-config” (xóa đoạn “-sample”) và kích Save. Folder WordPress giờ đây đã sẵn sàng để đăng tải bài viết.</p>
        <h2>Trên đây là demo các bước thực hiện</h2>
        <p>Xem chi tiết tại <a href="https://www.crf-blogger.gq/huong-dan-tao-mot-blogger-nhu-toi-da-lam/" target="_blank">https://www.crf-blogger.gq/huong-dan-tao-mot-blogger-nhu-toi-da-lam/</a></p>
        `
    );
}
function showtopic2() {
    showtopic(
        title = `What is phishing? How to prevent phishing?`,
        message = `
        <p>Phishing là một hình thức tấn công mạng nguy hiểm, có thể gây ra nhiều thiệt hại cho các cá nhân, tổ chức, hay doanh nghiệp. Cùng tìm hiểu Tấn công Phishing là gì? Một số cách thức nhận biết và phòng chống tấn công Phishing qua website giả mạo hiệu quả.</p>
        <h2>What is Phishing?</h2>
        <p>Phishing (Tấn công giả mạo) là hình thức tấn công mạng mà kẻ tấn công giả mạo thành một đơn vị uy tín để lừa đảo người dùng cung cấp thông tin cá nhân cho chúng..</p>
        <h2>Các phương thức tấn công Phishing</h2>
        <p>Có nhiều kỹ thuật mà tin tặc sử dụng để thực hiện một vụ tấn công Phishing.</p>
        
        <h4>1. Giả mạo email</h4>
        <p>Một trong những kỹ thuật cơ bản trong tấn công Phishing là giả mạo email. Tin tặc sẽ gửi email cho người dùng dưới danh nghĩa một đơn vị/tổ chức uy tín, dụ người dùng click vào đường link dẫn tới một website giả mạo và “mắc câu”.</p>
        <p>Những email giả mạo thường rất giống với email chính chủ, chỉ khác một vài chi tiết nhỏ, khiến cho nhiều người dùng nhầm lẫn và trở thành nạn nhân của cuộc tấn công.</P>
        <ul>
            <li>Địa chỉ người gửi (VD: địa chỉ đúng là sales.congtyA@gmail.com thì địa chỉ giả mạo có thể là sale.congtyA@gmail.com)</li>
            <li>Chèn Logo chính thức của tổ chức để tăng độ tin cậy</li>
            <li>Thiết kế các cửa sổ pop-up giống y hệt bản gốc (cả về màu sắc, font chữ,…)</li>
            <li>Sử dụng kĩ thuật giả mạo đường dẫn (link) để lừa người dùng (VD: text là vietcombank.com.vnnhưng khi click vào lại điều hướng tới vietconbank.com.vn)</li>
            <li>Sử dụng hình ảnh thương hiệu của các tổ chức trong email giả mạo để tăng độ tin cậy.</li>
        <h4>2. Giả mạo Website</h4>
        <p>Thực chất, việc giả mạo website trong tấn công Phishing chỉ là làm giả một Landing page chứ không phải toàn bộ website. Trang được làm giả thường là trang đăng nhập để cướp thông tin của nạn nhân. Kỹ thuật làm giả website có một số đặc điểm sau:</p>
        <ul>
            <li>Thiết kế giống tới 99% so với website gốc</li>
            <li>Đường link (url) chỉ khác 1 ký tự duy nhất. VD: reddit.com (thật) vs redit.com (giả); google.com vs gugle.com; microsoft.com vs mircosoft.com hoặc verify-microsoft.com.</li>
            <li>Không có thông tin của người dùng</li>
            <li>Luôn có những thông điệp khuyến khích người dùng nhập thông tin cá nhân vào website (call-to-action).</li>
        </ul>
        <h4>3. Vượt qua các bộ lọc Phishing</h4>
        <p>Hiện nay, các nhà cung cấp dịch vụ email như Google hay Microsoft đều có những bộ lọc email spam/phishing để bảo vệ người dùng. Tuy nhiên những bộ lọc này hoạt động dựa trên việc kiểm tra văn bản (text) trong email để phát hiện xem email đó có phải phishing hay không. Hiểu được điều này, những kẻ tấn công đã cải tiến các chiến dịch tấn công Phishing lên một tầm cao mới. Chúng thường sử dụng ảnh hoặc video để truyền tải thông điệp lừa đảo thay vì dùng text như trước đây. Người dùng cần tuyệt đối cảnh giác với những nội dung này.</p>
        <h2>Cách phòng chống Phishing</h2>
        <ul>
            <li>Cảnh giác với các email có xu hướng thúc giục bạn nhập thông tin nhạy cảm</li>
            <li>Không click vào bất kỳ đường link nào được gửi qua email nếu bạn không chắc chắn 100% an toàn.</li>
            <li>Không bao giờ gửi thông tin bí mật qua email.</li>
            <li>Không trả lời những thư lừa đảo. Những kẻ gian lận thường gửi cho bạn số điện thoại để bạn gọi cho họ vì mục đích kinh doanh.</li>
            <li>Sử dụng Tường lửa và phần mềm diệt virus. Hãy nhớ luôn cập nhật phiên bản mới nhất của các phần mềm này</li>
            <li>Hãy chuyển tiếp các thư rác đến spam@uce.gov. Bạn cũng có thể gửi email tới reportphishing@antiphishing.org Tổ chức này giúp chống lại các phishing khác.</li>
        </ul>
        `
    );
}
function showtopic3() {
    showtopic(
        title = `5 ways to learn English`,
        message = `
        <p>When it comes to learning English, do you have a habit of reading-copy-repeat to memorize
            new words? This way of learning is actually outdated, both passive and makes you bored
            quickly. There is a saying that 'practice makes perfect' (with iron grinding day, one
            day), but to 'sharpen iron' effectively, you need to learn the right method. Here are 5
            fastest ways to learn English, especially suitable for busy people:</p>
        <h2>Imitate native speakers</h2>
        <p>In the 4 skills Listening - Speaking - Reading - Writing, most learners have difficulty
            with Speaking skills. You can easily find a lot of materials for tinkering with the
            remaining skills, but to practice speaking English successfully, work hard to imitate
            the pronunciation and accent of native speakers.</p>
        <p>Do you often listen to news on news websites such as BBC, CNN, VOA, watch Discovery
            Channel, Cartoon Network, ..., listen to US-UK music or watch British or American TV
            series? Practice listening to English for at least 10 minutes a day and maintaining that
            habit and, at the same time, try to imitate native speakers of a standard accent.</p>
        <h2>Learn vocabulary by topic</h2>
        <p>When grouped into the same topic, memorizing vocabulary is guaranteed to become much
            simpler. This is a particularly good way for office workers because when you learn
            vocabulary in your major, you will maximize your vocabulary, making your conversations
            with colleagues or foreign partners float. flowing and many ideas. To improve your
            English at work, you can start with a number of popular topics such as: writing emails,
            giving presentations, meetings in English, working with foreign bosses, ...</p>
        <h2>Talk a lot</h2>
        <p>You should practice what you learned by speaking English regularly. For example, when
            shopping, try to name the items you want to buy in English, note down words you do not
            know to look up the dictionary and learn more.</p>
        <p>When talking with your boss or foreign colleagues, even if your vocabulary is limited or
            the grammar is not strong, try to express what you mean with simple vocabulary.</p>
        <p>In addition, you can ask a friend who is good at English to edit, comment for you to
            gradually overcome the weaknesses. Allow yourself to be wrong because English is not
            your first language, you have the right to be confident because you have the ability to
            communicate in two different languages.</p>
        <h2>Learn English through short stories</h2>
        <p>You will find lots of interesting English short stories on the Internet with audio to
            help you practice listening. Then, write down what you hear with the simple past tense
            on paper, and then move on to other tenses such as past complete, present, or future.
        </p>
        <p>You can use online tools, or have a friend or native speaker check your spelling and
            grammar. After a short time, ensuring your English grammar will make clear strides.</p>
        <h2>Choose the right English learning environment</h2>
        <p>One of the fastest ways to learn English is to practice in an English speaking
            environment with native speakers. According to English language experts, the environment
            is a very important factor for language learning. That is the reason why people who
            study abroad or settle for a long time abroad communicate in English very fluently and
            naturally.</p>
        <p>When you regularly interact with the standard accent of native speakers, you will
            gradually correct the common mistakes Vietnamese people make when speaking English such
            as omitting the last sound s, sh, ch ..., or intonation lacks up and down, emphasis on
            important keywords.</p>
        <p>To access the ideal English environment, you can join English clubs, or visit reputable
            English centers with flexible class sizes and expert native speakers such as Wall Street
            English.</p>
        <p>The above ways to learn English will hopefully help you find the right method for you.
        </p>
        `
    );
}
function showtopic4() {
    showtopic(
        title = `Information Security Threats`,
        message = `
        <h2>Động cơ, mục đích, mục tiêu của những cuộc tấn công bảo mật</h2>
        <p>Trong thế giới của bảo mật, một kẻ tấn công (attacker) tấn công mục tiêu theo ba phần. “động cơ hoặc mục tiêu” (Motive or Objective) khiến cho kẻ tấn công tập trung vào tấn công một hệ thống riêng biệt. một thành phần khác được kẻ tấn công sử dụng phổ biến đó là Phương pháp (Method) nhằm có được quyền truy cập vào hệ thống đích. Ý định của kẻ tấn công cũng được các điểm yếu của hệ thống làm cho thành hiện thực. Ba thành phần đã nêu là những “viên gạch“ chính mà một cuộc tấn công cần.</p>
        <p>Động cơ và mục tiêu (Motive and Objective) của cuộc tấn công vào một hệ thống có thể phụ thuộc vào thứ có giá trị bên trong hệ thống đặc thù đó. Lý do vì sao thì có thể là do “đạo đức” hoặc cũng có thể là do “vô đạo đức”. Tuy nhiên, điều dẫn tới nhiều mối hiểm nguy cho hệ thống, đó là tin tặc (hacker) cần phải có mục tiêu để đạt được. Một vài động cơ đặc trưng đứng sau các cuộc tấn công là nhằm đánh cắp thông tin, lôi kéo dữ liệu, chia rẽ, truyền bá tư tưởng chính trị hoặc tôn giáo, tổn hại đến danh tiếng của mục tiêu hoặc trả thù. Cách thức tấn công và những điểm yếu thì thường đi bên cạnh nhau. kẻ xâm nhập áp dụng hàng tá công cụ, hàng đống công nghệ – từ công nghệ cũ tới công nghệ hiện đại để khai thác điểm yếu trong hệ thống hoặc bảo mật để tạo ra các lỗ hổng và hiện thực hóa mục đích của mình.</p>
        <h2>Phân loại các mối đe dọa bảo mật an toàn thông tin</h2>
        <h4>Network Threats (Đe dọa mạng)</h4>
        <p>Những thành phần chính của cơ sở cấu trúc mạng là đường truyền (routes), khóa (switches) và tường lửa (firewalls). Những thiết bị này không chỉ thực hiện việc truyền dẫn và vận hành mạng, mà chúng còn điều khiển và bảo vệ những ứng dụng, những máy chủ đang hoạt động khỏi các cuộc tấn công hoặc xâm nhập. Thiết bị với cấu trúc càng nghèo nàn, những kẻ xâm nhập càng có cơ hội để khai thác. Điểm yếu thường thấy của mạng máy tính bao gồm thiếu cài đặt thiết lập, truy cập mạng “thoáng”, mã hóa và mật khẩu yếu, thiết bị thiếu những bản vá bảo mật mới nhất. Những mối đe dọa mạng cao cấp nhất bao gồm:</p>
        <ul>
            <li>Thu thập thông tin (information gathering)</li>
            <li>“Đánh hơi” và nghe trộm (Sniffing & Eavesdropping)</li>
            <li>Lừa đảo, giả mạo (Spoofing)</li>
            <li>Chiếm quyền kiểm soát phiên (Session hijacking)</li>
            <li>Tấn công xen giữa (Man-in-the-middle attack)</li>
            <li>Nhiễm độc DNS & ARP (DNS & ARP poisoning)</li>
            <li>Tấn công Password-based (Password-based Attacks)</li>
            <li>Tấn công từ chối dịch vụ (Denial-of-Services Attacks)</li>
            <li>Tấn công phá mã khóa (Compromised Key Attacks)</li>
            <li>Tấn công tường lửa và IDS (Firewall & IDS Attacks)</li>
        </ul>
        <h4>Host Threats (Mối đe dọa đến host)</h4>
        <p>Host threats tập trung vào những phần mềm, ứng dụng hệ thống được cài đặt hoặc hoạt động vượt quá hệ thống đó như Window 2000, .NET Framework, SQL Server, và nhiều thứ khác. Những cấp độ nguy hiểm đến host bao gồm:</p>
        <ul>
            <li>Tấn công bằng phần mềm độc hại (Malware Attacks)</li>
            <li>Lần mò dấu vết (Footprinting)</li>
            <li>Tấn công mật khẩu (Password Attack)</li>
            <li>Tấn công từ chối dịch vụ (Denial-of-Services Attacks)</li>
            <li>Mã thực thi phá hoại (Arbitrary code execution)</li>
            <li>Truy cập không được phép (Unauthorized Access)</li>
            <li>Leo thang đặc quyền (Privilege escalation)</li>
            <li>Tấn công “cửa sau” (Backdoor Attacks)</li>
            <li>Tấn công bảo mật vật lí (Physical Security Threats)</li>
        </ul>
        <h4>Application Threats (Mối đe dọa ứng dụng)</h4>
        <p>Để phân tích các mối đe dọa một các tốt nhất, ta phân chúng vào các loại tổn thương của ứng dụng:</p>
        <ul>
            <li>Dữ liệu không phù hợp / phê duyệt đầu vào (Improper Data/ Input Validation)</li>
            <li>Tấn công xác thực và ủy quyền (Authentication & Authorization Attack)</li>
            <li>Bảo mật bị mất định hình (Security Misconfiguration)</li>
            <li>Hỏng hóc bộ quản lý phiên (Broken Session Management)</li>
            <li>Lỗi tràn bộ nhớ đệm (Buffer Overflow issues)</li>
            <li>Tấn công mật mã (Cryptography Attacks)</li>
            <li>Lỗ hổng SQL (SQL Injection)</li>
            <li>Xử lý lỗi và quản lý ngoại lệ (Improper error handling & exception Management)</li>
        </ul>
        <p>Xem chi tiết tại <a href="https://www.crf-blogger.gq/hacking/ceh-module-1-phan-2-cac-moi-de-doa-ve-bao-mat-va-attack-vectors/" target="_blank">https://www.crf-blogger.gq/hacking/ceh-module-1-phan-2-cac-moi-de-doa-ve-bao-mat-va-attack-vectors/</a></p>
        `
    );
}