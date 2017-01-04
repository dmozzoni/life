require 'test_helper'

class ButterfliesControllerTest < ActionController::TestCase
  setup do
    @checklist = checklists(:one)
    @butterfly = butterflies(:one)
  end

  test "should get index" do
    get :index, params: { checklist_id: @checklist }
    assert_response :success
  end

  test "should get new" do
    get :new, params: { checklist_id: @checklist }
    assert_response :success
  end

  test "should create butterfly" do
    assert_difference('Butterfly.count') do
      post :create, params: { checklist_id: @checklist, butterfly: @butterfly.attributes }
    end

    assert_redirected_to checklist_butterfly_path(@checklist, Butterfly.last)
  end

  test "should show butterfly" do
    get :show, params: { checklist_id: @checklist, id: @butterfly }
    assert_response :success
  end

  test "should get edit" do
    get :edit, params: { checklist_id: @checklist, id: @butterfly }
    assert_response :success
  end

  test "should update butterfly" do
    put :update, params: { checklist_id: @checklist, id: @butterfly, butterfly: @butterfly.attributes }
    assert_redirected_to checklist_butterfly_path(@checklist, Butterfly.last)
  end

  test "should destroy butterfly" do
    assert_difference('Butterfly.count', -1) do
      delete :destroy, params: { checklist_id: @checklist, id: @butterfly }
    end

    assert_redirected_to checklist_butterflies_path(@checklist)
  end
end
