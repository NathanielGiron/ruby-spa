require 'test_helper'

class ApiControllerTest < ActionController::TestCase
  test "should get all" do
    get :all
    assert_response :success
  end

  test "should get show" do
    get :show
    assert_response :success
  end

end
