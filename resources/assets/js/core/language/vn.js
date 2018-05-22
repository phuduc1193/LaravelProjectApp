export default {
  form: {
    loginTitle: "Đăng nhập tài khoản",
    registerTitle: "Đăng ký tài khoản",
    login: "Đăng nhập",
    register: "Đăng ký",
    name: "Tên",
    username: "Tên đăng nhập",
    email: "Email",
    password: "Mật khẩu",
    passwordConfirmation: "Xác nhận mật khẩu",
    remember: "Lưu tài khoản đăng nhập",
    returnHome: "Quay về trang chủ",
    reportProblem: "Báo cáo sự cố",
    reportDescription: "Xin vui lòng tóm tắt lại sự cố bạn đã gặp.",
    select: "Chọn",
    ok: "Đồng ý",
    save: "Lưu",
    create: "Tạo mới",
    cancel: "Hủy bỏ",
    clear: "Xóa",
    edit: "Chỉnh sửa",
    logout: "Đăng xuất",
    projectName: "Tên dự án",
    estimatedDuration: "Kế hoạch làm trong",
    schedule: "Thời gian thi hành",
    startDate: "Ngày bắt đầu",
    endDate: "Ngày kết thúc",
    description: "Nội dung",
    chooseDate: "Chọn ngày",
    chooseTime: "Chọn thời gian",
    progress: "Tiến triển công việc",
    changed: "thay đổi",
    date: "Ngày",
    changePassword: "Thay đổi mật khẩu",
    error: {
      invalidName: "Tên không hợp lệ",
      invalidUsername: "Tên truy cập không hợp lệ",
      invalidEmail: "Email không hợp lệ",
      invalidPassword: "Mật khẩu không hợp lệ",
      invalidPasswordConfirmation: "Xác nhận mật khẩu không trùng khớp",
      invalidDescription: "Nội dung không hợp lệ",
      invalidDateFormat: "Định dạng ngày tháng không hợp lệ"
    },
    rule: {
      password:
        "Mật khẩu phải có ít nhất 8 kí tự, bao gồm chữ thường, chữ hoa và số"
    }
  },
  notification: {
    switchLanguageSuccess: "Đổi ngôn ngữ thành công!",
    reportSuccess: "Cảm ơn về sự hợp tác của bạn!",
    requestFailed:
      "Hệ thống không thể xử lý yêu cầu của bạn. Xin vui lòng thử lại sau.",
    missingSchedule: "Xin vui lòng chọn thời gian thi hành.",
    updateSuccessful: "Dữ liệu được thay đổi thành công!"
  },
  errorMessage: {
    pageNotExists: "Chúng tôi không thấy chuyên mục bạn đang tìm.",
    returnHomeOrReport:
      "Xin vui lòng quay lại trang chủ hoặc báo lỗi để chúng tôi phục vụ bạn tốt hơn.",
    unauthorized: "Bạn không có quyền truy cập trang này.",
    returnHome: "Xin vui lòng quay lại trang chủ."
  },
  page: {
    dashboard: "Trang chủ",
    projects: "Dự án",
    list: "Xem tất cả",
    view: "Xem",
    create: "Thêm mới",
    edit: "Chỉnh sửa",
    profile: "Profile"
  },
  tableHeader: {
    project: "Dự án",
    meta: "Meta",
    assignedTo: "Người đảm nhiệm",
    status: "Tình trạng",
    deadline: "Hạn chót"
  },
  noRecord: "Không có dữ liệu",
  backToList: "Quay lại",
  backToView: "Quay lại",
  unit: {
    hours: "giờ"
  },
  apiResponse: {
    Unauthorized: "Thông tin đăng nhập không hợp lệ."
  },
  status: {
    new: "Mới",
    scheduled: "Đã lên lịch",
    inProgress: "Đang tiến hành",
    done: "Hoàn thành"
  },
  databaseColumn: {
    created_at: "ngày khởi tạo",
    started_at: "ngày bắt đầu",
    ended_at: "ngày kết thúc",
    percentage: "phần trăm tiến triển",
    status_id: "trạng thái",
    description: "nội dung"
  }
};
