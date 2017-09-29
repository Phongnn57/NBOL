var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Admin = require('../models/administrators');
var AdminGroup = require('../models/admin-groups')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Meboo',
    layout: 'layout'
  });
});

router.get('/dashboard', function(req, res, next) {
  res.render('admin/dashboard', { title: 'Thống kê' });
});

router.get('/analytics', function(req, res, next) {
  res.render('admin/analytics', { title: 'Thống kê' });
});

router.get('/admin', function(req, res, next) {

  Admin.find().populate('group_id', 'group_name').exec((err, docs) => {
    AdminGroup.find((err, groups) => {
      res.render('admin/admin', {
        title: 'Ban quản trị',
        admins: docs,
        roles: groups
      });
    })

  });

});

router.get('/create-admin', function(req, res, next) {

  AdminGroup.find((err, docs) => {
    if (!err) {
      res.render('admin/create-admin', { title: 'Thêm quản trị viên', roles: docs });
    }
  })


});


router.get('/company', function(req, res, next) {
  res.render('admin/company', { title: 'Công ty' });
});

router.get('/driver', function(req, res, next) {
  res.render('admin/driver', { title: 'Lái xe' });
});

router.get('/driver-image', function(req, res, next) {
  res.render('admin/driver-image', { title: 'Ảnh lái xe' });
});

router.get('/vehicle', function(req, res, next) {
  res.render('admin/vehicle', { title: 'Xe' });
});

router.get('/vehicle-type', function(req, res, next) {
  res.render('admin/vehicle-types', { title: 'Loại xe' });
});

router.get('/customer', function(req, res, next) {
  res.render('admin/customers', { title: 'Khách hàng' });
});

router.get('/booking', function(req, res, next) {
  res.render('admin/booking', { title: 'Đặt xe truyền thống' });
});

router.get('/trip', function(req, res, next) {
  res.render('admin/trips', { title: 'Chuyến đi' });
});

router.get('/area', function(req, res, next) {
  res.render('admin/area', { title: 'Khu vực hoạt động' });
});

router.get('/ride-later', function(req, res, next) {
  res.render('admin/ride-later', { title: 'Chuyến đặt trước' });
});

router.get('/promo', function(req, res, next) {
  res.render('admin/promo', { title: 'Mã khuyến mại' });
});

router.get('/maps', function(req, res, next) {
  res.render('admin/maps', { title: 'Bản đồ toàn cảnh' });
});

router.get('/map-distribute', function(req, res, next) {
  res.render('admin/map-distribute', { title: 'Bản đồ mật độ' });
});

router.get('/feedback', function(req, res, next) {
  res.render('admin/feedback', { title: 'Phản hồi' });
});

// bao cao
router.get('/report-payment', function(req, res, next) {
  res.render('admin/reports/payment', { title: 'Báo cáo thanh toán' });
});

router.get('/report-invite', function(req, res, next) {
  res.render('admin/reports/invite', { title: 'Báo cáo giới thiệu' });
});

router.get('/report-wallet', function(req, res, next) {
  res.render('admin/reports/wallet', { title: 'Báo cáo ví người dùng' });
});

router.get('/report-total-money', function(req, res, next) {
  res.render('admin/reports/total-money', { title: 'Báo cáo tổng tiền' });
});

router.get('/report-pay-driver', function(req, res, next) {
  res.render('admin/reports/pay-driver', { title: 'Báo cáo thanh toán lái xe' });
});

router.get('/report-log-driver', function(req, res, next) {
  res.render('admin/reports/log-driver', { title: 'Báo cáo log lái xe' });
});

router.get('/report-cancel-trip', function(req, res, next) {
  res.render('admin/reports/cancelled', { title: 'Chuyến bị huỷ' });
});

router.get('/report-success-trip', function(req, res, next) {
  res.render('admin/reports/success-trip', { title: 'Báo cáo nhận chuyến' });
});

router.get('/report-time-distinct', function(req, res, next) {
  res.render('admin/reports/time-distinct', { title: 'Báo cáo chênh lệch thời gian' });
});

// cai dat
router.get('/general-setting', function(req, res, next) {
  res.render('admin/setting/general', { title: 'Cài đặt chung' });
});

router.get('/manage-document', function(req, res, next) {
  res.render('admin/setting/document', { title: 'Quản lý hồ sơ' });
});

router.get('/email-template', function(req, res, next) {
  res.render('admin/setting/email-template', { title: 'Mẫu Email' });
});

router.get('/sms-template', function(req, res, next) {
  res.render('admin/setting/sms-template', { title: 'Mẫu SMS' });
});

router.get('/seo-setting', function(req, res, next) {
  res.render('admin/setting/seo', { title: 'Cài đặt SEO' });
});

router.get('/general-language', function(req, res, next) {
  res.render('admin/setting/language', { title: 'Nhãn ngôn ngữ' });
});

router.get('/general-currency', function(req, res, next) {
  res.render('admin/setting/currency', { title: 'Tiền tệ' });
});

// Tien ich
router.get('/car-brand', function(req, res, next) {
  res.render('admin/utilities/car-brand', { title: 'Thương hiệu xe' });
});

router.get('/car-model', function(req, res, next) {
  res.render('admin/utilities/car-model', { title: 'Loại xe/ dòng xe' });
});

router.get('/country', function(req, res, next) {
  res.render('admin/utilities/country', { title: 'Quốc gia' });
});

router.get('/db-backup', function(req, res, next) {
  res.render('admin/utilities/db-backup', { title: 'Sao lưu dữ liệu' });
});

router.get('/district', function(req, res, next) {
  res.render('admin/utilities/district', { title: 'Quận/Huyện' });
});

router.get('/faq-category', function(req, res, next) {
  res.render('admin/utilities/faq-category', { title: 'Danh mục FAQ' });
});

router.get('/faq-setting', function(req, res, next) {
  res.render('admin/utilities/faq', { title: 'Cài đặt FAQ' });
});

router.get('/page-config', function(req, res, next) {
  res.render('admin/utilities/page', { title: 'Cấu hình trang' });
});

router.get('/web-image', function(req, res, next) {
  res.render('admin/utilities/web-image', { title: 'Ảnh trên web' });
});

router.get('/push-notification', function(req, res, next) {
  res.render('admin/utilities/push-notification', { title: 'Gửi thông báo' });
});

router.get('/car-brand', function(req, res, next) {
  res.render('admin/utilities/car-brand', { title: 'Tiền tệ' });
});

router.get('/state', function(req, res, next) {
  res.render('admin/utilities/state', { title: 'Tỉnh/Thành phố' });
});


module.exports = router;
